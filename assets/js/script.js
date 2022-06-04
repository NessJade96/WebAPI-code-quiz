// Creating variables to store elements from the HTML - these are then called throughout the code:
var startButton = document.getElementById("startButton");
var startPage = document.getElementById("startpage");
var showAnswer = document.getElementById("showAnswer");
var currentQuestion = 0;

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

// This event listener triggers the start of all the functions and events to this site:
startButton.addEventListener("click", startQuestions);

// This function checks the elements ID of the button chosen, and will return true or false: ((might need to change this comment later))
function checkAnswer(event) {
	currentQuestion++;
	var clickedButtonId = event.target.id;
	if (clickedButtonId === questions[currentQuestion].answer) {
		showAnswer.innerHTML = " <hr> Correct!";
	} else {
		showAnswer.innerHTML = " <hr> Incorrect!";
	}
	startQuestions();
}

// This function runs the questions and the funciton inside that then runs the button choices:
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
