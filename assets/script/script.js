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
var questionEl = document.querySelector(".questionTitle");
var choiceEl = document.querySelector(".answerButtons");
var alertUserEl = document.querySelector(".alertUser");
var resultEl = document.querySelector(".result")
var correctAnswerEl = document.querySelector(".correctAnswer");
var viewHighscoreEl = document.querySelector(".viewHighscore");
var userInitialEl = document.querySelector(".userInitial");
var submitBtnEl = document.querySelector(".submitBtn");
var savedHighScoreEl = document.querySelector(".savedHighScore");
var highscoresEl = document.querySelector("#highscores");
var clearHighscoresEl = document.querySelector("#clear");
var goBackEl = document.querySelector("#goBack");


var questionIndex = 0;
var timeLeft = 60;
var correctAnsCount = 0;
var userInitial = "";
var timeInterval;

startQuizEl.addEventListener("click", function() {
    startQuizEl.style.display = "none";
    viewHighscoreEl.style.display = "none";

    question();
    time();

});


function time() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            alertUserEl.textContent = "Quiz Ended";
            timerEl.textContent = "Time is stopped";
            questionEl.style.display = "none";
            resultEl.style.display = "block";
        }
    }, 1000);
}

function question() {

    questionEl.style.display = "block"
    var currentQuestion = questionArray[questionIndex]
    var titleEl = document.querySelector("#questionTitle");
    titleEl.textContent = currentQuestion.showQuestion;

    choiceEl.innerHTML = "";

    currentQuestion.answers.forEach(function(answer, index) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("class", "choice");
        answerBtn.setAttribute("value", answer);
        answerBtn.textContent = index + 1 + ". " + answer;
        choiceEl.appendChild(answerBtn);

        answerBtn.addEventListener("click", btnClick);
    });


}

function btnClick() {
    if (this.value !== questionArray[questionIndex].correctAnswer) {
        timeLeft -= 10;
        alertUserEl.textContent = "Wrong!"
    } else {
        alertUserEl.textContent = "Correct!"
        countCorrectAns()
    }
    questionIndex++;

    if (questionIndex === questionArray.length) {
        timeLeft = 0;
        alertUserEl.textContent = "Quiz Ended"
        questionEl.style.display = "none"
        resultEl.style.display = "block"

    } else {
        question();
    }
}

function countCorrectAns() {

    correctAnsCount++
    correctAnswerEl.textContent = "You answered " + correctAnsCount + " out of " + questionArray.length + " correctly!";

}

function highscore(e) {
    e.preventDefault()

    var storeHighscore = localStorage.getItem("savedHighScore")
    var scoreCountArray;

    if (storeHighscore === null) {
        scoreCountArray = []
    } else {
        scoreCountArray = JSON.parse(storeHighscore)
    }

    correctAnswerEl.textContent = correctAnsCount

    var saveHighscore = {
        initial: userInitialEl.value.toUpperCase(),
        saveCorrectAns: correctAnswerEl.textContent
    }

    scoreCountArray.push(saveHighscore);

    var scoreCountString = JSON.stringify(scoreCountArray);
    localStorage.setItem("highscore", scoreCountString);

    viewHighscore()
}
var i = 0;

function viewHighscore() {
    var storedHighscore = localStorage.getItem("highscore");

    if (storedHighscore === null) {
        return;
    }

    var scoreCountObject = JSON.parse(storedHighscore);
    for (; i < scoreCountObject.length; i++) {
        var newHighscore = document.createElement("h4");
        newHighscore.innerHTML = scoreCountObject[i].initial + " - " + scoreCountObject[i].saveCorrectAns;
        highscoresEl.appendChild(newHighscore)
    }
}

clearHighscoresEl.addEventListener("click", function() {

    localStorage.removeItem("highscores")
    highscoresEl.textContent = ""

});

submitBtnEl.addEventListener("click", function(e) {
    highscore(e)
    savedHighScoreEl.style.display = "block"
    resultEl.style.display = "none"
    viewHighscoreEl.style.display = "block"
})
viewHighscoreEl.addEventListener("click", function(e) {
    viewHighscore(e)
    savedHighScoreEl.style.display = "block"

})
goBackEl.addEventListener("click", function() {
    savedHighScoreEl.style.display = "none"
    startQuizEl.style.display = "block"
    location.reload();

})

var questionArray = [{
        showQuestion: "HTML stands for?",
        answers: ["Hypertext Markup Language", "Hyper Markdown Language", "Hide Markup Language", "None of the above"],
        correctAnswer: "Hypertext Markup Language"
    },
    {
        showQuestion: "CSS stands for?",
        answers: ["Style Sheet Cascading", "Cascading Style Sheets", "Cascading Small Sheets", "None of the above"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        showQuestion: "DOM stands for?",
        answers: ["Dissolved Organic Matter", "Cascading Style Sheets", "Document Object Model", "Division of Minerals"],
        correctAnswer: "Document Object Model"
    }, {
        showQuestion: "The condition in an if/els statement is enclosed with______?",
        answers: ["Quotes", "Curly bracketes", "parentheses", "Square brackets"],
        correctAnswer: "Curly bracketes"
    }
];