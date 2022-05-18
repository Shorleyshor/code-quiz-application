//questions array
let questions = [
    {
        numb: 1,
        question: "How can a datatype be declared to be a constant type?",
        answer: "const",
        options:["var", "let", "const", "int"]
    },

      {
        numb: 2,
        question: "Which of these variables is function scoped?",
        answer: "var",
        options: ["var", "let", "const", "int"]
    },

      {
        numb: 3,
        question: "How many threads does the JS engine have?",
        answer: "single",
        options: ["singl", "dual", "multi", "none"]
    },

       {
        numb: 4,
        question: "Which of these array methods remove an element at the end of an array?",
        answer: "pop()",
        options:["push()", "pop()", "shift()", "unshift()"] 
    },

      {
        numb: 5,
        question: "which built-in method returns the calling string value converted to lower-case?",
        answer: "toLowercase()",
        options: ["lowerCase()", "toLowerCase()", "loCase()", "toLower()"]
    },
];

//variable declarations//

const scoreCounter = document.getElementById("score");
var score = 0
var startButton = document.querySelector(".start-button");
var header = document.querySelector(".quiz-header");
let questionEl = document.getElementById("question");
let button1 = document.getElementById("btn0");
let button2 = document.getElementById("btn1");
let button3 = document.getElementById("btn2");
let button4 = document.getElementById("btn3");
let questionNum = 0
let progress = document.getElementById("progress");
let countDown = document.getElementById("count-down");
let timerCount = 60;
let timerObject;
const ul = document.querySelector(".ul");

const ansDiv = document.querySelector(".buttons")
//adding eventListeners to buttons

button1.addEventListener("click", checkAns)
button2.addEventListener("click", checkAns)
button3.addEventListener("click", checkAns)
button4.addEventListener("click", checkAns)
header.style.display = "none"
startButton.addEventListener("click", function(){
    header.style.display = "block" 
    startButton.style.display = "none"
    ul.remove();
    timerObject = setInterval(function (){
        countDown.innerText = "timer" + timerCount
        if(timerCount > 0){
            timerCount --
        }else{
            clearInterval(timerObject)
        }
    },1000)
    questionDisplay()
}) 
// function to render questions on the page
function questionDisplay(){
    questionEl.innerText = questions[questionNum].question
    ansDiv.setAttribute('data-answer', questions[questionNum].answer)
    button1.innerText = questions[questionNum].options[0]
    button1.setAttribute('data-Choice', questions[questionNum].options[0])
    button2.innerText = questions[questionNum].options[1]
    button2.setAttribute('data-Choice', questions[questionNum].options[1])
    button3.innerText = questions[questionNum].options[2]
    button3.setAttribute('data-Choice', questions[questionNum].options[2])
    button4.innerText = questions[questionNum].options[3]
    button4.setAttribute('data-Choice', questions[questionNum].options[3])
    progress.innerText = "progress" + questions[questionNum].numb + " out " + questions.length
    ansDiv.addEventListener("click", checkAns);
}

function checkAns(event){
    const currentTarget = event.currentTarget;
    const target = event.target;
if(target.matches("button")){
    const userClick = target.getAttribute("data-Choice")
    const correctAnswer = currentTarget.getAttribute("data-answer")
    if(userClick === correctAnswer){
        score+=10
        scoreCounter.textContent = score
    }else{
        timerCount -= 5;
    }
    if(questionNum < questions.length - 1){
        questionNum++
        questionDisplay()
    }else{
        clearInterval(timerObject)
    }
}

}
   