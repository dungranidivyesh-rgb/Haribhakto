<?php
require_once 'db.php';
$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

// ------------------------------------------------------------
// GET /permissions.php  -> all permissions, grouped by poshak_smk
// PUT /permissions.php  -> body: { poshak_smk, module_key, can_access, can_add, can_edit, can_delete }
//                          (creates the row if it doesn't exist yet, updates it if it does)
// ------------------------------------------------------------

if($method === 'GET'){
  $stmt = $pdo->query("SELECT * FROM permissions ORDER BY id ASC");
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

  // shape it like { "9876543210": { "members": {access:true,...}, "seva_samiti": {...} } }
  // to match exactly what the dashboard's loadPermissions() expects
  $result = [];
  foreach($rows as $r){
    // Normalize the SMK before grouping — the SAME leader's rows can exist under
    // different historical casings (e.g. "Skd726" saved long ago vs "SKD726" saved more
    // recently after the app started uppercasing every member's SMK). Grouping by the
    // RAW value split one leader's permissions into two separate buckets, and whichever
    // bucket the frontend processed last silently overwrote (discarded) the other one
    // entirely. Normalizing here merges them back into a single, complete entry.
    $smk = strtoupper(trim($r['poshak_smk']));
    if(!isset($result[$smk])) $result[$smk] = [];
    $result[$smk][$r['module_key']] = [
      'access' => (bool)$r['can_access'],
      'add' => (bool)$r['can_add'],
      'edit' => (bool)$r['can_edit'],
      'delete' => (bool)$r['can_delete'],
    ];
  }
  respond($result);
}

if($method === 'PUT'){
  $b = readJsonBody();
  $smk = strtoupper(trim($b['poshak_smk'] ?? ''));
  $moduleKey = $b['module_key'] ?? '';
  if(!$smk || !$moduleKey){ respond(['error' => 'poshak_smk and module_key required'], 400); }

  $stmt = $pdo->prepare("
    INSERT INTO permissions (poshak_smk, module_key, can_access, can_add, can_edit, can_delete)
    VALUES (?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      can_access = VALUES(can_access),
      can_add = VALUES(can_add),
      can_edit = VALUES(can_edit),
      can_delete = VALUES(can_delete)
  ");
  $stmt->execute([
    $smk, $moduleKey,
    !empty($b['can_access']) ? 1 : 0,
    !empty($b['can_add']) ? 1 : 0,
    !empty($b['can_edit']) ? 1 : 0,
    !empty($b['can_delete']) ? 1 : 0,
  ]);
  respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
