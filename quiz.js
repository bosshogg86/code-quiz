$(document).ready(function () {
  // JQuery declarations
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
  let $userInitialsEl = $("#initials-input");

  // Variable declarations
  let counter = 60;
  let userScore = 0;
  let scores = [];
  let interval;
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
    {
      question: "Which of the following is not a JavaScript term?",
      choices: ["Let", "Const", "Var", "Jav"],
      answer: "Jav",
    },
    {
      question: "Which of the following is a JavaScript loop?",
      choices: ["When", "Because", "For", "Then"],
      answer: "For",
    },
  ];
  let currentQuestion = 0;

  // Check local storage
  init();

  // Start timer
  function startTimer() {
    interval = setInterval(function () {
      counter--;
      if (counter <= 0) {
        clearInterval(interval);
        $timer.html("Times Up!");
        endQuiz();
      } else {
        $seconds.text(counter);
      }
    }, 1000);
  }

  // Set next question
  function setNextQuestion() {
    $question.append(questions[currentQuestion].question);
    $btn0.attr("value", questions[currentQuestion].choices[0]);
    $btn1.attr("value", questions[currentQuestion].choices[1]);
    $btn2.attr("value", questions[currentQuestion].choices[2]);
    $btn3.attr("value", questions[currentQuestion].choices[3]);
    $btn0.append(questions[currentQuestion].choices[0]);
    $btn1.append(questions[currentQuestion].choices[1]);
    $btn2.append(questions[currentQuestion].choices[2]);
    $btn3.append(questions[currentQuestion].choices[3]);
  }

  // Clear last question/gets new question
  function getNewQuestion() {
    $question.html("");
    $btn0.text("");
    $btn1.text("");
    $btn2.text("");
    $btn3.text("");
    if (questions[currentQuestion] === questions[6]) {
      endQuiz();
    } else {
      currentQuestion++;
      setNextQuestion();
    }
  }

  // End quiz
  function endQuiz() {
    clearInterval(interval);
    $results.show();
    $quiz.hide();
    $timer.hide();
    $userScoreEl.append(userScore);
  }

  // Show High Scores
  function showHighScores() {
    $("#high-scores-list").empty();
    clearInterval(interval);
    $quiz.hide();
    $home.hide();
    $timer.hide();
    $results.hide();
    $highScores.show();
  }

  // Check local storage
  function init() {
    if (localStorage.getItem("scores")) {
      const savedScores = JSON.parse(localStorage.getItem("scores"));
      scores.push(...savedScores);
      renderScores();
    }
  }

  // Append scores to list
  function renderScores() {
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      const $li = $("<li>");
      $li.text(score);
      $li.attr("data-index", i);
      $highScoresList.append($li);
    }
  }

  // Store scores locally
  function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
  }

  // on Click Events

  // Start quiz
  $("#start-btn").on("click", function () {
    $home.hide();
    $quiz.show();
    $timer.show();
    startTimer();
    setNextQuestion();
  });

  // Check answer
  $(".answer-btn").on("click", function () {
    if (event.target.value === questions[currentQuestion].answer) {
      userScore += 100;
      $("#correct").show();
      setTimeout(function () {
        $("#correct").hide();
      }, 1000);
      getNewQuestion();
    } else {
      counter -= 10;
      $("#incorrect").show();
      setTimeout(function () {
        $("#incorrect").hide();
      }, 1000);
      getNewQuestion();
    }
  });

  // Save score and initials to array
  $("#save-score").on("click", function () {
    let userInitials = $userInitialsEl.val().toUpperCase().trim();
    let savedScore = userInitials + " " + userScore;
    if (userInitials === "") {
      return;
    }
    scores.push(savedScore);
    $userInitialsEl.val("");
    showHighScores();
    storeScores();
    renderScores();
  });

  // View high scores
  $("#view-high-scores").on("click", function () {
    showHighScores();
    renderScores();
  });

  // Reloads quiz
  $("#start-over").on("click", function () {
    location.reload();
  });
});
