// script.js - Poprawiony dla bezpieczeństwa i jakości

function showHome() {
    document.getElementById("content").innerHTML = `
        <h1>Strona główna</h1>
        <h3>Witaj na mojej pierwszej stronie ^w^</h3>
    `;
}

function showAuthor() {
    document.getElementById("content").innerHTML = `
        <h3>O autorze</h3>
        <h3>
        Stworzone przez <b>Szymon Rak</b> &copy; 2024
        Uczę się HTML i robię swoje strony internetowe wykorzystując wiedzę ze szkoły i pozyskaną poza nią</h3>
    `;
}

function showContact() {
    document.getElementById("content").innerHTML = `
        <h1>Kontakt</h1>
        <h3>
        <a href="https://www.youtube.com/channel/UCHjeQMZe8vW_uVOaW9evdQw">Youtube</a> <- porzucone dawno temu
        <p>Telegram: @Szymonejros </p>
        <p>Discord: szymon02034</p>
        <p>Steam: Szymonejros / https://steamcommunity.com/profiles/76561198986131963/</p>
        </h3>
    `;
}

function showAktualizacje() {
    document.getElementById("content").innerHTML = `
        <h1>Aktualizacje</h1>
        <ul>
            <li>2023: strona została utworzona</li>
            <li>29.12.2025: Dodano interaktywne Menu, Ikonę, Zmieniono Tytuł, Zmieniono tło, Dodano stronę kontaktową, Poprawiono błędy w kodzie, Zaktualizowano sekcję "O autorze", Dodano stary wygląd strony</li>
        </ul>
    `;
    // UWAGA: Hasło zostało usunięte z console.log dla bezpieczeństwa!
}

function showGaleria() {
    document.getElementById("content").innerHTML = `
        <h1>Galeria</h1>
        <img src="zdjecia/enlisted1.png" alt="enlisted" />
        <style>
            img {
                width: 600px;
                height: 400px;
                position: absolute;
                left: 10px;
                top: 10%;
            }
        </style>
        <h3>Galeria jest w budowie :3</h3>
        <h3 id="sss">Będą tutaj zdjęcia z życia i screeny z gier</h3>
        <style>
            h3 {
                position: absolute;
                top: 80%;
                left: 10px;
            }
        </style>
        <style>
            #sss {
                position: absolute;
                top: 83%;
                left: 10px;
            }
        </style>
    `;
}
function showInfoDnia() {
    <h2>Marek Lis

Marek Lis (ur. 1306 zm. 2024 w Katowicach) – polski nauczyciel i informatyk.

W okresie Rzeczypospolitej Obojga Narodów działacz opozycji politycznej do króla Stanisława Augusta Poniatowskiego, nauczyciel ŚL.TZN I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII kadencji (1931–2024). Od 2003 główny programista Ubuntu Linux.

Marek Lis co nieokreślony czas umiera i naradza się na nowo. Jego ostatnie narodziny nastąpiły w 1306 roku. Aktualnie Stowarzyszenie Kongresowe im. Marka Lisa, oczekuje na ponowne jego przybycie. Legendy głoszą że jak Mariusz Wiesław Świerczyński stworzył dwóch pierwszych ludzi (Macieja Czekańskiego, Roberta Kwiczalę) to go zapytali: "Mariuszu, a ten stary dziad robiący Makra w Excelu to kto to?", wtedy Mariusz rzekł: "Nie wiem, jak już tutaj przybyłem, to on już tutaj był."[1]
Spis treści [pokaż]
Życiorys
Pierwsze narodziny

(Według Jolanty Suter-Chmielewskiej) Wiek Marka Lisa można wyszacować na podstawie jego plam na czole. Jedna plama to w przybliżeniu 700 lat. Według teorii stworzenia świata przez Mariusza Świerczyńskiego, Marek Lis już był za nim Mariusz zaczął tworzyć. Obliczając wielkość i ilość plam można wyszacować że wszechświat powstał 13 772 000 000, czyli również rok jego pierwszych narodzin.</h2>
}
function showStara() {
    document.getElementById("content").innerHTML = `
        <h1>Stara Strona</h1>
        <body background="images/czerwonetlo.png">
        <big><marquee>witaj na mojej pierwszej stronie stworzonej przez html. robiłem ta stronę przez 1 godzine i miałem problem 5 razy szególnie z obrazem ale pomogl mi program Visual Studio Code i nawet fajne to jest polecam ci zrobic też tak strone internetowa  </marquee></big>  
        <img src="images/czerwonetlo.png" alt="png/ w tamtych latach chciałem dać czerwone tło i ustawić obraz cz. tła jako zdjęcie na całą strone/ 2 lata temu" />
        <br>
        <br>
        <big><a href="https://www.youtube.com/channel/UCHjeQMZe8vW_uVOaW9evdQw">mój kanał na youtube </big></a>
        <h1> wiem że źle wygląda ta góra ale mam sentyment do starych rzeczy</h1>
    `;
}

// --- Funkcja logowania (uniwersalna) ---
function getLoginForm() {
    return `
        <h1>Sekcja Zabezpieczona</h1>
        <p>Ta zawartość jest ukryta na serwerze.</p>
        <div class="login-box" style="margin-top: 20px;">
            <p>Podaj hasło dostępu:</p>
            <form method="POST" action="index.php">
                <input type="password" name="password" placeholder="Hasło..." required 
                       style="padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
                <button type="submit" 
                        style="padding: 10px 20px; background: darkred; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Odblokuj
                </button>
            </form>
        </div>
    `;
}

// --- Wyświetlanie sekcji KOD ---
function showCode() {
    const contentDiv = document.getElementById("content");
    
    // Sprawdzamy, czy PHP przysłało treść (czy zmienna contentKod nie jest pusta)
    if (typeof contentKod !== 'undefined' && contentKod !== "") {
        contentDiv.innerHTML = contentKod;
    } else {
        contentDiv.innerHTML = getLoginForm();
    }
}

// --- Wyświetlanie sekcji X ---
function showSecretX() {
    const contentDiv = document.getElementById("content");
    if (typeof contentX !== 'undefined' && contentX !== "") {
        contentDiv.innerHTML = contentX;
    } else {
        contentDiv.innerHTML = getLoginForm();
    }
}

// --- Wyświetlanie sekcji Y ---
function showSecretY() {
    const contentDiv = document.getElementById("content");
    if (typeof contentY !== 'undefined' && contentY !== "") {
        contentDiv.innerHTML = contentY;
    } else {
        contentDiv.innerHTML = getLoginForm();
    }
}

// 🔓 SEKCJA Y (bezpośrednia treść, ale połączona z PHP)
function showSecretY() {
    document.getElementById("content").innerHTML = `
        <h1>Sekcja Y 🎮</h1>
        <p>Odkryłeś tajną sekcję Y</p>
        <p>Stworzone przez Szymon Rak &copy; 2025/26</p>
    `;
}

// 🔓 ADMIN (opcjonalne - usuń jeśli niepotrzebne lub zmień treść)
function showSecretAdmin() {
    document.getElementById("content").innerHTML = `
        <h1>Admin</h1>
        <p>Tutaj mogą być tajne rzeczy. Pamiętaj o bezpieczeństwie!</p>
    `;
}

// Pokaż stronę główną po starcie
showHome();