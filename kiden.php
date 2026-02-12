<?php
// kiden.php - Poprawiony (dodano HTML, sesje, hashowanie)

// Rozpocznij sesję
session_start();

// Hasło hashowane (wygeneruj nowe dla 'mojeTrudneHaslo123')
$hashed_password = '$2y$10$xyzabcdefghijklmnopqrstuv'; // ZASTĄP SWOIM HASHEM!

$pokaz_sekcje = false;

// Sprawdzanie hasła
if (isset($_POST['password'])) {
    if (password_verify($_POST['password'], $hashed_password)) {
        $_SESSION['logged_in_kiden'] = true;
        $pokaz_sekcje = true;
    } else {
        $error_message = "Błędne hasło!";
    }
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Kiden - Sekcja Zabezpieczona</title>
</head>
<body>
    <h1>Witaj w Kiden</h1>
    <?php if (isset($error_message)) echo "<p style='color: red;'>$error_message</p>"; ?>
    
    <?php if ($pokaz_sekcje): ?>
        <p>Tajna zawartość: Tutaj możesz dodać swoją sekcję!</p>
    <?php else: ?>
        <form method="POST" action="kiden.php">
            <input type="password" name="password" placeholder="Hasło..." required>
            <button type="submit">Zaloguj</button>
        </form>
    <?php endif; ?>
</body>
</html>