let playerScore = 0;
let compScore = 0;
let compChoice;
let playerWin = false;
let compWin = false;
let playerChoice;
const compOptions = ["ROCK", "PAPER", "SCISSOR"];

const playerSelectionUI = document.querySelector(".player-selection");
const compSelectionUI = document.querySelector(".comp-selection");
const options = document.querySelectorAll(".option");
const playerScoreUI = document.querySelector(".player-score");
const compScoreUI = document.querySelector(".computer-score");

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
  playerChoice = playerSelectionUI.textContent;

  options.forEach((option) => {
    option.removeEventListener("mouseenter", handleMouseEnter);
    option.removeEventListener("mouseleave", handleMouseLeave);
    option.removeEventListener("click", handleClick);
  });

  compChoice = Math.floor(Math.random() * compOptions.length);
  compChoice = compOptions[compChoice];
  compSelectionUI.textContent = compChoice;
  EvaluateMatch(playerChoice, compChoice);
}

function MakeSelections() {
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

function EvaluateMatch(playerMove, compMove) {
  console.log("evaluating match");
  console.log("comp chose: " + compChoice);
  switch (playerMove) {
    case "ROCK":
      playerChoseRock();
    case "PAPER":
      playerChosePaper();
    case "SCISSORS":
      playerChoseScissors();
  }
}

let playAgain = true;

function displayScores() {
  console.log("STARTING NEW ROUND!");
  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + compScore);
}

function playerChoseRock() {
  console.log("player chose:player" + playerChoice);
  if (compChoice === "PAPER") {
    compScore++;
    console.log("comp wins");
    console.log("Player: " + playerScore + "  Comp: " + compScore);
  } else if (compChoice === "SCISSORS") {
    playerScore++;
    console.log("player wins");
    console.log("Player: " + playerScore + "  Comp: " + compScore);
  } else MakeSelections();
    console.log("Player: " + playerScore + "  Comp: " + compScore);
}

function playerChosePaper() {
  if (compChoice === "SCISSORS") compScore++;
  else if (compChoice === "ROCK") playerScore++;
  else MakeSelections();
}

function playerChoseScissors() {
  if (compChoice === "ROCK") compScore++;
  else if (compChoice === "PAPER") playerScore++;
  else MakeSelections();
}

function decideMatch() {
  if (compWin === true) {
    console.log("You LOSE!");
    compScore++;
    compWin = false;
  } else if ((playerWin = true)) {
    console.log("You WIN!");
    playerScore++;
    playerWin = false;
  }
}

playerScoreUI.textContent = playerScore;
compScoreUI.textContent = compScore;
MakeSelections();
