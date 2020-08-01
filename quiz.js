// Variable declarations
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
let score = 0;
let questions = [
    {
        
    }
]
// Functions
function startQuiz() {
  startButton.classList.add("hide");
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
