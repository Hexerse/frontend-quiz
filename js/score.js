const dark = document.querySelector(".dark-mode");
const light = document.querySelector(".light-mode");
const icons = document.querySelectorAll(".icon");
const toggleMode = document.getElementById("toggle-switch");
const darkText = document.querySelector(".dark__text");
const darkBackground = document.querySelector(".dark__background");
const body = document.body;
const scoreContainer = document.querySelector(".score__container");
const topic = localStorage.topic;
const imgDiv = document.querySelector(".head");
const scoreTaken = localStorage.score;
const score = document.querySelector(".score");

console.log(localStorage);

const darkMode = () => {
  const topicButtons = document.querySelectorAll(".buttons__topics");
  const quiz = document.querySelector(".frontend__quiz");

  toggleMode.addEventListener("click", () => {
    //Body toggle
    body.classList.toggle("dark-mode");

    //Main background toggle
    scoreContainer.classList.toggle("dark__background");

    //Icon toggle
    icons.forEach((icon) => {
      icon.classList.toggle("dark-switch");
    });
  });
};

const mode = () => {
  const topicButtons = document.querySelectorAll(".buttons__topics");
  const quiz = document.querySelector(".frontend__quiz");
  if (toggleMode.checked) {
    //Make toggle true (dark)
    toggleMode.checked = true;

    body.classList.toggle("dark-mode");

    scoreContainer.classList.toggle("dark__background");

    scoreContainer.classList.toggle("dark__text")

    icons.forEach((icon) => {
      icon.classList.toggle("dark-switch");
    });
  }
};

window.addEventListener("load", mode, false);

const generateTopic = () => {
  imgDiv.innerHTML = `<img
            src="./starter-code/assets/images/icon-${topic}.svg"
            alt=""
          />
          <p class="topic__score__heading">${
            topic.charAt(0).toUpperCase() + topic.slice(1)
          }</p>`;
  score.innerHTML = `${scoreTaken}`;
};

const main = () => {
  darkMode();
  generateTopic();
};

main();

