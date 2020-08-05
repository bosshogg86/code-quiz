// Variable declarations
const $home = $("#home");
const $timer = $("#timer");
const $quiz = $("#quiz");
const $question = $("#question");
const $btn0 = $("#btn0");
const $btn1 = $("#btn1");
const $btn2 = $("#btn2");
const $btn3 = $("#btn3");
const $highScores = $("#high-scores");
const $results = $("results");
let $seconds = $("#seconds");
let counter = 60;
let userScore;
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
  {
    question: "What is an abbreviation for JavaScript?",
    choices: ["Java", "JS", "TypeScript", "C#"],
    answer: "JS",
  },
];
let currentQuestion = questions[Math.floor(Math.random() * questions.length)];


// Functions
function startQuiz() {
  $home.addClass("hide");
  $quiz.removeClass("hide");
  $timer.removeClass("hide");
  let interval = setInterval(function () {
    counter--;
    if (counter <= 0) {
      clearInterval(interval);
      $("#timer").html("Times Up!");
      endQuiz();
      return;
    } else {
      $("#seconds").text(counter);
    }
  }, 1000);
  setNextQuestion();
}

function setNextQuestion() {
  let currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  $question.append(currentQuestion.question);
  $btn0.append(currentQuestion.choices[0]);
  $btn1.append(currentQuestion.choices[1]);
  $btn2.append(currentQuestion.choices[2]);
  $btn3.append(currentQuestion.choices[3]);
}

function getNewQuestion() {
  $question.html("");
  $btn0.html("");
  $btn1.html("");
  $btn2.html("");
  $btn3.html("");
    if (questions.length <= 0) {
      endQuiz();
    } else {
      console.log();
        setNextQuestion();
    }
  
}

function result() {

  if (event.target.textContent === currentQuestion.answer) {

    getNewQuestion();
  } else {
    counter -= 10;
    getNewQuestion();
  }
}

function endQuiz() {
  $results.removeClass("hide");
  $quiz.addClass("hide");
  $timer.addClass("hide");
  saveScore();
}

function saveScore() {
  
}

function showHighScores() {
  $quiz.addClass("hide");
  $home.addClass("hide");
  $timer.addClass("hide");
  $highScores.removeClass("hide");
}

// Event listeners
document.querySelector("#start-btn").addEventListener("click", startQuiz);
document.querySelector("#answer-buttons").addEventListener("click", result);
document.querySelector("#view-high-scores").addEventListener("click", showHighScores);

// $startBtn.click(startQuiz());

// $answerBtn.click(result());