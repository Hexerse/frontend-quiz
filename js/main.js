const dark = document.querySelector(".dark-mode");
const light = document.querySelector(".light-mode");
const icons = document.querySelectorAll(".icon");
const toggleMode = document.getElementById("toggle-switch");
const darkText = document.querySelector(".dark__text");
const darkBackground = document.querySelector("dark__background");
const body = document.body;

const darkMode = () => {
  const topicButtons = document.querySelectorAll(".buttons__topics");
  const quiz = document.querySelector(".frontend__quiz");

  toggleMode.addEventListener("click", () => {
    //Body toggle
    body.classList.toggle("dark-mode");

    //Header toggle
    quiz.classList.toggle("dark__text");

    //Icon toggle
    icons.forEach((icon) => {
      icon.classList.toggle("dark-switch");
    });
    //toggle topic buttons
    topicButtons.forEach((topic) => {
      topic.classList.toggle("dark__text");
      topic.classList.toggle("dark__background");
    });
  });
};

const mode = () => {
  const topicButtons = document.querySelectorAll(".buttons__topics");
  const quiz = document.querySelector(".frontend__quiz");
  if (toggleMode.checked) {
    toggleMode.checked = true;

    body.classList.toggle("dark-mode");
    quiz.classList.toggle("dark__text");

    icons.forEach((icon) => {
      icon.classList.toggle("dark-switch");
    });

    topicButtons.forEach((topic) => {
      topic.classList.toggle("dark__text");
      topic.classList.toggle("dark__background");
    });
  }
};

window.addEventListener("load", mode, false);

const main = () => {
  darkMode();
};

main();
