<?php
require_once 'db.php';
$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

// ------------------------------------------------------------
// GET /masters.php              -> { "role": [...], "skills": [...], ... } for all fields
// PUT /masters.php?key=skills   -> body: { "options": [...] } — replaces that field's list
// ------------------------------------------------------------

if($method === 'GET'){
  $stmt = $pdo->query("SELECT field_key, options_json FROM masters");
  $out = [];
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    $out[$row['field_key']] = json_decode($row['options_json'], true) ?: [];
  }
  respond($out);
}

if($method === 'PUT'){
  $key = $_GET['key'] ?? '';
  if(!$key){ respond(['error' => 'key required'], 400); }
  $b = readJsonBody();
  $options = $b['options'] ?? null;
  if(!is_array($options)){ respond(['error' => 'options array required'], 400); }

  $stmt = $pdo->prepare("INSERT INTO masters (field_key, options_json) VALUES (?, ?)
    ON DUPLICATE KEY UPDATE options_json = VALUES(options_json)");
  $stmt->execute([$key, json_encode(array_values($options), JSON_UNESCAPED_UNICODE)]);
  respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
