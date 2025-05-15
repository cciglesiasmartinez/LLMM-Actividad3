/* Theme button */
const themeButton = document.querySelectorAll('.theme-btn')[0];
console.log(themeButton);

/* The eventListener for click event */
themeButton.addEventListener('click', () => {
    executeThemeModeChanger();
});

/* Preferred mode detection */
const darkThemePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;

/* Theme detection preference on page load */
(() => {
    if (darkThemePreferred === true && getThemeMode() != "clear") {
        setCssRootVariables("dark");
        setLocalStorageThemeMode("dark");
        changeWebLogo("dark");
    } else {
        setCssRootVariables("clear");
        setLocalStorageThemeMode("clear");
        changeWebLogo("clear")
    }
})();

function getThemeMode() {
    return localStorage.getItem('theme') == "clear" ? "clear" : "dark";
}

async function executeThemeModeChanger() {
    console.log("Ejecutando thememodechanger")
    const result = await getThemeMode();
    console.log(result);
    if (result == "dark") {
        console.log("Seteando claro")
        setCssRootVariables("clear");
        setLocalStorageThemeMode("clear");
        changeWebLogo("clear")
    } 
    if (result == "clear") {
        console.log("Seteando oscuro");
        setCssRootVariables("dark");
        setLocalStorageThemeMode("dark");
        changeWebLogo("dark");
    }
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
    console.log(logoElement);
    if (mode == "dark") {
        logoElement.setAttribute("src", "img/logo-oscuro.png");
    }
    else if (mode == "clear") {
        logoElement.setAttribute("src", "img/logo-claro.png");
    }
}