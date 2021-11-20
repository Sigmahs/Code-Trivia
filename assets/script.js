const begin = document.getElementById("start-button");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const timeRemain = document.getElementById("time-remaining");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
var timer;
var timerCount;
var score;

let questions = [
    {
    question: "What does CSS stand for?",
    choiceA: "Cascading Style Sheet",
    choiceB: "Character Style Selecte=or",
    choiceC: "Connected Style Settings",
    choiceD: "Comparative Sheet Styler",
    correct: "A",
    },
    {
    question: "What is the HTML element that refers to Javascript?",
    choiceA: "<scripts>",
    choiceB: "<script>",
    choiceC: "<java>",
    choiceD: "<javascript>",
    correct: "B",
    },
    {
    question: "Which of the following is a valid while loop?",
    choiceA: "while i is greater than x,",
    choiceB: "while (i > x; x++;)",
    choiceC: "while (i > x)",
    choiceD: "while i > x",
    correct: "C",
    },
    {
    question: "Which of the following is a comment in javascript?",
    choiceA: "<!-- what's up -->",
    choiceB: "//My broski,",
    choiceC: "#It's been",
    choiceD: "{Too long",
    correct: "B"
    },
    {
    question: "Which of these refers to a mouse click?",
    choiceA: "onclick",
    choiceB: "whileclick",
    choiceC: "onmouseclick",
    choiceD: "whilemouseclick",
    correct: "A",
    },
]

let index = 0;

function question() {
    let q = questions[index];
    q.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

const totalTime = 60;

function countdown() { //taken from activity
    timer = setInterval(function() {
        timerCount--;
        timeRemain.innerHTML = timerCount;
        if (timerCount >= 0) {
          // Tests if win condition is met
          if (isWin && timerCount > 0) {
            // Clears interval and stops timer
            score = timerCount;
            winGame(score);
            clearInterval(timer);
          }
        }
        // Tests if time has run out
        if (timerCount === 0) {
          // Clears interval
          clearInterval(timer);
          loseGame();
        }
      }, 1000);
    }
    
function winGame(score) {
    localStorage.setItem()
}

