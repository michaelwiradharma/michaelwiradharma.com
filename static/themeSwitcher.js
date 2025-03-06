const selectedTheme = localStorage.getItem("theme");

if (selectedTheme) {
  globalThis.showDarkMode = selectedTheme === "dark";
} else {
  globalThis.showDarkMode =
    globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
  localStorage.setItem("theme", globalThis.showDarkMode ? "dark" : "light");
}

if (globalThis.showDarkMode) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
