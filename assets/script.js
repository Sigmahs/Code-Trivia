const begin = document.getElementById("start-button");
const showScore = document.getElementById("show-score");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const timeRemain = document.getElementById("time-remaining");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const back = document.getElementById("back");
const clear = document.getElementById("clear-leaderboard");
var timer;
var score;
var leaderboard = { "leaderArray": [[55, "Eric"]] };

var isWin = false;
localStorage.setItem("leaders", JSON.stringify(leaderboard));

let questions = [
    {
    question: "What does CSS stand for?",
    choiceA: "Cascading Style Sheet",
    choiceB: "Character Style Selector",
    choiceC: "Connected Style Settings",
    choiceD: "Comparative Sheet Styler",
    correct: "A",
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
    question: "What is the HTML element that refers to Javascript in the carrot brackets?",
    choiceA: "scripts",
    choiceB: "script",
    choiceC: "java",
    choiceD: "javascript",
    correct: "B",
    },
    {
    question: "Which of the following is a comment in javascript?",
    choiceA: "!-- what's up --",
    choiceB: "//My broski,",
    choiceC: "#It's been",
    choiceD: "{Too long",
    correct: "B",
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

function home() {
  wipe();
  init();
}

function wipe() {
  begin.innerHTML = "";
  back.innerHTML = "";
  clear.innerHTML = "";
  showScore.innerHTML = "";
  question.innerHTML = "";
}

function init() {
  begin.innerHTML = "Begin Quiz";
}

let index = 0;

function questionShow() {
    // console.log(index);
    let q = questions[index];
    console.log(q);
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

var timerCount = 60;

function checkWin() {
    if (index === 5) {
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
            // console.log(score);
            winGame(score);
            clearInterval(timer);
          }
        }
        // Tests if time has run out
        if (timerCount <= 0) {
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
    leaderboard = JSON.parse(localStorage.getItem("leaders"));
    leaderboard.leaderArray.push([score, c]);
    // console.log(leaderboard.leaderArray);
    leaderboard.leaderArray.sort(function(a, b){return b[0] - a[0]});
    localStorage.setItem("leaders", JSON.stringify(leaderboard));
    question.innerHTML = "Leaderboard";
    let myTable = document.createElement("table");
    for (let row of leaderboard.leaderArray) {
      // console.log(row);
      myTable.insertRow();
      for (let cell of row) {
        // console.log(cell);
        let newCell = myTable.rows[myTable.rows.length-1].insertCell();
        newCell.textContent = cell;
      }
    }
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";
    showScore.appendChild(myTable);
    timeRemain.innerHTML = "";
    back.innerHTML = "<button>Back</Button>";
    clear.innerHTML = "<button>Clear</Button>";
    
  }
}

function loseGame() {
  question.innerHTML = "You ran out of time!";
  choiceA.innerHTML = "";
  choiceB.innerHTML = "";
  choiceC.innerHTML = "";
  choiceD.innerHTML = "";
  timeRemain.innerHTML = "";
  back.innerHTML = "<button>Home</Button>";
  // clear.innerHTML = "<button>Retry</Button>";
}

begin.addEventListener("click", beginQuiz);

function beginQuiz() {
    begin.innerHTML = "";
    isWin = false;
    index = 0;
    timerCount = 60;
    questionShow(); 
    countdown(); 
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
  checkWin();
  if (index < 5) {
    questionShow()
  }
}

function checkAnswerB() {
  if (questions[index].correct !== "B") {
    timerCount = timerCount - 15
  }
  index++;
  checkWin();
  if (index < 5) {
    questionShow()
  }
}

function checkAnswerC() {
  if (questions[index].correct !== "C") {
    timerCount = timerCount - 15
  }
  index++;
  checkWin();
  if (index < 5) {
    questionShow()
  }
}

function checkAnswerD() {
  if (questions[index].correct !== "D") {
    timerCount = timerCount - 15
  }
  index++;
  checkWin();
  if (index < 5) {
    questionShow()
  }
}

function erase() {
  var leaderboard = { "leaderArray": [[55, "Eric"]] };
  localStorage.setItem("leaders", JSON.stringify(leaderboard));
  showScore.innerHTML = "";
}

init();
back.addEventListener("click", home);
clear.addEventListener("click", erase);