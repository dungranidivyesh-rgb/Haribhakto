<?php
require_once 'db.php';

$pdo = getDB();
$action = $_GET['action'] ?? '';
$body = readJsonBody();

// Your live site's address. Used to build the links inside emails.
define('SITE_URL', 'https://haribhakto.com/');
define('MAIL_FROM', 'no-reply@haribhakto.com');

// ------------------------------------------------------------
// SIGNUP: link a real Member/Poshak Leader record (by SMK Code)
// to a new Email + Password login. Account stays unverified
// until the person clicks the link we email them.
// ------------------------------------------------------------
if($action === 'signup'){
  $smk = trim($body['smk'] ?? ''); // optional — blank means a brand new person with no existing record
  $source = $body['source'] ?? ''; // 'members' or 'poshak'
  $email = strtolower(trim($body['email'] ?? ''));
  $password = $body['password'] ?? '';
  $mobile = trim($body['mobile'] ?? '');
  $firstName = trim($body['first_name'] ?? '');
  $fatherName = trim($body['father_name'] ?? '');
  $surname = trim($body['surname'] ?? '');
  $pickedRole = trim($body['role'] ?? '');
  // The signup form always sends this (an ISO timestamp from the browser), but fall
  // back to the server's own clock if it's ever missing for any reason — signup_date
  // should never be left blank.
  $signupDate = !empty($body['signup_date']) ? date('Y-m-d H:i:s', strtotime($body['signup_date'])) : date('Y-m-d H:i:s');

  if(!$source || !$email || !$password || !$mobile){
    respond(['error' => 'Missing required fields.'], 400);
  }

  $table = 'members'; // Poshak Leaders live here too now — poshak_leaders is a legacy table with an incompatible schema

  if($smk){
    // An SMK was given — this should match a real existing record.
    $stmt = $pdo->prepare("SELECT id, role FROM $table WHERE smk_code = ?");
    $stmt->execute([$smk]);
    $existingRecord = $stmt->fetch(PDO::FETCH_ASSOC);
    if(!$existingRecord){
      respond(['error' => 'SMK Code not found. Please double-check it, or leave it blank if you don\'t have one.'], 404);
    }
    // The role picked on the Signup form is a safety check (catches selecting the
    // wrong one) against this SMK's ACTUAL role in the database — it does not change it.
    if($pickedRole && isset($existingRecord['role']) && $existingRecord['role'] !== '' && $pickedRole !== $existingRecord['role']){
      respond(['error' => "Selected role does not match this SMK number's record. Please check and try again."], 400);
    }
  } else {
    // No SMK given — this is a brand new person with no existing record at all.
    // Generate a stable, unique identifier for them so the rest of the system
    // (permissions, login-by-mobile lookups, etc.) can key off it just like any
    // admin-imported member.
    $smk = 'SU' . substr((string)time(), -8);
    $stmt = $pdo->prepare("INSERT INTO $table (smk_code, first_name, father_name, surname, name, full_name, mobile, role, profile_completed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)");
    $fullName = trim("$firstName $surname");
    $stmt->execute([$smk, $firstName, $fatherName, $surname, $fullName, $fullName, $mobile, $pickedRole ?: 'યુવા સભ્ય']);
  }

  // Check this SMK hasn't already signed up
  $stmt = $pdo->prepare("SELECT id FROM users WHERE linked_smk = ?");
  $stmt->execute([$smk]);
  if($stmt->fetch()){
    respond(['error' => 'This SMK ID has already signed up. Please Sign In instead.'], 409);
  }

  // Check email isn't already used
  $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
  $stmt->execute([$email]);
  if($stmt->fetch()){
    respond(['error' => 'This email is already used by another account.'], 409);
  }

  $hash = password_hash($password, PASSWORD_BCRYPT);
  $role = $source === 'poshak' ? 'poshak' : 'yuva';
  $verifyToken = bin2hex(random_bytes(32));

  // must_change_password = 0 — this person just set their own password, there's
  // nothing to force them to change.
  $stmt = $pdo->prepare("INSERT INTO users (email, password_hash, role, linked_smk, email_verified, verify_token, must_change_password) VALUES (?, ?, ?, ?, 0, ?, 0)");
  $stmt->execute([$email, $hash, $role, $smk, $verifyToken]);

  // save email, mobile, names, and signup_date onto the linked record too
  $sets = ['email = ?'];
  $vals = [$email];
  if($mobile !== ''){ $sets[] = 'mobile = ?'; $vals[] = $mobile; }
  if($firstName !== ''){ $sets[] = 'first_name = ?'; $vals[] = $firstName; }
  if($fatherName !== ''){ $sets[] = 'father_name = ?'; $vals[] = $fatherName; }
  if($surname !== ''){ $sets[] = 'surname = ?'; $vals[] = $surname; }
  $sets[] = 'signup_date = ?'; $vals[] = $signupDate;
  $vals[] = $smk;
  $stmt = $pdo->prepare("UPDATE $table SET " . implode(', ', $sets) . " WHERE smk_code = ?");
  $stmt->execute($vals);

  $verifyLink = SITE_URL . "?verify_token=$verifyToken";
  $subject = "Verify your email - Yuva Sabha Dashboard";
  $message = "Hello,\n\nThanks for signing up. Please click the link below to verify your email address and activate your account.\n\n$verifyLink\n\nIf you did not sign up for this, please ignore this email.";
  $headers = "From: " . MAIL_FROM . "\r\nContent-Type: text/plain; charset=UTF-8";
  $mailSent = mail($email, $subject, $message, $headers);
  if(!$mailSent){
    error_log("signup: mail() FAILED to send verification link to $email");
  }

  // Fetch the just-updated record so the frontend can read its role (finishSignupUI
  // uses this to pre-select the correct role on the Sign In tab).
  $stmt = $pdo->prepare("SELECT * FROM $table WHERE smk_code = ?");
  $stmt->execute([$smk]);
  $record = $stmt->fetch(PDO::FETCH_ASSOC);

  respond(['success' => true, 'message' => 'Signed up successfully! We have sent a verification link to your email. Please verify it before signing in.', 'record' => $record]);
}

