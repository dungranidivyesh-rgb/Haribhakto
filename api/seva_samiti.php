<?php
require_once 'db.php';
$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

// ------------------------------------------------------------
// GET /seva_samiti.php               -> list of all form names + committee counts
// GET /seva_samiti.php?form=NAME     -> committees (with volunteers) for that form
// PUT /seva_samiti.php?form=NAME     -> replace ALL committees for that form
// POST /seva_samiti.php              -> body: {formName} -> create a new empty form
// DELETE /seva_samiti.php?form=NAME  -> delete a whole form and its committees
// ------------------------------------------------------------

if($method === 'GET' && !isset($_GET['form'])){
  $rows = $pdo->query("SELECT form_name, COUNT(*) as committee_count FROM seva_samiti GROUP BY form_name ORDER BY MIN(id) ASC")->fetchAll(PDO::FETCH_ASSOC);
  respond($rows);
}

if($method === 'GET' && isset($_GET['form'])){
  $formName = $_GET['form'];
  $stmt = $pdo->prepare("SELECT * FROM seva_samiti WHERE form_name = ? ORDER BY sort_order ASC");
  $stmt->execute([$formName]);
  $committees = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $result = [];
  foreach($committees as $c){
    $volStmt = $pdo->prepare("SELECT role_type, name, mobile FROM seva_samiti_volunteers WHERE samiti_id = ?");
    $volStmt->execute([$c['id']]);
    $vols = $volStmt->fetchAll(PDO::FETCH_ASSOC);
    $main = []; $assist = [];
    foreach($vols as $v){
      $entry = ['name' => $v['name'], 'mobile' => $v['mobile']];
      if($v['role_type'] === 'main') $main[] = $entry;
      else $assist[] = $entry;
    }
    $result[] = ['samiti_name' => $c['samiti_name'], 'main' => $main, 'assist' => $assist];
  }
  respond($result);
}

if($method === 'POST'){
  $b = readJsonBody();
  $formName = trim($b['formName'] ?? '');
  if(!$formName){ respond(['error' => 'formName required'], 400); }
  $stmt = $pdo->prepare("SELECT COUNT(*) FROM seva_samiti WHERE form_name = ?");
  $stmt->execute([$formName]);
  if($stmt->fetchColumn() > 0){ respond(['error' => 'A form with this name already exists.'], 409); }
  // create a placeholder empty committee so the form "exists" and shows up in the list
  $stmt = $pdo->prepare("INSERT INTO seva_samiti (samiti_name, sort_order, form_name) VALUES ('નવી સમિતિ', 0, ?)");
  $stmt->execute([$formName]);
  respond(['success' => true]);
}

if($method === 'PUT'){
  $formName = $_GET['form'] ?? '';
  if(!$formName){ respond(['error' => 'form required'], 400); }
  $committees = readJsonBody();

  $pdo->beginTransaction();
  try{
    $stmt = $pdo->prepare("SELECT id FROM seva_samiti WHERE form_name = ?");
    $stmt->execute([$formName]);
    $ids = array_column($stmt->fetchAll(PDO::FETCH_ASSOC), 'id');
    if($ids){
      $placeholders = implode(',', array_fill(0, count($ids), '?'));
      $pdo->prepare("DELETE FROM seva_samiti_volunteers WHERE samiti_id IN ($placeholders)")->execute($ids);
      $pdo->prepare("DELETE FROM seva_samiti WHERE form_name = ?")->execute([$formName]);
    }

    $insertSamiti = $pdo->prepare("INSERT INTO seva_samiti (samiti_name, sort_order, form_name) VALUES (?, ?, ?)");
    $insertVol = $pdo->prepare("INSERT INTO seva_samiti_volunteers (samiti_id, role_type, name, mobile) VALUES (?, ?, ?, ?)");

    foreach($committees as $i => $c){
      $insertSamiti->execute([$c['samiti_name'] ?? '', $i, $formName]);
      $samitiId = $pdo->lastInsertId();
      foreach(($c['main'] ?? []) as $v){ $insertVol->execute([$samitiId, 'main', $v['name'] ?? '', $v['mobile'] ?? '']); }
      foreach(($c['assist'] ?? []) as $v){ $insertVol->execute([$samitiId, 'assist', $v['name'] ?? '', $v['mobile'] ?? '']); }
    }
    $pdo->commit();
    respond(['success' => true]);
  }catch(Exception $e){
    $pdo->rollBack();
    respond(['error' => 'Failed to save: ' . $e->getMessage()], 500);
  }
}

if($method === 'DELETE'){
  $formName = $_GET['form'] ?? '';
  if(!$formName){ respond(['error' => 'form required'], 400); }
  $stmt = $pdo->prepare("SELECT id FROM seva_samiti WHERE form_name = ?");
  $stmt->execute([$formName]);
  $ids = array_column($stmt->fetchAll(PDO::FETCH_ASSOC), 'id');
  if($ids){
    $placeholders = implode(',', array_fill(0, count($ids), '?'));
    $pdo->prepare("DELETE FROM seva_samiti_volunteers WHERE samiti_id IN ($placeholders)")->execute($ids);
  }
  $pdo->prepare("DELETE FROM seva_samiti WHERE form_name = ?")->execute([$formName]);
  respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
