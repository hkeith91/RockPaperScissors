let playerScore = 0;
let compScore = 0;
let compSelection;
let playerWin = false;
let compWin = false;
let playerSelection;
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
  playerSelection = playerSelectionUI.textContent;

  options.forEach((option) => {
    option.removeEventListener("mouseenter", handleMouseEnter);
    option.removeEventListener("mouseleave", handleMouseLeave);
    option.removeEventListener("click", handleClick);
  });

  compSelection = Math.floor(Math.random() * compOptions.length);
  compSelection = compOptions[compSelection];
  compSelectionUI.textContent = compSelection;
  EvaluateMatch(playerSelection, compSelection);
}

function MakeSelections() {
  console.log("making selections");
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
  switch (playerMove) {
    case "ROCK":
      console.log("Player chose ROCK");
      if (playerMove === compMove) MakeSelections;
      else if (compMove === "SCISSORS") {
        playerScore++;
        console.log("player score = " + playerScore);
        MakeSelections;
      } else if (compMove === "PAPER") {
        compScore++;
        console.log("comp score = " + compScore);
        MakeSelections;
      }
    case "PAPER":
      console.log("Player chose PAPER");
      if (playerMove === compMove) MakeSelections;
      else if (compMove === "ROCK") {
        playerScore++;
        console.log("player score = " + playerScore);
        MakeSelections;
      } else if (compMove === "SCISSORS") {
        compScore++;
        console.log("comp score = " + compScore);
        MakeSelections;
      }
    case "SCISSORS":
      console.log("Player chose SCISSORS");
      if (playerMove === compMove) MakeSelections;
      else if (compMove === "PAPER") {
        playerScore++;
        console.log("player score = " + playerScore);
        MakeSelections;
      } else if (compMove === "ROCK") {
        compScore++;
        console.log("comp score = " + compScore);
        MakeSelections;
      }
  }
}

playerScoreUI.textContent = playerScore;
compScoreUI.textContent = compScore;
MakeSelections();
