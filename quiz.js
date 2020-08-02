// Variable declarations
const home = document.getElementById("home");
const timer = document.getElementById("timer");
const quiz = document.getElementById("quiz");
var questionCounter = 0;
var selections = [];
let questions = [
    {
        question: 'Who invented JavaScript?',
        choices: ['1. Elon Musk', '2. Bill Gates' , '3. Mark Zuckerberg',
         '4. Brendan Eich'],
        answer: 3,
    },
    {
        question: "How many days did it take to write JavaScript?",
        choices: ["10 days", "2 weeks", "2 months", "2 years"],
        answer: 0,
    },
    {
        question: "What language is used the most?",
        choices: ["Java", "C++", "JavaScript", "Python"],
        answer: 2,
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
  createQuestionElement();
}

function createQuestionElement(index) {
  let qElement = $('<div>', {
    id: 'question'
  });
  
  let header = $('<h2>Question ' + (index + 1) + ':</h2>');
  qElement.append(header);
  
  let question = $('<p>').append(questions[index].question);
  qElement.append(question);
  
  return qElement;
}

// Event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);