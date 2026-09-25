<?php
require_once 'db.php';
$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

// ------------------------------------------------------------
// POST /push_subscriptions.php -> save/update a person's OneSignal player ID
// body: { identifier: "9601292726", playerId: "xxxxxxxx-xxxx-..." }
// ------------------------------------------------------------

if($method === 'POST'){
  $b = readJsonBody();
  $identifier = $b['identifier'] ?? '';
  $playerId = $b['playerId'] ?? '';
  if(!$identifier || !$playerId){ respond(['error' => 'identifier and playerId required'], 400); }

  $stmt = $pdo->prepare("
    INSERT INTO push_subscriptions (identifier, onesignal_player_id) VALUES (?, ?)
    ON DUPLICATE KEY UPDATE onesignal_player_id = VALUES(onesignal_player_id)
  ");
  $stmt->execute([$identifier, $playerId]);
  respond(['success' => true]);
}

respond(['error' => 'Method not allowed'], 405);
