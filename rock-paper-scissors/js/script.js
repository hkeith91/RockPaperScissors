let playerScore = 0;
let compScore = 0;
let compChoice;
let playerWin = false;
let compWin = false;
let playerChoice;

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
  // console.log("player selection: " + playerSelectionUI.textContent);

  options.forEach((option) => {
    option.removeEventListener("mouseenter", handleMouseEnter);
    option.removeEventListener("mouseleave", handleMouseLeave);
    option.removeEventListener("click", handleClick);
  });

  compChoice = Math.floor(Math.random() * compOptions.length);
  compChoice = playerOptions[compOptions[compChoice]];
  compSelectionUI.textContent = compChoice;
  // console.log("Computer chose: " + compChoice);
  EvaluateMatch(playerChoice, compChoice);
}

function MakeSelections() {
  options.forEach((option) => {
    option.addEventListener("mouseenter", handleMouseEnter);
    option.addEventListener("mouseleave", handleMouseLeave);
    option.addEventListener("click", handleClick);
  });
}

function EvaluateMatch(playerMove, compMove){
  console.log("evaluating match")
  console.log("player chose:player" + playerMove)
  console.log("comp chose")
  switch (playerMove) {
    case "ROCK":
      playerChoseRock();
    case "PAPER":
      playerChosePaper();
    case "SCISSORS":
      playerChoseScissors();
  }
};

playerScoreUI.textContent = playerScore;
compScoreUI.textContent = compScore; 
MakeSelections();

//old logic
const playerOptions = {
  r: "ROCK",
  p: "PAPER",
  s: "SCISSORS",
};
const compOptions = ["r", "p", "s"];

let playAgain = true;

function displayScores() {
  console.log("STARTING NEW ROUND!");
  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + compScore);
}

function playerChoseRock() {
  if (compChoice === "PAPER") compScore++;
  else if (compChoice === "SCISSORS") playerScore++;
  else MakeSelections;
}

function playerChosePaper() {
  if (compChoice === "SCISSORS") compScore++;
  else if (compChoice === "ROCK") playerScore++;
  else MakeSelections;
}

function playerChoseScissors() {
  if (compChoice === "ROCK") compScore++;
  else if (compChoice === "PAPER") playerScore++;
  else MakeSelections;
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

function askToPlayAgain() {
  let answer = prompt("Play again?  y/n: ");
  if (answer === "n") playAgain = false;
  else return;
}

function rockPaperScissors() {
  displayScores();

  while (playAgain) {
    console.log(
      `Your choices are: ${playerOptions["r"]}, ${playerOptions["p"]}, or ${playerOptions["s"]}`
    );

    playerChoice = prompt("r = ROCK\n p = PAPER\n s = SCISSORS\n"); //todo input validation
    playerChoice = playerOptions[playerChoice];
    console.log("Player chose: " + playerChoice);

    compChoice = Math.floor(Math.random() * compOptions.length);
    compChoice = playerOptions[compOptions[compChoice]];
    console.log("Computer chose: " + compChoice);

    switch (playerChoice) {
      case "ROCK":
        playerChoseRock();
      case "PAPER":
        playerChosePaper();
      case "SCISSORS":
        playerChoseScissors();
    }
    displayScores();
    askToPlayAgain();
  }
  console.log("Thanks for playing!");
}
//  rockPaperScissors();
