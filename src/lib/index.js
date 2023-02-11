if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.getElementById("body").setAttribute("data-bs-theme", "dark");
} else {
    document.getElementById("body").setAttribute("data-bs-theme", "light");
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    document.getElementById("body").setAttribute("data-bs-theme", event.matches ? "dark" : "light");
});