let playerScore = 0;
let compScore = 0;
let compSelection;
let playerWin = false;
let compWin = false;
let playerSelection;
let newRound = true;
const compOptions = ["ROCK", "PAPER", "SCISSOR"];

const playerSelectionUI = document.querySelector(".player-selection");
const compSelectionUI = document.querySelector(".comp-selection");
const options = document.querySelectorAll(".option");
const playerScoreUI = document.querySelector(".player-score");
const compScoreUI = document.querySelector(".computer-score");
const prompt = document.querySelector("#prompt");

function handleMouseEnter() {
  this.classList.add("hovering");
  playerSelectionUI.textContent = this.textContent;
}

function handleMouseLeave() {
  this.classList.remove("hovering");
  playerSelectionUI.textContent = "";
}

function handleClick() {
  this.classList.add("selected");
  playerSelection = playerSelectionUI.textContent;

  options.forEach((option) => {
    option.removeEventListener("mouseenter", handleMouseEnter);
    option.removeEventListener("mouseleave", handleMouseLeave);
    option.removeEventListener("click", handleClick);
  });

  function nextRound(){
    newRound = false;
    window.addEventListener("keypdown")
  }

  //decide computer move
  // compSelection = Math.floor(Math.random() * compOptions.length);
  // compSelection = compOptions[compSelection];
   compSelection = compOptions[0]; //entering manually for testing
   compSelectionUI.textContent = compSelection;

  EvaluateMatch(playerSelection, compSelection);
}

function MakeSelections() {
  console.log("making selections");
  prompt.textContent = "Please make your selections!";
  options.forEach((option) => {
    if (option.classList.contains("selected"))
      option.classList.remove("selected");
  });
  options.forEach((option) => {
    option.addEventListener("mouseenter", handleMouseEnter);
    option.addEventListener("mouseleave", handleMouseLeave);
    option.addEventListener("click", handleClick);
  });
}

function matchDraw() {
  console.log("draw!")
  prompt.textContent = "Draw! \n Press 'ENTER' to play again!";
  
}

function EvaluateMatch(playerMove, compMove) {
  console.log("evaluating match");
  switch (playerMove) {
    case "ROCK":
      console.log("Player chose ROCK");
      switch (compMove) {
        case "ROCK":
          console.log("before function call")
          matchDraw();
          console.log("after function call")
          break;
        case "PAPER":
          prompt.textContent = "Computer wins! \n Press 'ENTER' to play again!";
          break;
        case "SCISSORS":
          prompt.textContent = "You win! \n Press 'ENTER' to play again!";
          break;
      }
      break;
    default:
      prompt.textContent("RELOAD");
  }
}

playerScoreUI.textContent = playerScore;
compScoreUI.textContent = compScore;
MakeSelections();
