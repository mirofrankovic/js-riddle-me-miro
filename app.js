const submitButton = document.getElementById('btn1')
const loadquestionElement = document.getElementById('loadquestion')

submitButton.addEventListener('click', startgame)




function startgame () {
    console.log('Started now')
    submitButton.classList.add('hide')

}


function countquestion () {

}

function loadquestion () {

}

function attemptquestion () {

}

function score () {

}

function aswers () {

}


/*
var data;

function preload() {
    data = loadJSON ("application.json");
}

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