// Variable declarations
const home = document.getElementById("home");
const timer = document.getElementById("timer");
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const choices = Array.from(document.querySelector(".choice-text"));
let score = 0;
let questions = [
    {
        question: 'Who invented JavaScript?',
        choice0: '1. Elon Musk',
        choice1: '2. Bill Gates',
        choice2: '3. Mark Zuckerberg',
        choice3: '4. Brendan Eich',
        answer: 3,
    },
    {
        question:
            "How many days did it take to write JavaScript?",
        choice0: "10 days",
        choice1: "2 weeks",
        choice2: "2 months",
        choice3: "2 years",
        answer: 0,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice0: "msgBox('Hello World');",
        choice1: "alertBox('Hello World');",
        choice2: "msg('Hello World');",
        choice3: "alert('Hello World');",
        answer: 3,
    },
];

// Functions
function startQuiz() {
  home.classList.add("hide");
  questionContainer.classList.remove("hide");
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
}

function nextQuestion() {
 
}

// Event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("question-container").addEventListener("click", nextQuestion);
