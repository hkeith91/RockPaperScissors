let playerScore = 0;
let compScore = 0;
let playerChoice;
let compChoice;
let playerWin = false;
let compWin = false;

const playerSelection = document.querySelector(".player-selection");
const options = document.querySelectorAll(".option");
selectionMade = false;

function handleMouseEnter() {
  this.classList.add("hovering");
  playerSelection.textContent = this.textContent;
}

function handleMouseLeave(){
  this.classList.remove("hovering");
  playerSelection.textContent = "";
}

function handleClick(){
  this.classList.add("selected");
  options.forEach(option => {
    option.removeEventListener("mouseenter", handleMouseEnter);
    option.removeEventListener("mouseleave", handleMouseLeave);
    option.removeEventListener("click", handleClick);
  });
  selectionMade = true;
}

options.forEach((option) => {
    option.addEventListener("mouseenter", handleMouseEnter);
    option.addEventListener("mouseleave", handleMouseLeave);
    option.addEventListener("click", handleClick);
  });

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

function playerChosePaper() {
  if (compChoice === "SCISSORS") compWin = true;
  else if (compChoice === "ROCK") playerWin = true;
  else decideMatch();
}

function playerChoseScissors() {
  if (compChoice === "ROCK") compWin = true;
  else if (compChoice === "PAPER") playerWins();
  else decideMatch();
}

function playerChoseRock() {
  if (compChoice === "PAPER") compWin = true;
  else if (compChoice === "SCISSORS") playerWin = true;
  else decideMatch();
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
