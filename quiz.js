$(document).ready(function () {
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
  let $userInitialsEl = $("#initials-input");
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
  ];

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

  // Start quiz
  function startQuiz() {
    $home.hide();
    $quiz.show();
    $timer.show();
    startTimer();
    setNextQuestion();
  }

  // Set next question
  function setNextQuestion() {
    let currentQuestion = questions[0];
    $question.append(currentQuestion.question);
    $btn0.attr("value", currentQuestion.choices[0]);
    $btn1.attr("value", currentQuestion.choices[1]);
    $btn2.attr("value", currentQuestion.choices[2]);
    $btn3.attr("value", currentQuestion.choices[3]);
    $btn0.append(currentQuestion.choices[0]);
    $btn1.append(currentQuestion.choices[1]);
    $btn2.append(currentQuestion.choices[2]);
    $btn3.append(currentQuestion.choices[3]);
  }

  // Clear last question/gets new question
  function getNewQuestion() {
    $question.html("");
    $btn0.text("");
    $btn1.text("");
    $btn2.text("");
    $btn3.text("");
    if (questions.length === 0) {
      endQuiz();
    } else {
      setNextQuestion();
    }
  }

  // Check answer
  function result() {
    if (event.target.value === questions[0].answer) {
      userScore += 100;
      $("#correct").show();
      setTimeout(function() { $("#correct").hide(); }, 1000);
      questions.shift();
      getNewQuestion();
    } else {
      counter -= 10;
      $("#incorrect").show();
      setTimeout(function() { $("#incorrect").hide(); }, 1000);
      questions.shift();
      getNewQuestion();
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

  
  // Save score and initials to array
  function saveScore() {
    let userInitials = $userInitialsEl.val().trim();
    let savedScore = (userInitials + " " + userScore);
    if (userInitials === "") {
      return;
    }
    scores.push(savedScore);
    $userInitialsEl.val("");
    showHighScores();
    storeScores();
    renderScores();
  }

  // Show High Scores
  function showHighScores() {
    $( "#high-scores-list").empty();
    clearInterval(interval);
    $quiz.hide();
    $home.hide();
    $timer.hide();
    $results.hide();
    $highScores.show();
  }

  // Reloads quiz
  function reload() {
    location.reload();
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

  // Event listeners
  $("#start-btn").on("click", startQuiz);
  $(".answer-btn").on("click", result);
  $("#save-score").on("click", saveScore);
  $("#view-high-scores").on("click", showHighScores);
  $("#start-over").on("click", reload);
});
