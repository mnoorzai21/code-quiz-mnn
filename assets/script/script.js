// building a code quiz
// declare variables with querySlector
// declare var for array list of quesitons
// addEventListener click
// 1. needs a start button
// click button
// 2. timer starts
// funciton to start counting down from 60 sec
// 3. presents the question 
// 4. four anssers appear
// 5. choose the answer
// 6. if the answer is wrong subtruct time by 10 sec
// 7. another question appears
// 8. when all questions answered or time hits 0 it stops
// 9. then the game is over
// 10. then aves initials and scores


var startQuizEl = document.querySelector(".start");
var timerEl = document.querySelector(".timer");
var questionEl = document.querySelector(".question");
var choiceEl = document.querySelector(".answerButtons");
var alertUserEl = document.querySelector(".alertUser");
var resultEl = document.querySelector(".result")
var correctAnswerEl = document.querySelector(".correctAnswer");
var viewHighscoreEl = document.querySelector(".viewHighscore");
var userInitialEl = document.querySelector(".userInitial");
var submitBtnEl = document.querySelector(".submitBtn");
var savedHighScoreEl = document.querySelector(".savedHighScore");
var highscoreDetailEl = document.querySelector(".highscoreDetail");
var clearHighscoresEl = document.querySelector(".clearHighscores");
var goBackEl = document.querySelector(".goBack");


var questionIndex = 0;
var timeLeft = 5;
var correctAnserCount = 0;
var userInitial = "";
var timeInterval;



startQuizEl.addEventListener("click", function() {
    startQuizEl.style.display = "none";
    viewHighscoreEl.style.display = "none";


    time();

});

function time() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            alertUserEl.textContent = "Quiz Ended"
            timerEl.textContent = "Time is stopped"
            questionEl.style.display = "none"
            resultEl.style.display = "block"
        }
    }, 1000);
}



// var questionArray = [{
//         showQuestion: "HTML stands for?",
//         answers: ["Hypertext Markup Language", "Hyper Markdown Language", "Hide Markup Language", "None of the above"],
//         correctAnswer: "Hypertext Markup Language"
//     },
//     {
//         showQuestion: "CSS stands for?",
//         answers: ["Style Sheet Cascading", "Cascading Style Sheets", "Cascading Small Sheets", "None of the above"],
//         correctAnswer: "Cascading Style Sheets"
//     },
//     {
//         showQuestion: "DOM stands for?",
//         answers: ["Dissolved Organic Matter", "Cascading Style Sheets", "Document Object Model", "Division of Minerals"],
//         correctAnswer: "Document Object Model"
//     }, {
//         showQuestion: "The condition in an if/els statement is enclosed with______?",
//         answers: ["Quotes", "Curly bracketes", "parentheses", "Square brackets"]
//     }

// ]