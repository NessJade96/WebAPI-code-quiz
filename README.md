# WebAPI-code-quiz

# Description

A timed quiz on JavaScript fundamentals that records scores to compare against peers.

# Planning Notes:

make my first page layout with the HTML and CSS layouts etc.
this is the start game button page
when button is pressed it starts the timer count down funciton

Write the questions and answers.

when the user selects the answers - a click event to happen with either correct or incorrect answers. (if else statment?)
depending if correct then it is to cycle through the questions by replacing the html.
also if it is correct a little "correct!" will appear below the question.
maybe make a function per question, each question replaces the last question when the one priors click event is activated?
click event / function to reduce the timer by 10 seconds if answered incorrectly. penilty
also "incorrect" will appear if the player answers a question wrong.

do the timer last
timer will be a funciton that counts down from 60seconds
when the timer reaches 0 or all questions are answered - the game is over. score then saved locally.
when a question is answered wrong then it deducts time off (10sec?)

game over - the time left on the timer gets returned into the players "score".
the player can then choose to save their score and input their initials.
create a text field to help with this
this will save on the local storage and does not get wiped if they refresh the page.
There will be a button after submitting your highscore to 'go back' and take the quiz again.

View Highscores in the top left corner will take you to a page of all the locally stored high scores (showing initials and timer scores).

# Screenshots:

# Links:

GitHub:
Deploy:

# Commit notes:

Commit 1: First notes on planning - and layed out the Readme file to track notes as I program. Created the HTML, Style, and Script files.
