<?php
require_once 'db.php';
$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

// ------------------------------------------------------------
// GET  /members.php            -> list all members
// GET  /members.php?smk=XXXX   -> get one member
// POST /members.php            -> create (admin only, via body)
// PUT  /members.php?smk=XXXX   -> update one member
// DELETE /members.php?smk=XXXX -> delete one member (admin only)
// ------------------------------------------------------------

if($method === 'GET'){
  if(isset($_GET['id'])){
    $stmt = $pdo->prepare("SELECT * FROM members WHERE id = ?");
    $stmt->execute([$_GET['id']]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    respond($row ?: ['error' => 'Not found'], $row ? 200 : 404);
  } else if(isset($_GET['smk'])){
    $stmt = $pdo->prepare("SELECT * FROM members WHERE UPPER(smk_code) = UPPER(?)");
    $stmt->execute([$_GET['smk']]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    respond($row ?: ['error' => 'Not found'], $row ? 200 : 404);
  } else {
    $stmt = $pdo->query("SELECT * FROM members ORDER BY id ASC");
    respond($stmt->fetchAll(PDO::FETCH_ASSOC));
  }
}

if($method === 'POST'){
  $b = readJsonBody();
  $stmt = $pdo->prepare("INSERT INTO members (smk_code, name, mobile, mool_gaon, hal_gaon, role, profile_completed)
    VALUES (?, ?, ?, ?, ?, ?, 0)");
  $stmt->execute([$b['smk_code'], $b['name'] ?? '', $b['mobile'] ?? '', $b['mool_gaon'] ?? '', $b['hal_gaon'] ?? '', $b['role'] ?? 'યુવા સભ્ય']);
  respond(['success' => true, 'id' => $pdo->lastInsertId()]);
}

if($method === 'PUT'){
  $smk = $_GET['smk'] ?? '';
  $id = $_GET['id'] ?? '';
  $b = readJsonBody();
  if(!$smk && !$id){ respond(['error' => 'smk or id required'], 400); }

  // Build the update dynamically from whichever fields were sent
  $allowedFields = ['name','first_name','father_name','surname','full_name','dob','blood',
    'mool_gaon','hal_gaon','house_type','address','mobile','email','score','level','flags',
    'profile_completed','puja','mangla_aarti','katha','sandhya_aarti','chesta','shibir',
    'study','work_skills','satsang_family','spiritual_guidance','group_name','seva_local',
    'sant_report','haribhakt_known','avail_days','avail_time','school_time','meet_time','call_time',
    'friend1_name','friend1_mob','friend2_name','friend2_mob','friend3_name','friend3_mob',
    'age','bday_fmt','board','chesta_raw','days_to_bday','degree','drives_vehicle',
    'family_in_sabha','family_member_in_grp','family_member_name','father_job','father_mob','granth',
    'granth_raw','has_license','has_own_mobile','hobby','house_type_raw','katha_raw',
    'kundal_seva','kundal_seva_what','languages','local_seva_assigned','local_seva_duration',
    'local_seva_what','medium','member_type','mother_mob','own_job_detail','poshak_leader',
    'puja_raw','result_pct','sabha_obstacle','sabha_transport','sabha_yrs','sabha_yrs_raw',
    'sant_known','satsang_in_home','satsang_yrs','satsang_yrs_raw','school_city','school_name',
    'skills','skills_raw','std_class','stream','study_status','study_status_raw','wants_seva',
    'wears_helmet','wears_seatbelt','work_field','work_status','work_status_raw',
    // Role + Poshak Leader Details fields (added when Poshak Leaders were merged into Members)
    'role','sanchalak_name','address_street','address_line2','city','state','postal_code',
    'country','thaam_name','mool_gaam','satsang_since','witness_haribhakt_name','witness_sant_name',
    'is_chief_deputy',
    // CRITICAL FIX: these 3 fields were never in this whitelist, so the backend was
    // silently dropping them on every save — the PUT request still returned
    // {success:true} (no error), but the value never reached the database. This is
    // exactly why an uploaded photo (own_photo_data), a legacy Drive photo link
    // (photo_url), and Activate/Deactivate (active_status) all appeared to work in
    // the browser but vanished the moment the page reloaded and re-fetched from the
    // server — the server never actually had them.
    'own_photo_data','active_status','photo_url','custom_fields',
    // Added when the Signup form was redesigned to record when each account was created.
    'signup_date'];

  // The frontend sends 'group' (not 'group_name') - map it before building the query
  if(array_key_exists('group', $b) && !array_key_exists('group_name', $b)){
    $b['group_name'] = $b['group'];
  }

  $sets = []; $vals = [];
  $dateFields = ['dob', 'satsang_since', 'signup_date'];
  // These have a UNIQUE index in the database — an empty string '' collides with any
  // OTHER record that also has an empty string (MySQL treats two blank strings as
  // duplicates under a UNIQUE index), which is exactly the
  // "Duplicate entry '' for key 'email'" error. NULL doesn't have this problem — a
  // UNIQUE index allows any number of NULLs — so "no email" should be stored as NULL,
  // not ''.
  $uniqueNullableFields = ['email'];
  foreach($allowedFields as $f){
    if(!array_key_exists($f, $b)) continue;
    $v = $b[$f];
    // A JS array (e.g. flags: ["ચેષ્ટા ✗"]) can't be bound directly as a scalar SQL
    // parameter — PDO errors on it, which was silently failing the ENTIRE update for
    // any record that had a non-null flags value. Store it as JSON text instead.
    if(is_array($v)){ $v = json_encode($v, JSON_UNESCAPED_UNICODE); }
    // An empty string in a DATE column (e.g. dob left blank on manually-added records)
    // is rejected outright under MySQL's strict SQL mode, which also fails the whole
    // update — NULL is what "no date" actually means here, so store that instead.
    if(in_array($f, $dateFields, true) && $v === ''){ $v = null; }
    if(in_array($f, $uniqueNullableFields, true) && $v === ''){ $v = null; }
    $sets[] = "$f = ?"; $vals[] = $v;
  }
  if(empty($sets)){ respond(['error' => 'No fields to update'], 400); }

  // Prefer the numeric id when given — it's stable even when smk_code itself is one of
  // the fields being changed in this very request (e.g. giving a fresh SMK to a record
  // that doesn't have one yet), where matching on smk_code would look for the NEW value
  // in a row that still has the OLD one until this update actually runs.
  if($id){
    $vals[] = $id;
    $whereClause = "WHERE id = ?";
    $identifierDesc = "id '$id'";
  } else {
    $vals[] = $smk;
    // Case-insensitive match — the same SMK can exist under different casings between
    // what the browser has cached and what's actually stored (confirmed multiple times
    // already in this app), and an exact case-sensitive match here would silently update
    // ZERO rows without ever raising an error.
    $whereClause = "WHERE UPPER(smk_code) = UPPER(?)";
    $identifierDesc = "SMK '$smk'";
  }

  $stmt = $pdo->prepare("UPDATE members SET " . implode(', ', $sets) . " $whereClause");
  try{
    $stmt->execute($vals);
    if($stmt->rowCount() === 0){
      // The UPDATE ran without error but matched NO row at all — this is exactly the
      // case that used to silently report {success:true} while saving nothing. Check
      // whether the record even exists, to give a precise, honest error either way.
      $check = $pdo->prepare("SELECT id FROM members $whereClause");
      $check->execute($id ? [$id] : [$smk]);
      if($check->fetch()){
        // Record exists, but every value sent was already identical to what's stored —
        // MySQL's rowCount() is 0 for a "no-op" UPDATE too, and that's genuinely fine.
        respond(['success' => true]);
      } else {
        respond(['error' => "No member found with $identifierDesc — the record may not exist, or may not match exactly."], 404);
      }
    } else {
      respond(['success' => true]);
    }
  }catch(Throwable $e){
    // Report the ACTUAL database error back to the browser instead of a bare 500 —
    // this is temporary diagnostic detail so the exact cause (wrong column name, data
    // type mismatch, etc.) shows up directly in the browser console on the next sync,
    // rather than requiring access to the server's own PHP error log to find out.
    respond(['error' => $e->getMessage()], 500);
  }
}

if($method === 'DELETE'){
  $smk = $_GET['smk'] ?? '';
  if(!$smk){ respond(['error' => 'smk required'], 400); }
  $stmt = $pdo->prepare("DELETE FROM members WHERE UPPER(smk_code) = UPPER(?)");
  $stmt->execute([$smk]);
  respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
