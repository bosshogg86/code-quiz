// Variable declarations
const home = document.getElementById("home");
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const choices = Array.from(document.getElementByClassName("choice-text"));
let score = 0;
let questions = [
    {
        question: 'Who invented JavaScript?',
        choice1: '1. Elon Musk',
        choice2: '2. Bill Gates',
        choice3: '3. Mark Zuckerberg',
        choice4: '4. Brendan Eich',
        answer: 4,
    },
    {
        question:
            "How many days did it take to write JavaScript?",
        choice1: "10 days",
        choice2: "2 weeks",
        choice3: "2 months",
        choice4: "2 years",
        answer: 1,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

// Functions
function startQuiz() {
  home.classList.add("hide");
  questionContainer.classList.remove("hide");
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

function setNextQuestion() {}
// Event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
