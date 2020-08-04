// Variable declarations
const home = document.getElementById("home");
const timer = document.getElementById("timer");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
let counter = 60;
let questions = [
  {
    question: "Who invented JavaScript?",
    choices: ["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Brendan Eich"],
    answer: "Brendan Eich",
  },
  {
    question: "How many days did it take to write JavaScript?",
    choices: ["10 days", "2 weeks", "2 months", "2 years"],
    answer: "10 days",
  },
  {
    question: "What programming language is the most widely used today?",
    choices: ["Java", "C++", "JavaScript", "Python"],
    answer: "JavaScript",
  },
  {
    question: "What is JavaScript?",
    choices: ["Algorithm", "Function", "Formula", "Programming Language"],
    answer: "Programming Language",
  },
];
let availableQuestions = questions.slice();
let currentQuestion = availableQuestions[0];


// Functions
function startQuiz() {
  home.classList.add("hide");
  quiz.classList.remove("hide");
  timer.classList.remove("hide");
  let interval = setInterval(function () {
    counter--;
    if (counter <= 0) {
      clearInterval(interval);
      $("#timer").html("Times Up!");
      return;
    } else {
      $("#seconds").text(counter);
    }
  }, 1000);
  setNextQuestion();
}

function setNextQuestion() {
  question.innerText = currentQuestion.question;
  document.getElementById("btn0").innerText = currentQuestion.choices[0];
  document.getElementById("btn1").innerText = currentQuestion.choices[1];
  document.getElementById("btn2").innerText = currentQuestion.choices[2];
  document.getElementById("btn3").innerText = currentQuestion.choices[3];
}

function getQuestion() {
  availableQuestions.shift();
  setNextQuestion();
}

function result() {
  if (event.target.textContent === currentQuestion.answer) {
    getQuestion();
    // setNextQuestion();
  } else {
    counter -= 10;
    getQuestion();
    // setNextQuestion();
  }
}

// Event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
document.querySelector("#answer-buttons").addEventListener("click", result);