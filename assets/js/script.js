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

function startQuestions() {
	startPage.innerHTML =
		"<h1 id=askingQuestion>" +
		questions[0].question +
		"</h1><div id=answersContainer><button id=buttonOne class=questionButtons>" +
		questions[0].options[0] +
		"</button><button id=buttonTwo class=questionButtons>" +
		questions[0].options[1] +
		"</button><button id=buttonThree class=questionButtons>" +
		questions[0].options[2] +
		"</button><button id=buttonFour class=questionButtons>" +
		questions[0].options[3] +
		"</button></div>";
}
