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

// I NEED TO CREATE A VARIABLE THAT STORE THE REMAINING TIMER TO PUT INTO THE RECORDhIGHsCCORE FUNCTION//

// This event function is called when there are no more questions remaining - this will stop the timer and turn that into the score. The player can then store their high score:
function recordHighScore() {
	var timeHighScore = 20;
	startPage.innerHTML =
		"<h1 class=allDone> All Done! <p class=allDone id=finalScore> Your final score is " +
		timeHighScore +
		"<p id=enterInitials>Enter initials:<input type='text' name='initials' id='initials'></input><button type=button ><p>";
}

// signUpButton.addEventListener("click", function(event) {
//     event.preventDefault();

//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;

//     if (email === "") {
//       displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//       displayMessage("error", "Password cannot be blank");
//     } else {
//       displayMessage("success", "Registered successfully");

//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);
//       renderLastRegistered();
//     }
//   });

// This function checks the elements ID of the button chosen, and will return correct or incorrect. Then restarts the startQuestions function.
function checkAnswer(event) {
	var clickedButtonId = event.target.id;
	if (clickedButtonId === questions[currentQuestion].answer) {
		showAnswer.innerHTML = " <hr> Correct!";
	} else {
		showAnswer.innerHTML = " <hr> Incorrect!";
	}

	if (currentQuestion < questions.length - 1) {
		currentQuestion++;
		startQuestions();
	} else {
		var selectAllButtons = document.querySelectorAll(
			"#answersContainer button"
		);
		for (var i = 0; i < selectAllButtons.length; i++) {
			selectAllButtons[i].addEventListener("click", recordHighScore);
		}
	}
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
