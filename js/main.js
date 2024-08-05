const dark = document.querySelector(".dark-mode");
const light = document.querySelector(".light-mode");
const icons = document.querySelectorAll(".icon");
const toggleMode = document.getElementById("toggle-switch");
const body = document.body;

const darkMode = () => {
  toggleMode.addEventListener("click", () => {
    //Body toggle
    body.classList.toggle("dark-mode");
    //Icon toggle
    icons.forEach((icon) => {
      icon.classList.toggle("dark-switch");
    });
  });
};

const mode = () => {
  if (toggleMode.checked) {
    toggleMode.checked = true;

    body.classList.toggle("dark-mode");

    icons.forEach((icon) => {
      icon.classList.toggle("dark-switch");
    });
  }
};

window.addEventListener("load", mode, false);

const main = () => {
  darkMode();
};

main();
