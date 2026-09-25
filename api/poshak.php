<?php
require_once 'db.php';
$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

if($method === 'GET'){
  if(isset($_GET['smk'])){
    $stmt = $pdo->prepare("SELECT * FROM poshak_leaders WHERE smk_code = ?");
    $stmt->execute([$_GET['smk']]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    respond($row ?: ['error' => 'Not found'], $row ? 200 : 404);
  } else {
    $stmt = $pdo->query("SELECT * FROM poshak_leaders ORDER BY id ASC");
    respond($stmt->fetchAll(PDO::FETCH_ASSOC));
  }
}

if($method === 'PUT'){
  $smk = $_GET['smk'] ?? '';
  $b = readJsonBody();
  if(!$smk){ respond(['error' => 'smk required'], 400); }

  $allowedFields = ['poshak_leader_name','poshak_leader_name_guj','phone','member_type','dob',
    'satsang_since','address_street','address_line2','city','state','postal_code','country',
    'thaam_name','mool_gaam','witness_haribhakt_name','witness_sant_name','email',
    'initials','sanchalak_name'];

  $sets = []; $vals = [];
  foreach($allowedFields as $f){
    if(array_key_exists($f, $b)){ $sets[] = "$f = ?"; $vals[] = $b[$f]; }
  }
  if(empty($sets)){ respond(['error' => 'No fields to update'], 400); }
  $vals[] = $smk;

  $stmt = $pdo->prepare("UPDATE poshak_leaders SET " . implode(', ', $sets) . " WHERE smk_code = ?");
  $stmt->execute($vals);
  respond(['success' => true]);
}

if($method === 'DELETE'){
  $smk = $_GET['smk'] ?? '';
  if(!$smk){ respond(['error' => 'smk required'], 400); }
  $stmt = $pdo->prepare("DELETE FROM poshak_leaders WHERE smk_code = ?");
  $stmt->execute([$smk]);
  respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
