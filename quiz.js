$(document).ready(function(){

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
  let $highScoresList = $("#high-scores-list");
  const $results = $("#results");
  const $userScoreEl = $("#user-score");
  let $seconds = $("#seconds");
  let counter = 60;
  let userScore = 0;
  let $userInitials = $("#initials-input");
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

  let interval = setInterval(function () {
      counter--;
      if (counter <= 0) {
        clearInterval(interval);
        $timer.html("Times Up!");
        endQuiz();
      } else {
        $seconds.text(counter);
      }
    }, 1000);
    
  // Functions

  function startQuiz() {
    $home.addClass("hide");
    $quiz.removeClass("hide");
    $timer.removeClass("hide");
    
    setNextQuestion();
  }

  function stopTimer() {
    clearInterval(interval);
  }

  function setNextQuestion() {
    let currentQuestion = questions[0];
    console.log(currentQuestion);
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
      if (questions.length === 0) {
        endQuiz();
      } else {
          setNextQuestion();
      }
    
  }

  function result() {
    if (event.target.textContent === questions[0].answer) {
      userScore += 100;
      questions.shift();
      getNewQuestion();
    } else {
      counter -= 10;
      questions.shift();
      getNewQuestion();
    }
  }

  function endQuiz() {
    console.log("End quiz");
    stopTimer(interval);
    $results.removeClass("hide");
    $quiz.addClass("hide");
    $timer.addClass("hide");
    $userScoreEl.append(userScore);
    }

  function saveScore() {
    const $li = $('<li>');
    $li.text(userScore);
    $highScoresList.append($li);
    showHighScores();
  }

  // // var li = document.createElement("li");
  // const $li = $('<li>');
  // // li.textContent = todo;
  // $li.text(todo);
  // // li.setAttribute("data-index", i);
  // $li.attr('data-index', i);
  // const $button = $('<button>').text('Complete');
  // // $li.appendChild(button);
  // $li.append($button);
  // todoList.appendChild(li);

  function showHighScores() {
    $quiz.addClass("hide");
    $home.addClass("hide");
    $timer.addClass("hide");
    $results.addClass("hide");
    $highScores.removeClass("hide");
  }

  // Event listeners
  $("#start-btn").on("click", startQuiz);
  $("#answer-buttons").on("click", result);
  $("#save-score").on("click", saveScore);
  $("#view-high-scores").on("click", showHighScores);

});  
