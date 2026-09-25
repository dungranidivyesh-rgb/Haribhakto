<?php
require_once 'db.php';
$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

// ------------------------------------------------------------
// GET    /custom_fields.php          -> list all custom field definitions
// POST   /custom_fields.php          -> create a new field definition
// PUT    /custom_fields.php?id=XXXX  -> update an existing definition's options and/or label
// DELETE /custom_fields.php?id=XXXX  -> remove a field definition
// ------------------------------------------------------------

if($method === 'GET'){
  $stmt = $pdo->query("SELECT * FROM custom_field_defs ORDER BY sort_order ASC, created_at ASC");
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach($rows as &$r){
    $r['options'] = $r['options_json'] ? json_decode($r['options_json'], true) : [];
    $r['is_new_tab'] = (bool)$r['is_new_tab'];
    unset($r['options_json']);
  }
  respond($rows);
}

if($method === 'POST'){
  $b = readJsonBody();
  $id = $b['id'] ?? ('cf_' . bin2hex(random_bytes(6)));
  $stmt = $pdo->prepare("INSERT INTO custom_field_defs (id, label, field_type, options_json, target_tab, is_new_tab, sort_order)
    VALUES (?, ?, ?, ?, ?, ?, ?)");
  $stmt->execute([
    $id,
    $b['label'] ?? '',
    $b['field_type'] ?? 'text',
    isset($b['options']) ? json_encode($b['options'], JSON_UNESCAPED_UNICODE) : null,
    $b['target_tab'] ?? '',
    !empty($b['is_new_tab']) ? 1 : 0,
    $b['sort_order'] ?? 0
  ]);
  respond(['success' => true, 'id' => $id]);
}

if($method === 'PUT'){
  $id = $_GET['id'] ?? '';
  if(!$id){ respond(['error' => 'id required'], 400); }
  $b = readJsonBody();
  $sets = [];
  $params = [];
  if(isset($b['options']) && is_array($b['options'])){
    $sets[] = 'options_json = ?';
    $params[] = json_encode(array_values($b['options']), JSON_UNESCAPED_UNICODE);
  }
  if(isset($b['label']) && $b['label'] !== ''){
    $sets[] = 'label = ?';
    $params[] = $b['label'];
  }
  if(!$sets){ respond(['error' => 'nothing to update'], 400); }
  $params[] = $id;
  $stmt = $pdo->prepare("UPDATE custom_field_defs SET " . implode(', ', $sets) . " WHERE id = ?");
  $stmt->execute($params);
  respond(['success' => true]);
}

if($method === 'DELETE'){
  $id = $_GET['id'] ?? '';
  if(!$id){ respond(['error' => 'id required'], 400); }
  $stmt = $pdo->prepare("DELETE FROM custom_field_defs WHERE id = ?");
  $stmt->execute([$id]);
  respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
