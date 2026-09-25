<?php
require_once 'db.php';
$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

// ------------------------------------------------------------
// GET  /notifications.php  -> list all notifications
// POST /notifications.php  -> send/schedule a new notification
// ------------------------------------------------------------

if($method === 'GET'){
  $stmt = $pdo->query("SELECT * FROM notifications ORDER BY id ASC");
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
  foreach($rows as &$r){
    $r['targetType'] = $r['target_type'];
    $r['targetMobiles'] = $r['target_mobiles'] ? json_decode($r['target_mobiles'], true) : [];
    $r['timestamp'] = str_replace(' ', 'T', $r['created_at']) . 'Z';
    $r['scheduledFor'] = $r['scheduled_for'] ? (str_replace(' ', 'T', $r['scheduled_for']) . 'Z') : $r['timestamp'];
  }
  respond($rows);
}

if($method === 'POST'){
  $b = readJsonBody();
  $stmt = $pdo->prepare("INSERT INTO notifications (message, target_type, target_mobiles, scheduled_for) VALUES (?, ?, ?, ?)");

  $clientScheduled = $b['scheduledFor'] ?? null;
  $utcScheduled = $clientScheduled ? gmdate('Y-m-d H:i:s', strtotime($clientScheduled)) : gmdate('Y-m-d H:i:s');

  $stmt->execute([
    $b['message'] ?? '',
    $b['targetType'] ?? 'specific',
    isset($b['targetMobiles']) ? json_encode($b['targetMobiles']) : json_encode([]),
    $utcScheduled
  ]);

  // Only push immediately if not scheduled for later (a real "scheduled send" would need a cron job)
  if(!$clientScheduled || strtotime($clientScheduled) <= time() + 60){
    sendOneSignalPush($pdo, $b['message'] ?? '', $b['targetMobiles'] ?? []);
  }

  respond(['success' => true, 'id' => $pdo->lastInsertId()]);
}

function sendOneSignalPush($pdo, $message, $targetMobiles){
  if(empty($targetMobiles) || empty($message)) return;

  $placeholders = implode(',', array_fill(0, count($targetMobiles), '?'));
  $stmt = $pdo->prepare("SELECT onesignal_player_id FROM push_subscriptions WHERE identifier IN ($placeholders)");
  $stmt->execute($targetMobiles);
  $playerIds = array_column($stmt->fetchAll(PDO::FETCH_ASSOC), 'onesignal_player_id');
  if(empty($playerIds)) return; // no one in this list has push enabled yet

  $payload = json_encode([
    'app_id' => ONESIGNAL_APP_ID,
    'include_player_ids' => $playerIds,
    'headings' => ['en' => 'Yuva Sabha Dashboard'],
    'contents' => ['en' => $message],
  ]);

  $ch = curl_init('https://onesignal.com/api/v1/notifications');
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json; charset=utf-8',
    'Authorization: Basic ' . ONESIGNAL_REST_API_KEY
  ]);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_exec($ch);
  curl_close($ch);
}

respond(['error' => 'Method not allowed'], 405);
