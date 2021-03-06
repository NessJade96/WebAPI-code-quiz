# WebAPI-code-quiz

# Description

A timed quiz on JavaScript fundamentals that records scores to compare against peers.

# Planning Notes:

make my first page layout with the HTML and CSS layouts etc.
this is the start game button page
when button is pressed it starts the timer count down funciton and shows the first question

1.  create clickevent
2.  function inside click event - this function removes the "start" page and places the html with the first question
    -Example of questions structure. (an array of objects)
    var questions = [
    {
    question: "bleh",
    answer: "string",
    options: ["boolean", "wrong", "adamswrong", "string"],
    },
    {
    question: "bleh",
    answer: "string",
    options: ["boolean", "wrong", "adamswrong", "string"],
    },
    ]
    Write the questions and answers.

when the user selects the answers - a click event to happen with either correct or incorrect answers. (if else statment?)
depending if correct then it is to cycle through the questions by replacing the html.
also if it is correct a little "correct!" will appear below the question.
make a function per question, each question replaces the last question when the one priors click event is activated?
also "incorrect" will appear if the player answers a question wrong.

game over - the time left on the timer gets returned into the players "score".
the player can then choose to save their score and input their initials.
create a text field to help with this
this will save on the local storage and does not get wiped if they refresh the page.
There will be a button after submitting your highscore to 'go back' and take the quiz again. Need to make the correct/incorrect disappear when onto the highscores page.

View Highscores in the top left corner will take you to a page of all the locally stored high scores (showing initials and timer scores).

do the timer last
timer will be a funciton that counts down from 60seconds
when the timer reaches 0 or all questions are answered - the game is over. score then saved locally.
when a question is answered wrong then it deducts time off (10sec?) click event / function to reduce the timer by 10 seconds if answered incorrectly. penilty

# Screenshots:

![Screenshot1](./assets/images-movies/Screenshot%202022-06-06%20150222.jpg)
![Screenshot2](./assets/images-movies/Screenshot%202022-06-06%20150456.jpg)
![Screenshot1](./assets/images-movies/Screenshot%202022-06-06%20150513.jpg)
![Screenshot1](./assets/images-movies/Screenshot%202022-06-06%20150546.jpg)
![Screenshot1](./assets/images-movies/Screenshot%202022-06-06%20151427.jpg)
![Screenshot1](./assets/images-movies/Screenshot%202022-06-06%20151448.jpg)

# Links:

GitHub: https://github.com/NessJade96/WebAPI-code-quiz
Deploy: https://nessjade96.github.io/WebAPI-code-quiz/

# Commit notes:

Commit 1:
First notes on planning - and laid out the Readme file to track notes as I program. Created the HTML, Style, and Script files.

Commit 2:
I turned the demo gif into a movie to help decifer the requirements. Added some more planning notes. Started to add the content in teh HTML for the nav (view links and timer) and the start page. Started to style the start page with CSS.

Commit 3:
Added an event listener onto the start button. Put the questions into an Array, then created a startQuestions function that replaces the innerHTML with the questions and answers in buttons. Only have the first question loaded.

Commit 4:
The function buttonOptions was created to loop through and give the buttons on the screens content. I the created a function to check if the selected buttons answer is correct, this function runs inside an event listener click, and loops through to check all buttons.

Commit 5:
Adding comments to the script.js and style.css files. Added in the "correct" and "incorrect" text at the bottom of the questions. Made it call the startQuestions so if runs through all the questions. This works well, but at this stage now the correct answer isnt showing. Will save and come back to this.

Commit 6:
Debugged the incorrect/correct answer that was showing by moving down the "currentQuestion++;" part of my code to be below the if else statement. Made it so an if/else statments runs when the questions length in reached and it runs the enterHighScores page. Still need to work on the timer.

Commit 7:
Created an event listener to save the score locally when you click "submit".

Commit 8:
Created styling on the highscores page in css. The function showHighScores shows the initials on the leaderboard screen. Created the goBack button to refresh the page and takes you back to the start. Created the clearHighscores button to clear the locally stored data. Added the link viewHighScores to navigate to the leaderboard.

Commit 9:
I added in the "if" statement on the highscores page so it doesn't show the div of the 1. TEST - 20 if you press the clear score button, by storing those values in a variable and to only run that if their values return true. Changed the text styling to text align left for the buttons.

Commit 10:
Timer - created a setInterval timer to count down from 75 seconds inside the function called startQuiz. Added in my recordHighScore function a count = count - 10 in the incorrect if/else statement so the count decreases by 10 for each answer is wrong. Fixed up some spelling errors in the questions array. Added screenshots and final checks for the criteria :)
