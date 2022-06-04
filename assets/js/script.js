var startButton = document.getElementById("startButton");
var startPage = document.getElementById("startpage");
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
		options: ["all of the above", "numbers and strings", "booleans"],
	},
	{
		question:
			"Strong values must be enclosed within ____ when being assigned to variables",
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

startButton.addEventListener("click", startQuestions);

function checkAnswer(event) {
	var clickedButtonId = event.target.id;
	if (clickedButtonId === questions[0].answer) {
		console.log("correct");
	} else {
		console.log("incorrect");
	}
}

function startQuestions() {
	startPage.innerHTML =
		"<h1 id=askingQuestion>" +
		questions[0].question +
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

function buttonOptions(buttonNum, buttonAnswer) {
	var html = "";
	for (var i = 0; i < questions[0].options.length; i++) {
		html += `<button type="button" id="${questions[0].options[i]}" class="questionButtons"> ${questions[0].options[i]} </button>`;
	}
	return html;
}
