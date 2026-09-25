<?php
// reports.php — backend endpoint for the Reporting module.
//
// SPEED FIX (v2): the reports list was taking 30+ seconds to load because the plain
// GET returned EVERY report's full data — including every embedded image — all at
// once, even though the list screen only shows title/date/attendance. This version
// adds two new lightweight modes:
//
//   GET reports.php?list=1   → returns ONLY id, title, date, attendance, updatedAt
//                              for every report (a few KB total — loads instantly)
//   GET reports.php?id=xxx   → returns ONE report's full data (with images), fetched
//                              only when that report is actually opened
//   GET reports.php          → (legacy) full list, kept so an older dashboard file
//                              still works if it's ever loaded from cache
//
// POST and DELETE are unchanged.

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ====== Same values as members.php uses ======
$DB_HOST = 'localhost';
$DB_NAME = 'duiuxmed_yuva_sabha_db';
$DB_USER = 'duiuxmed_yuva_sabha_db_user';
$DB_PASS = '_FB_f[-Evchv[o_k';
// =============================================

try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {

    // ---- Mode 1: single full report by id (fetched only when a report is opened) ----
    if (isset($_GET['id']) && $_GET['id'] !== '') {
        $stmt = $pdo->prepare("SELECT id, data, updated_at FROM reports WHERE id = :id");
        $stmt->execute([':id' => $_GET['id']]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$row) {
            http_response_code(404);
            echo json_encode(["error" => "Report not found"]);
            exit();
        }
        $report = json_decode($row['data'], true);
        if (!is_array($report)) {
            // Stored JSON is corrupt — almost always MySQL silently truncating an
            // image-heavy report because the `data` column was TEXT (64KB max).
            // Fix: ALTER TABLE reports MODIFY data LONGTEXT; then salvage the row.
            http_response_code(500);
            echo json_encode([
                "error" => "Report data in DB is corrupt/truncated (stored length: " . strlen($row['data']) . " bytes). The `data` column is likely TEXT (64KB limit). Run: ALTER TABLE reports MODIFY data LONGTEXT;",
                "data_corrupt" => true,
                "stored_length" => strlen($row['data']),
            ], JSON_UNESCAPED_UNICODE);
            exit();
        }
        $report['id'] = $row['id'];
        $report['updatedAt'] = $row['updated_at'];
        echo json_encode($report, JSON_UNESCAPED_UNICODE);
        exit();
    }

    // ---- Mode 2: lightweight list (NO data column = NO images = instant) ----
    if (isset($_GET['list'])) {
        $stmt = $pdo->query("SELECT id, title, report_date, attendance, updated_at FROM reports ORDER BY updated_at DESC");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $result = array_map(function ($row) {
            return [
                'id'         => $row['id'],
                'title'      => $row['title'],
                'date'       => $row['report_date'],
                'attendance' => $row['attendance'],
                'updatedAt'  => $row['updated_at'],
            ];
        }, $rows);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
        exit();
    }

    // ---- Mode 3 (legacy): full list with all data — kept for backward compatibility ----
    $stmt = $pdo->query("SELECT id, title, report_date, attendance, data, updated_at FROM reports ORDER BY updated_at DESC");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $result = array_map(function ($row) {
        $report = json_decode($row['data'], true);
        if (!is_array($report)) $report = [];
        $report['id'] = $row['id'];
        return $report;
    }, $rows);
    echo json_encode($result);
    exit();
}

