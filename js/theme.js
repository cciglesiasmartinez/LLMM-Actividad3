/* Theme button */
const themeButton = document.querySelectorAll('.theme-btn')[0];
console.log(themeButton);

/* The eventListener for click event */
themeButton.addEventListener('click', () => {
    executeThemeModeChanger();
});

/* Theme detection preference on page load */
(() => {
    const darkThemePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkThemePreferred === true && getThemeMode() != "clear") {
        setTheme("dark");
    } else {
        setTheme("clear");
    }
})();


/* Main function */
function executeThemeModeChanger() {
    const result = getThemeMode();
    return result == "dark" ? setTheme("clear") : setTheme("dark");
}


/* Helper functions */
function getThemeMode() {
    return localStorage.getItem('theme') == "clear" ? "clear" : "dark";
}

function setTheme(mode) {
    setCssRootVariables(mode);
    setLocalStorageThemeMode(mode);
    changeWebLogo(mode);
}

function setLocalStorageThemeMode(mode) {
    return localStorage.setItem("theme", mode);
}

function setCssRootVariables(mode) {
    if (mode == "dark") {
        document.documentElement.style.setProperty("--background-color", "var(--dark)");
        document.documentElement.style.setProperty("--foreground-color", "var(--clear)");
        document.documentElement.style.setProperty("--highlight-color", "var(--highlight-clear)");
        document.documentElement.style.setProperty("--link-color", "var(--link-clear)");
    }
    else if (mode == "clear") {
        document.documentElement.style.setProperty("--background-color", "var(--clear)");
        document.documentElement.style.setProperty("--foreground-color", "var(--dark)");
        document.documentElement.style.setProperty("--highlight-color", "var(--highlight-dark)");
        document.documentElement.style.setProperty("--link-color", "var(--link-dark)");
    }
}

function changeWebLogo(mode) {
    const logoElement =  document.querySelectorAll(".header-logo-img")[0];
    if (mode == "dark") {
        logoElement.setAttribute("src", "img/logo-oscuro.png");
    }
    else if (mode == "clear") {
        logoElement.setAttribute("src", "img/logo-claro.png");
    }
}