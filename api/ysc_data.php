<?php
require_once 'db.php';
$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

// ------------------------------------------------------------
// Simple key-value store for Yuva Sabha-C content — used for:
//   'content'       -> Karyakar / Dinacharya / Poshak / Vali points + any custom titles' points
//   'list'          -> Sabha Lenar (session-taker) list
//   'custom_titles' -> the list of user-added ("+ Add New") YSC titles
//
// GET  /ysc_data.php            -> { "content": {...}, "list": {...}, "custom_titles": [...] }
// PUT  /ysc_data.php?key=content -> body: { "value": {...} }  (upserts that one key)
// ------------------------------------------------------------

if($method === 'GET'){
  $stmt = $pdo->query("SELECT data_key, data_value FROM ysc_data");
  $out = [];
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    $out[$row['data_key']] = json_decode($row['data_value'], true);
  }
  respond($out);
}

if($method === 'PUT'){
  $key = $_GET['key'] ?? '';
  if(!$key){ respond(['error' => 'key required'], 400); }
  $b = readJsonBody();
  if(!array_key_exists('value', $b)){ respond(['error' => 'value required'], 400); }
  $stmt = $pdo->prepare("INSERT INTO ysc_data (data_key, data_value) VALUES (?, ?)
    ON DUPLICATE KEY UPDATE data_value = VALUES(data_value)");
  $stmt->execute([$key, json_encode($b['value'], JSON_UNESCAPED_UNICODE)]);
  respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
