let quizzesData;

fetch("./data.json")
  .then((data) => data.json())
  .then((json) => {
    quizzesData = json.quizzes[1];
    main();
  });

const dark = document.querySelector(".dark-mode");
const light = document.querySelector(".light-mode");
const darkText = document.querySelector(".dark__text");
const darkBackground = document.querySelector("dark__background");
const toggleMode = document.getElementById("toggle-switch");
const icons = document.querySelectorAll(".icon");
const body = document.body;
const focus = document.activeElement;
const submit = document.querySelector(".submit");
const answerHTML = document.querySelectorAll(".answers");
const questionNumber = document.querySelector(".question__progress");
const questionText = document.querySelector(".question");
const choiceButtons = document.querySelectorAll(".question__choice");
const options = document.querySelectorAll(".options");
const progress = document.querySelector(".question__progress-bar");

let i = 0;
let choice = null;
let questionAnswer = "";
let answerButton = "";
let answerButtonbackground = "";
let score = 0;

const darkMode = () => {
  const choiceButtons = document.querySelectorAll(".question__choice");
  const question = document.querySelector(".question");
  const topic = document.querySelector(".topic__name");
  const questionProgress = document.querySelector(".question__progress");
  const choicewithinButtons = document.querySelectorAll(".answers");

  toggleMode.addEventListener("click", () => {
    //Body toggle

    body.classList.toggle("dark-mode");

    topic.classList.toggle("dark__text");

    questionProgress.classList.toggle("dark__text");

    //Icon toggle
    icons.forEach((icon) => {
      icon.classList.toggle("dark-switch");
    });

    //Question header toggle
    question.classList.toggle("dark__text");

    //toggle topic buttons
    choiceButtons.forEach((topic) => {
      topic.classList.toggle("dark__background");
    });

    choicewithinButtons.forEach((button) => {
      button.classList.toggle("dark__text");
    });
  });
};

const mode = () => {
  const choiceButtons = document.querySelectorAll(".question__choice");
  const question = document.querySelector(".question");
  const topic = document.querySelector(".topic__name");
  const questionProgress = document.querySelector(".question__progress");
  const choicewithinButtons = document.querySelectorAll(".answers");

  if (toggleMode.checked) {
    //Make toggle true (dark)
    toggleMode.checked = true;

    body.classList.toggle("dark-mode");

    topic.classList.toggle("dark__text");

    questionProgress.classList.toggle("dark__text");

    //Icon toggle
    icons.forEach((icon) => {
      icon.classList.add("dark-switch");
    });

    //Question header toggle
    question.classList.toggle("dark__text");

    //toggle topic buttons
    choiceButtons.forEach((topic) => {
      topic.classList.toggle("dark__background");
    });

    choicewithinButtons.forEach((button) => {
      button.classList.toggle("dark__text");
    });
  }
};

choiceButtons.forEach((button, index) => {
  button.addEventListener("focus", () => {
    if (button === document.activeElement) {
      choice = answerHTML[index].innerText;
      answerButtonbackground = options[index];
      answerButton = button;
      console.log(choice);
    }
  });
});

submit.addEventListener("click", () => {
  rightorWrong();

  if (submit.innerHTML === "Next Question") {
    getQuestion();
    submit.innerHTML = "Submit";
  } else {
    submit.innerHTML = "Next Question";
  }

  //Replace Topic for other pages !!!!!!!!!!!!!!!!
  if (i === 10 && submit.innerHTML === "Next Question") {
    localStorage.setItem("topic", "css");
    window.location.href = "/score.html";
  }
});

const getQuestion = () => {
  if (i < 10) {
    const questions = quizzesData.questions[i];
    const options = questions.options;
    questionAnswer = questions.answer;

    progress.value = i + 1;

    //Create Question x of 10
    questionNumber.innerText = `Question ${i + 1} of 10`;

    //Create Question
    questionText.innerText = `${questions.question}`;

    //Create Question options
    options.forEach((option, index) => {
      answerHTML[index].innerText = `${option} `;
    });
    i++;
  } else {
    i = 0;
  }
};

// Compares ans and choice to show what is wrong
function rightorWrong() {
  if (choice === questionAnswer) {
    answerButton.classList.toggle("correct");
    answerButtonbackground.classList.toggle("correct__background");
    if (submit.innerHTML === "Submit") {
      score++;
      console.log(score);
      localStorage.setItem("score", score);
      console.log(localStorage);
    }
  } else {
    answerButton.classList.toggle("wrong");
    answerButtonbackground.classList.toggle("wrong__background");
  }
}

window.addEventListener("load", mode, false);

const main = () => {
  darkMode();
  getQuestion();
};
