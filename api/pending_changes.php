<?php
require_once 'db.php';
$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

// Dashboard uses 'poshak' as the module key, but the database ENUM uses 'poshak_leaders' —
// map between the two so nothing needs to change on the schema side.
function toDbModule($key){ return $key === 'poshak' ? 'poshak_leaders' : $key; }
function fromDbModule($key){ return $key === 'poshak_leaders' ? 'poshak' : $key; }

// ------------------------------------------------------------
// GET    /pending_changes.php       -> list all pending changes
// POST   /pending_changes.php       -> submit a new pending change (replaces any existing one for the same record)
// DELETE /pending_changes.php?id=X  -> remove a pending change (used after approve or decline)
// ------------------------------------------------------------

if($method === 'GET'){
  $stmt = $pdo->query("SELECT * FROM pending_changes ORDER BY id ASC");
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach($rows as &$r){
    $r['module'] = fromDbModule($r['module_key']);
    $r['recordSmk'] = $r['record_smk'];
    $r['proposedRecord'] = json_decode($r['proposed_data'], true);
    $r['submittedAt'] = str_replace(' ', 'T', $r['submitted_at']) . 'Z';
    $r['mobile'] = $r['submitted_by_email']; // dashboard's field name for the submitter's identifier
  }
  respond($rows);
}

if($method === 'POST'){
  $b = readJsonBody();
  $moduleKey = toDbModule($b['module'] ?? '');
  $recordSmk = $b['recordSmk'] ?? '';
  if(!$moduleKey || !$recordSmk){ respond(['error' => 'module and recordSmk required'], 400); }

  // remove any existing pending change for this same record first (replace, don't stack duplicates)
  $del = $pdo->prepare("DELETE FROM pending_changes WHERE module_key = ? AND record_smk = ?");
  $del->execute([$moduleKey, $recordSmk]);

  $stmt = $pdo->prepare("INSERT INTO pending_changes (module_key, record_smk, submitted_by_role, submitted_by_email, proposed_data) VALUES (?, ?, ?, ?, ?)");
  $stmt->execute([
    $moduleKey, $recordSmk,
    $b['role'] ?? 'yuva',
    $b['mobile'] ?? '',
    json_encode($b['proposedRecord'] ?? [])
  ]);
  respond(['success' => true, 'id' => $pdo->lastInsertId()]);
}

if($method === 'DELETE'){
  $id = $_GET['id'] ?? '';
  if(!$id){ respond(['error' => 'id required'], 400); }
  $stmt = $pdo->prepare("DELETE FROM pending_changes WHERE id = ?");
  $stmt->execute([$id]);
  respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
