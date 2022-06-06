// Creating variables to store elements from the HTML - these are then called throughout the code:
var startButton = document.getElementById("startButton");
var viewHighScorePage = document.getElementById("viewHighScores");
var startPage = document.getElementById("startpage");
var showAnswer = document.getElementById("showAnswer");
var showCountDownTimer = document.getElementById("showCountDownTimer");
var currentQuestion = 0;
var count = 75;
var timeHighScore = "";

// This variable holds the questions and their answers:
var questions = [
	{
		question: "Commonly used data types DO NOT include:",
		answer: "alerts",
		options: ["strings", "alerts", "booleans", "numbers"],
	},
	{
		question:
			"The condition in an if / else statement is enclosed within ____.",
		answer: "parenthesis",
		options: ["parenthesis", "quotes", "curly brackets", "square brackets"],
	},
	{
		question: "Arrays in JavaScript can be used to store ____.",
		answer: "all of the above",
		options: ["numbers and strings", "booleans", "all of the above"],
	},
	{
		question:
			"String values must be enclosed within ____ when being assigned to variables",
		answer: "quotes",
		options: ["quotes", "commas", "curly brackets", "paranthesis"],
	},
	{
		question:
			"A very useful tool used during development and debugging for printing content to the debugger is:",
		answer: "console.log",
		options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
	},
];

// This event listener triggers the start of all the functions and events to this site:
startButton.addEventListener("click", startQuiz);
viewHighScores.addEventListener("click", showHighScores);

function showHighScores() {
	var leaderboardInitials = localStorage.getItem("initials");
	var leaderboardScore = localStorage.getItem("timeHighScore");
	var highScores = "";

	if (leaderboardInitials && leaderboardScore) {
		highScores =
			"<div id='highscorePage'>1. " +
			leaderboardInitials +
			" - " +
			leaderboardScore +
			"</div>";
	}

	startPage.innerHTML =
		"<article id='leaderBoard'><h1>Highscores</h1>" +
		highScores +
		"<button type='button' name='goBack' id='goBack' onClick='window.location.reload();'>Go Back</button> <button type='button' name='clearHighscores' id='clearHighScores'>Clear Highscores</button></article>";
	var clearHighScores = document.getElementById("clearHighScores");
	clearHighScores.addEventListener("click", clearHighScoreTable);
	function clearHighScoreTable() {
		localStorage.clear();
		showHighScores();
	}
}

// This event function is called when there are no more questions remaining - this will stop the timer and turn that into the score. The player can then store their high score:
function recordHighScore() {
	showAnswer.innerHTML = " ";
	startPage.innerHTML =
		"<h1 class=allDone> All Done! <p class=allDone id=finalScore> Your final score is " +
		timeHighScore +
		"<p id=enterInitials>Enter initials:<input type='text' name='initials' id='initials'></input><button type=button id='submitScoreButton'>Submit</button><p>";

	// This stores the score and initials into the local storage:
	var submitScoreButton = document.getElementById("submitScoreButton");
	submitScoreButton.addEventListener("click", saveScore);
	function saveScore() {
		var initials = document.querySelector("#initials").value;
		localStorage.setItem("initials", initials);
		localStorage.setItem("timeHighScore", timeHighScore);
		showHighScores();
	}
}

// This function checks the elements ID of the button chosen, and will return correct or incorrect. Then restarts the startQuestions function.
function checkAnswer(event) {
	var clickedButtonId = event.target.id;
	if (clickedButtonId === questions[currentQuestion].answer) {
		showAnswer.innerHTML = " <hr> Correct!";
	} else {
		showAnswer.innerHTML = " <hr> Incorrect!";
		count = count - 10;
	}
	if (currentQuestion < questions.length - 1) {
		currentQuestion++;
		startQuestions();
	} else {
		recordHighScore();
	}
}

// This function runs the questions and the funciton inside that then runs the button choices:
function startQuiz() {
	var timer = setInterval(function () {
		showCountDownTimer.innerHTML = count--;
		if (count === 0 || currentQuestion === questions.length - 1) {
			timeHighScore = count + 1;
			recordHighScore();
			clearInterval(timer);
		}
	}, 1000);
	startQuestions();
}

function startQuestions() {
	startPage.innerHTML =
		"<h1 id=askingQuestion>" +
		questions[currentQuestion].question +
		"</h1><div id=answersContainer>" +
		buttonOptions() +
		"</div>";
	var selectAllButtons = document.querySelectorAll(
		"#answersContainer button"
	);
	for (var i = 0; i < selectAllButtons.length; i++) {
		selectAllButtons[i].addEventListener("click", checkAnswer);
	}
}

// This function as stated above runs the button choices of the question:
function buttonOptions(buttonNum, buttonAnswer) {
	var html = "";
	for (var i = 0; i < questions[currentQuestion].options.length; i++) {
		html += `<button type="button" id="${questions[currentQuestion].options[i]}" class="questionButtons"> ${questions[currentQuestion].options[i]} </button>`;
	}
	return html;
}
