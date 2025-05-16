/* Theme button */
const themeButton = document.querySelector('.theme-btn');

/* The eventListener for click event */
themeButton.addEventListener('click', () => {
    executeThemeModeChanger();
});

/* Theme detection preference on page load */
(() => {
    const darkThemePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkThemePreferred === true && getThemeMode() != "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
})();


/* Main function */
function executeThemeModeChanger() {
    const result = getThemeMode();
    return result == "dark" ? setTheme("light") : setTheme("dark");
}


/* Helper functions */
function getThemeMode() {
    return localStorage.getItem('theme') == "light" ? "light" : "dark";
}

function setTheme(mode) {
    setCssRootVariables(mode);
    setLocalStorageThemeMode(mode);
    changeWebLogo(mode);
}

function setLocalStorageThemeMode(mode) {
    localStorage.setItem("theme", mode);
}

function setCssRootVariables(mode) {
    document.documentElement.style.setProperty("--background-color", `var(--background-${mode})`);
    document.documentElement.style.setProperty("--foreground-color", `var(--foreground-${mode})`);
    document.documentElement.style.setProperty("--highlight-color", `var(--highlight-${mode})`);
    document.documentElement.style.setProperty("--link-color", `var(--link-${mode})`);
}

function changeWebLogo(mode) {
    const logoElement =  document.querySelector(".header-logo-img");
    if (logoElement) {
        if (mode == "dark") {
            logoElement.setAttribute("src", "img/logo-oscuro.png");
        }
        else if (mode == "light") {
            logoElement.setAttribute("src", "img/logo-claro.png");
        }
    }
}