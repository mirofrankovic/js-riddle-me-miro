const startQuiz = document.getElementById('startGame-btn')
const quizContainrElement = document.getElementById('quiz-container')
const questionElement = document.getElementById('startQuestion')

startQuiz.addEventListener('click', startGame)

let questionCounterIndex, currentQuestionIndex     /* the current question in all questions */


function startGame () {
    console.log('Started now')
    startQuiz.classList.add('hide')
    quizContainrElement.classList.remove('hide')
    startQuestion ()
    questionCounterIndex = questions.sort()
    currentQuestionIndex = 0
}


function countQuestion () {

}

function prepareQuestion () {
    prepareQuestionElement.classList.add()
     questions = loadJSON ("application.json");
     showQuestion(questionCounterIndex[currentQuestionIndex])
    
}

function showQuestion(question) {
    questionElement.innerText = question.question
}



function attemptNextQuestion () {

}

function score () {

}

function aswers () {

}



const questions = JSON.parse(application.json);

const data;



$(document).ready(function () {
            $.getJSON('application.json', function (loadQuestion) {
                console.log(loadQuestion);
            });
        });

/*

function preload() {
    data = loadJSON ("application.json");
}
/*
function setup() {
    noCanvas();
    var question = data.questionary[0].question[0];
    createP(question);

}
console.log(data);
/*
fetch("test.json")
  .then(response => response.json())
  .then(json => console.log(json));
*/