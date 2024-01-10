const button = document.getElementsByClassName("toggle-button");
const lightButton = document.getElementById("light-button");
const darkButton = document.getElementById("dark-button");

button[0].addEventListener("click", (e) => {
  e.preventDefault();
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    lightButton.classList.remove("hidden");
    darkButton.classList.add("hidden");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    lightButton.classList.add("hidden");
    darkButton.classList.remove("hidden");
  }
});

button[1].addEventListener("click", (e) => {
  e.preventDefault();
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    lightButton.classList.remove("hidden");
    darkButton.classList.add("hidden");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    lightButton.classList.add("hidden");
    darkButton.classList.remove("hidden");
  }
});
