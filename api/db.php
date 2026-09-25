<?php
// ============================================================
// Database Connection
// FILL IN your Bluehost MySQL details below (from cPanel).
// ============================================================

$DB_HOST = 'localhost';           // usually 'localhost' on Bluehost
$DB_NAME = 'duiuxmed_yuva_sabha_db';       // must match the name you create in cPanel
$DB_USER = 'duiuxmed_yuva_sabha_db_user';    // from cPanel > MySQL Databases
$DB_PASS = '_FB_f[-Evchv[o_k';    // from cPanel > MySQL Databases

// OneSignal — used to send real push notifications to phones
define('ONESIGNAL_APP_ID', 'db189d35-8188-445e-8e5e-7e54506a6913');
define('ONESIGNAL_REST_API_KEY', 'os_v2_app_3mmj2nmbrbcf5ds6pzkfa2tjcojbgp7mkxqelan4hq6gt446pho5cxrmzn2zegwzjwraoydzibzjmqbopz76aqbqa4pf7c2hczoyngq');

function getDB(){
  global $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS;
  try{
    $pdo = new PDO(
      "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
      $DB_USER,
      $DB_PASS,
      [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ]
    );
    return $pdo;
  }catch(PDOException $e){
    http_response_code(500);
    die(json_encode(['error' => 'Database connection failed. Please contact admin.']));
  }
}

// Common CORS + JSON headers for all API files
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, If-None-Match');
header('Access-Control-Expose-Headers: ETag');
if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){ exit(0); }

function readJsonBody(){
  $raw = file_get_contents('php://input');
  return json_decode($raw, true) ?? [];
}
function respond($data, $code = 200){
  $json = json_encode($data);
  // "Only download what changed": every successful GET gets a fingerprint (ETag) of
  // its exact response. The dashboard sends back the fingerprint of the copy it
  // already has (If-None-Match); if the data is identical, answer 304 with NO body —
  // the dashboard then uses its saved copy instead of re-downloading everything.
  // Any change to the data changes the fingerprint, so changed data is always sent.
  if($code === 200 && ($_SERVER['REQUEST_METHOD'] ?? '') === 'GET'){
    $etag = '"' . md5($json) . '"';
    header('ETag: ' . $etag);
    header('Cache-Control: no-cache');
    // Hosts that gzip responses (Apache mod_deflate) rewrite the ETag the browser sees,
    // e.g. "abc" -> "abc-gzip", and some send it back as a weak W/"abc". Compare only
    // the core fingerprint so those still count as a match.
    $core = function($t){ $t = trim($t); $t = preg_replace('/^W\//', '', $t); $t = trim($t, '"'); return preg_replace('/-(gzip|br|deflate)$/', '', $t); };
    $ifNoneMatch = $_SERVER['HTTP_IF_NONE_MATCH'] ?? '';
    foreach(explode(',', $ifNoneMatch) as $candidate){
      if(trim($candidate) !== '' && $core($candidate) === $core($etag)){
        http_response_code(304);
        exit;
      }
    }
  }
  http_response_code($code);
  echo $json;
  exit;
}
