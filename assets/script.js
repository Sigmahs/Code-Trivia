const begin = document.getElementById("start-button");
const showScore = document.getElementById("show-score");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const timeRemain = document.getElementById("time-remaining");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
var timer;
var score;
var leaderboard = [];
var isWin = false;

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

function questionShow() {
    let q = questions[index];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

const timerCount = 60;

function checkWin() {
    if (index >= 5) {
      isWin = true;
    }
}

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
  var c;
  c = prompt("Congrats! Enter a name to save your score.");
  if (c) {
    leaderboard = localStorage.getItem("leaders");
    leaderboard.push([score, c]);
    leaderboard.sort(function(a, b){return b[0] - a[0]});
    localStorage.setItem("leaders", leaderboard);
    question.innerHTML = "Leaderboard";
    let table = document.createElement("TABLE");
    for (let row of leaderboard) {
      table.insertRow();
      for (let cell of row) {
        let newCell = table.rows[table.row.length-1].insertCell();
        newCell.textContent = cell;
      }
    }
    document.body.appendChild(table);
  }
}

begin.addEventListener("click", beginQuiz);

function beginQuiz() {
  while (index <= 5) {
    questionShow();  
  }
}

choiceA.addEventListener("click", checkAnswerA);
choiceB.addEventListener("click", checkAnswerB);
choiceC.addEventListener("click", checkAnswerC);
choiceD.addEventListener("click", checkAnswerD);

function checkAnswerA() {
  if (questions[index].correct !== "A") {
    timerCount = timerCount - 15
  }
  index++;
}

function checkAnswerB() {
  if (questions[index].correct !== "B") {
    timerCount = timerCount - 15
  }
  index++;
}

function checkAnswerA() {
  if (questions[index].correct !== "C") {
    timerCount = timerCount - 15
  }
  index++;
}

function checkAnswerA() {
  if (questions[index].correct !== "D") {
    timerCount = timerCount - 15
  }
  index++;
}