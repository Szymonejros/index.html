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
    <h2>
         2023: <li> strona została utworzona
         <br></br>29.12.2025 Dodano:
                        <li> interaktywne Menu"
                        <li> Ikonę
                        <li> Zmieniono Tytuł
                        <li> Zmieniono tło
                        <li>  Dodano stronę kontaktową
                        <li>  Poprawiono błędy w kodzie
                        <li>  Zaktualizowano sekcję "O autorze"
                        <li>  Dodano stary wygląd strony
    </h2>
    `;
    console.log(`hasło do sekretnej sekcji to: LI0N123`);
}
function showGaleria() {
    document.getElementById("content").innerHTML = `
    <h1>Galeria</h1>
    <h3>Galeria jest w budowie :3</h3>
    <h3>Będą tutaj zdjęcia z życia i screeny z gier </h3>
        `;
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
function showCode() {
    document.getElementById("content").innerHTML = `
        <h1>Sekretna sekcja 🔒</h1>

        <p>Podaj kod:</p>

        <input type="password" id="secretCode" placeholder="wpisz kod">
        <br><br>
        <button onclick="checkCode()">Wyślij</button>

        <p id="error" style="color:red;"></p>
    `;
}

// 🔑 MAPA KODÓW → FUNKCJE
const codes = {
    "LI0N123": showSecretX,      // kod do sekcji X
    "RETRO777": showSecretY,   // kod do sekcji Y
    "ADMIN42": showSecretAdmin // trzeci kod (opcjonalnie)
};

function checkCode() {
    const code = document.getElementById("secretCode").value;

    if (codes[code]) {
        codes[code](); // uruchamia odpowiednią sekcję
    } else {
        document.getElementById("error").innerText = "❌ Zły kod";
    }
}

// 🔓 SEKCJA X
function showSecretX() {
    document.getElementById("content").innerHTML = `
        <h1>UwU</h1>
        <p>Odkryłeś tajną sekcję X</p>
        <p>Stworzone przez Szymon Rak &copy; 2024</p>
    `;
}

// 🔓 SEKCJA Y
function showSecretY() {
    document.getElementById("content").innerHTML = `
        <h1>Sekcja Y 🎮</h1>
        <p>Odkryłeś tajną sekcję Y</p>
        <p>Stworzone przez Szymon Rak &copy; 2025/26</p>
    `;
}

// 🔓 ADMIN (opcjonalne)
function showSecretAdmin() {
    document.getElementById("content").innerHTML = `
    nudes here
    `;
}

// pokaż stronę główną po starcie
showHome();
