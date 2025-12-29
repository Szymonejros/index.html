function showHome() {
    document.getElementById("content").innerHTML = `
        <h1>Strona główna</h1>
        <p>Witaj na mojej pierwszej stronie 😄</p>
    `;
}

function showAuthor() {
    document.getElementById("content").innerHTML = `
        <h1>O autorze</h1>
        <p>Stworzone przez <b>Szymon Rak</b> &copy; 2024</p>
        <p>Uczę się HTML i robię swoje pierwsze strony 😎</p>
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
        <li> strona została utworzona
        <li>29.12.2025: Dodano:
                         interaktywne Menu"
                         Ikonę
                         Zmieniono Tytuł
                         Zmieniono tło</li>
                         Dodano stronę kontaktową
                         Poprawiono błędy w kodzie
                         Zaktualizowano sekcję "O autorze"
    </h2>
    `;
}
// pokaż stronę główną po starcie
showHome();
