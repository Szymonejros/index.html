<?php
// index.php - Poprawiony dla bezpieczeństwa (sesje, hashowanie)

// Rozpocznij sesję
session_start();

// Hasło hashowane (wygeneruj nowe: echo password_hash('LI0N123', PASSWORD_DEFAULT); i zastąp)
$hashed_password = '$2y$10$abcdefghijklmnopqrstuvwx'; // ZASTĄP TYM SWOIM HASHEM! Nie używaj na stałe.

// Sprawdzamy hasło
if (isset($_POST['password'])) {
    if (password_verify($_POST['password'], $hashed_password)) {
        $_SESSION['logged_in'] = true;
    } else {
        $error_message = "Błędne hasło!";
    }
}

// Domyślnie tajne treści są puste
$tajna_tresc_kod = "";
$tajna_tresc_x = "";
$tajna_tresc_y = "";

// Jeśli zalogowany, ustaw tajne treści
if (isset($_SESSION['logged_in']) && $_SESSION['logged_in']) {
    $tajna_tresc_kod = <<<HTML
        <h1>Sekretna Strefa Kodu 🔐</h1>
        <p>Hasło zaakceptowane!</p>
        <div style="background: #222; color: #0f0; padding: 15px; border-radius: 5px; text-align: left;">
            <pre>
// Przykładowy tajny kod
function hackNASA() {
    return "Access Granted";
}
            </pre>
        </div>
        <br>
        <a href="pliki/tajny_plik.zip" style="color: red; font-weight: bold;">[POBIERZ TAJNE PLIKI]</a>
HTML;

    $tajna_tresc_x = "<h1>UwU</h1><p>Odkryłeś tajną sekcję X - teraz jest bezpieczna w PHP!</p>";
    $tajna_tresc_y = "<h1>Sekcja Y 🎮</h1><p>Odkryłeś tajną sekcję Y. Stworzone przez Szymon Rak.</p>";
}
?>

<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Strona Szymona</title>
        <link rel="stylesheet" href="style.css">
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
        <link rel="icon" href="favicon.png" type="image/png">
        
        <script>
            // Zmienne wypełniane przez serwer (tylko po logowaniu)
            const isAuthorized = <?php echo isset($_SESSION['logged_in']) ? 'true' : 'false'; ?>;
            const contentKod = <?php echo json_encode($tajna_tresc_kod); ?>;
            const contentX = <?php echo json_encode($tajna_tresc_x); ?>;
            const contentY = <?php echo json_encode($tajna_tresc_y); ?>;
        </script>
        
        <script src="script.js"></script>
    </head>
    <body>
    <div class="wrapper">
    <div class="nav">
        <ol>
            <li><a href="#" onclick="showHome()">Strona główna</a></li>
            <li><a href="#" onclick="showAuthor()">O autorze</a></li>
            <li><a href="#" onclick="showContact()">Kontakt</a></li>
            <li><a href="#" onclick="showAktualizacje()">Aktualizacje</a></li>
            <li><a href="#" onclick="showGaleria()">Galeria</a></li>
            <li><a href="#" onclick="InfoDnia()">Info dnia</a></li>
            <li><a href="stary.html">Stara Strona</a></li>
            <li><a href="#" onclick="showCode()">Kod 🔒</a></li>
        </ol>
    </div>
        <div class="content" id="content">
            <?php if (isset($error_message)) echo "<p style='color: red;'>$error_message</p>"; ?>
        </div>
    </div>
    
    <script>
        if (isAuthorized) {
            showCode(); // Po logowaniu pokaż kod
        } else {
            showHome(); // Domyślnie strona główna
        }
    </script>
    
    </body>
</html>