// ------------------------------------------------------------
// VERIFY EMAIL — called when the user clicks the link we emailed
// them right after signup.
// ------------------------------------------------------------
if($action === 'verify_email'){
  $token = $body['token'] ?? ($_GET['token'] ?? '');

  if(!$token){
    respond(['error' => 'Missing verification token.'], 400);
  }

  $stmt = $pdo->prepare("SELECT id, email_verified FROM users WHERE verify_token = ?");
  $stmt->execute([$token]);
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if(!$user){
    respond(['error' => 'This verification link is invalid or has already been used.'], 400);
  }
  if($user['email_verified']){
    respond(['success' => true, 'message' => 'Your email is already verified. Please sign in.']);
  }

  $stmt = $pdo->prepare("UPDATE users SET email_verified = 1, verify_token = NULL WHERE id = ?");
  $stmt->execute([$user['id']]);

  respond(['success' => true, 'message' => 'Your email has been verified! You can now sign in.']);
}

// ------------------------------------------------------------
// LOGIN
// ------------------------------------------------------------
if($action === 'login'){
  $identifier = trim($body['identifier'] ?? $body['email'] ?? '');
  $password = $body['password'] ?? '';
  $user = null;

  try{
    if(strpos($identifier, '@') !== false){
      // Looks like an email
      $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
      $stmt->execute([strtolower($identifier)]);
      $user = $stmt->fetch(PDO::FETCH_ASSOC);
    } else {
      $digitsOnly = preg_replace('/\D/', '', $identifier);
      if(strlen($digitsOnly) >= 10){
        // Looks like a mobile number — find which member it belongs to, then find
        // the users row linked to that SMK. (Poshak Leaders now live in the members
        // table too — there's no separate table to check anymore.)
        $last10 = substr($digitsOnly, -10);
        $stmt = $pdo->prepare("SELECT smk_code FROM members WHERE mobile LIKE ?");
        $stmt->execute(['%' . $last10]);
        $m = $stmt->fetch(PDO::FETCH_ASSOC);
        if($m){
          // Case-insensitive — the same SMK can exist under different casings between
          // the members table and the users table (confirmed earlier in permissions).
          $stmt = $pdo->prepare("SELECT * FROM users WHERE UPPER(linked_smk) = UPPER(?)");
          $stmt->execute([$m['smk_code']]);
          $user = $stmt->fetch(PDO::FETCH_ASSOC);
        }
      }
      if(!$user){
        // Try it directly as an SMK number — case-insensitive for the same reason.
        $stmt = $pdo->prepare("SELECT * FROM users WHERE UPPER(linked_smk) = UPPER(?)");
        $stmt->execute([$identifier]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
      }
    }
  }catch(Throwable $e){
    // Surface the real error instead of a generic "incorrect password" — this is what
    // exposed the poshak_leaders schema mismatch in the first place.
    respond(['error' => 'Login lookup failed: ' . $e->getMessage()], 500);
  }

  if(!$user){
    respond(['error' => 'DIAGNOSTIC: No account found at all for this mobile/SMK/email.'], 401);
  }
  if(!password_verify($password, $user['password_hash'])){
    respond(['error' => 'DIAGNOSTIC: Account WAS found (linked_smk=' . $user['linked_smk'] . '), but the password did not match. Stored hash length: ' . strlen($user['password_hash'] ?? '') . ' chars.'], 401);
  }

  if($user['role'] !== 'admin' && isset($user['email_verified']) && !$user['email_verified']){
    respond(['error' => 'Please verify your email first. Check your inbox for the verification link we sent when you signed up.'], 403);
  }

  // Everyone — Poshak Leaders included — lives in the members table now.
  $stmt = $pdo->prepare("SELECT * FROM members WHERE UPPER(smk_code) = UPPER(?)");
  $stmt->execute([$user['linked_smk']]);
  $record = $stmt->fetch(PDO::FETCH_ASSOC);

  // Start a session so the browser stays logged in
  session_start();
  $_SESSION['user_email'] = $user['email'];
  $_SESSION['role'] = $user['role'];
  $_SESSION['smk'] = $user['linked_smk'];

  respond(['success' => true, 'role' => $user['role'], 'email' => $user['email'], 'must_change_password' => (bool)($user['must_change_password'] ?? false), 'record' => $record]);
}

// ------------------------------------------------------------
// ADMIN LOGIN (separate — fixed account, no SMK link)
// ------------------------------------------------------------
if($action === 'admin_login'){
  $password = $body['password'] ?? '';
  $stmt = $pdo->prepare("SELECT * FROM users WHERE role = 'admin' LIMIT 1");
  $stmt->execute();
  $admin = $stmt->fetch(PDO::FETCH_ASSOC);

  if(!$admin || !password_verify($password, $admin['password_hash'])){
    respond(['error' => 'Incorrect admin password.'], 401);
  }
  session_start();
  $_SESSION['user_email'] = 'admin';
  $_SESSION['role'] = 'admin';
  respond(['success' => true, 'role' => 'admin']);
}

// ------------------------------------------------------------
// CHANGE PASSWORD (while logged in — needs old password)
// ------------------------------------------------------------
if($action === 'change_password'){
  $email = strtolower(trim($body['email'] ?? ''));
  $smk = trim($body['smk'] ?? '');
  $oldPassword = $body['old_password'] ?? '';
  $newPassword = $body['new_password'] ?? '';

  $user = null;
  if($email !== ''){
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
  }
  if(!$user && $smk !== ''){
    // Many existing members (bulk-imported, batch password setup) have no email on
    // file at all — email alone can't find their account, so fall back to their SMK.
    // Case-insensitive, same as every other SMK lookup in this app.
    $stmt = $pdo->prepare("SELECT * FROM users WHERE UPPER(linked_smk) = UPPER(?)");
    $stmt->execute([$smk]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
  }

  if(!$user){
    respond(['error' => 'Could not find your account — please sign in again.'], 404);
  }
  if(!password_verify($oldPassword, $user['password_hash'])){
    respond(['error' => 'Old password is incorrect.'], 401);
  }

  $newHash = password_hash($newPassword, PASSWORD_BCRYPT);
  // Update by this exact user's own id — reliable regardless of whether they have an
  // email on file at all (WHERE email = ? would silently match nothing for exactly
  // the accounts this fix is for).
  $stmt = $pdo->prepare("UPDATE users SET password_hash = ?, must_change_password = 0 WHERE id = ?");
  $stmt->execute([$newHash, $user['id']]);
  respond(['success' => true, 'message' => 'Password changed successfully.']);
}

// ------------------------------------------------------------
// FORGOT PASSWORD — sends a reset link to the user's email
// using the hosting's own free email sending (PHP mail()).
// ------------------------------------------------------------
if($action === 'forgot_password'){
  $email = strtolower(trim($body['email'] ?? ''));
  $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
  $stmt->execute([$email]);
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if(!$user){
    // The users-table email didn't match — but the email the person typed might still
    // be exactly what's shown on their dashboard profile (members.email), which can
    // drift out of sync with users.email over time. Find them that way instead, then
    // find their actual login account through their SMK.
    $stmt = $pdo->prepare("SELECT smk_code FROM members WHERE email = ?");
    $stmt->execute([$email]);
    $m = $stmt->fetch(PDO::FETCH_ASSOC);
    if($m){
      $stmt = $pdo->prepare("SELECT id FROM users WHERE UPPER(linked_smk) = UPPER(?)");
      $stmt->execute([$m['smk_code']]);
      $user = $stmt->fetch(PDO::FETCH_ASSOC);
    }
  }

  if(!$user){
    // Don't reveal whether the email exists (security best practice)
    respond(['success' => true, 'message' => 'If this email is registered, a reset link has been sent.']);
  }

  $token = bin2hex(random_bytes(32));
  $expires = date('Y-m-d H:i:s', strtotime('+30 minutes'));
  // By id, not email — $user may have been found via their dashboard profile email
  // (members.email) rather than their own users.email, which could differ or be empty.
  $stmt = $pdo->prepare("UPDATE users SET reset_token = ?, reset_token_expires = ? WHERE id = ?");
  $stmt->execute([$token, $expires, $user['id']]);

  $resetLink = SITE_URL . "?reset_token=$token";

  $subject = "Reset your Yuva Sabha Dashboard password";
  $message = "Hello,\n\nClick the link below to reset your password. This link expires in 30 minutes.\n\n$resetLink\n\nIf you did not request this, please ignore this email.";
  $headers = "From: " . MAIL_FROM . "\r\nContent-Type: text/plain; charset=UTF-8";

  $mailSent = mail($email, $subject, $message, $headers);
  if(!$mailSent){
    error_log("forgot_password: mail() FAILED to send reset link to $email");
  } else {
    error_log("forgot_password: mail() reported success sending to $email (this only means PHP handed it to the mail server, not that it was delivered — check spam folder too)");
  }

  respond(['success' => true, 'message' => 'If this email is registered, a reset link has been sent.']);
}

// ------------------------------------------------------------
// RESET PASSWORD (using the token from the emailed link)
// ------------------------------------------------------------
if($action === 'reset_password'){
  $token = $body['token'] ?? '';
  $newPassword = $body['new_password'] ?? '';

  $stmt = $pdo->prepare("SELECT * FROM users WHERE reset_token = ? AND reset_token_expires > NOW()");
  $stmt->execute([$token]);
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if(!$user){
    respond(['error' => 'This reset link is invalid or has expired. Please request a new one.'], 400);
  }

  $newHash = password_hash($newPassword, PASSWORD_BCRYPT);
  $stmt = $pdo->prepare("UPDATE users SET password_hash = ?, reset_token = NULL, reset_token_expires = NULL, must_change_password = 0 WHERE id = ?");
  $stmt->execute([$newHash, $user['id']]);
  // email + smk let the dashboard record WHO reset their password in the Activity Log
  respond(['success' => true, 'message' => 'Password reset successfully. Please sign in.', 'email' => $user['email'], 'smk' => $user['linked_smk']]);
}

respond(['error' => 'Unknown action.'], 400);