if ($method === 'POST') {
    // Create or update a report. Body: { id, title, date, attendance, ...restOfReportObject }
    $rawBody = file_get_contents('php://input');
    $input = json_decode($rawBody, true);
    if (!$input || !isset($input['id'])) {
        // A common cause for image-heavy reports: PHP's post_max_size (or
        // upload_max_filesize) silently truncating/rejecting the request body before
        // it even reaches this script — Content-Length shows data was sent, but the
        // body we actually received is empty or too short to be valid JSON.
        $contentLength = isset($_SERVER['CONTENT_LENGTH']) ? (int)$_SERVER['CONTENT_LENGTH'] : 0;
        $receivedLength = strlen($rawBody);
        $postMaxSize = ini_get('post_max_size');
        $looksLikeSizeLimit = $contentLength > 0 && $receivedLength < $contentLength;
        http_response_code(400);
        echo json_encode([
            "error" => $looksLikeSizeLimit
                ? "Request body was cut off (sent {$contentLength} bytes, server only received {$receivedLength} bytes). This server's post_max_size is set to {$postMaxSize} — increase it if your reports contain several images."
                : "Missing report id",
            "content_length_sent" => $contentLength,
            "bytes_received" => $receivedLength,
            "post_max_size" => $postMaxSize,
        ]);
        exit();
    }
    $id = $input['id'];

    // SAFETY NET: if this POST body doesn't include `sections` (i.e. it's a partial/
    // lightweight object — e.g. from a quick rename/edit action that only sent
    // {id, title, date, attendance}) but the report ALREADY has full content saved,
    // merge instead of overwrite. This prevents a quick title/date/attendance edit
    // from silently wiping out a report's sections/images.
    if (!array_key_exists('sections', $input)) {
        $existingStmt = $pdo->prepare("SELECT data FROM reports WHERE id = :id");
        $existingStmt->execute([':id' => $id]);
        $existingRaw = $existingStmt->fetchColumn();
        if ($existingRaw !== false) {
            $existing = json_decode($existingRaw, true);
            if (is_array($existing) && array_key_exists('sections', $existing)) {
                // Keep all existing fields, let the incoming partial fields override
                // just what they explicitly set (title/date/attendance/etc).
                $input = array_merge($existing, $input);
            }
        }
    }

    $title = isset($input['title']) ? $input['title'] : '';
    $date = isset($input['date']) ? $input['date'] : '';
    $attendance = isset($input['attendance']) ? $input['attendance'] : '';
    $dataJson = json_encode($input, JSON_UNESCAPED_UNICODE);

    $stmt = $pdo->prepare("
        INSERT INTO reports (id, title, report_date, attendance, data)
        VALUES (:id, :title, :date, :attendance, :data)
        ON DUPLICATE KEY UPDATE
            title = :title2, report_date = :date2, attendance = :attendance2, data = :data2
    ");
    $stmt->execute([
        ':id' => $id, ':title' => $title, ':date' => $date, ':attendance' => $attendance, ':data' => $dataJson,
        ':title2' => $title, ':date2' => $date, ':attendance2' => $attendance, ':data2' => $dataJson,
    ]);

    // Verify the row actually holds the FULL JSON. MySQL (non-strict mode) silently
    // truncates values that exceed the column size (TEXT = 64KB) — the save "succeeds"
    // but the report is corrupted. Catch that here and tell the client loudly.
    // IMPORTANT: use LENGTH() (byte count), NOT CHAR_LENGTH() (character count).
    // Gujarati/multi-byte text has 3 bytes per character in utf8mb4, so CHAR_LENGTH
    // would always read "smaller" than PHP's strlen() (byte count) even when NOTHING
    // was truncated — that mismatch was incorrectly rejecting every valid save that
    // contained Gujarati text.
    $chk = $pdo->prepare("SELECT LENGTH(data) AS len FROM reports WHERE id = :id");
    $chk->execute([':id' => $id]);
    $storedLen = (int)$chk->fetchColumn();
    $sentLen = strlen($dataJson);
    if ($storedLen < $sentLen) {
        http_response_code(507);
        echo json_encode([
            "error" => "Report was TRUNCATED by the database: sent {$sentLen} bytes, stored only {$storedLen}. The `data` column is too small — run: ALTER TABLE reports MODIFY data LONGTEXT;",
            "success" => false,
            "truncated" => true,
            "bytes_sent" => $sentLen,
            "bytes_stored" => $storedLen,
        ]);
        exit();
    }

    echo json_encode(["success" => true, "id" => $id, "bytes_stored" => $storedLen]);
    exit();
}

if ($method === 'DELETE') {
    // Delete a report. Query string: ?id=xxx
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Missing report id"]);
        exit();
    }
    $stmt = $pdo->prepare("DELETE FROM reports WHERE id = :id");
    $stmt->execute([':id' => $id]);
    echo json_encode(["success" => true]);
    exit();
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
