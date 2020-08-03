// Variable declarations
const home = document.getElementById("home");
const timer = document.getElementById("timer");
const quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let questions = [
  {
    question: "Who invented JavaScript?",
    choices: ["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Brendan Eich"],
    answer: 3,
  },
  {
    question: "How many days did it take to write JavaScript?",
    choices: ["10 days", "2 weeks", "2 months", "2 years"],
    answer: 0,
  },
  {
    question: "What programming language is the most widely used today?",
    choices: ["Java", "C++", "JavaScript", "Python"],
    answer: 2,
  },
  {
    question: "What is JavaScript?",
    choices: ["Algorithm", "Function", "Formula", "Programming Language"],
    answer: 0,
  },
];

// Functions
function startQuiz() {
  home.classList.add("hide");
  quiz.classList.remove("hide");
  timer.classList.remove("hide");
  let counter = 60;
  let interval = setInterval(function () {
    counter--;
    if (counter <= 0) {
      clearInterval(interval);
      $("#timer").html("Times Up!");
      return;
    } else {
      $("#seconds").text(counter);
      console.log("Timer --> " + counter);
    }
  }, 1000);
  setNextQuestion();
}

function setNextQuestion() {
  let currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").append(currentQuestion.question);
  document.getElementById("btn0").append(currentQuestion.choices[0]);
  document.getElementById("btn1").append(currentQuestion.choices[1]);
  document.getElementById("btn2").append(currentQuestion.choices[2]);
  document.getElementById("btn3").append(currentQuestion.choices[3]);
}

// Event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
