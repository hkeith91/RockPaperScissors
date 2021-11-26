let playerScore = 0;
let compScore = 0;
let playerChoice;
let compChoice;

const playerOptions = {
  r: "ROCK",
  p: "PAPER",
  s: "SCISSORS",
};
const compOptions = ["r", "p", "s"];

let playAgain = true;

function displayScores() {
  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + compScore);
}

function playerChosePaper() {
  if (compChoice === "SCISSORS") playerLoses();
  else if (compChoice === "ROCK") playerWins();
  else draw();
}

function playerChoseScissors() {
  if (compChoice === "ROCK") playerLoses();
  else if (compChoice === "PAPER") playerWins();
  else draw();
}

function playerChoseRock() {
  if (compChoice === "PAPER") playerLoses();
  else if (compChoice === "SCISSORS") playerWins();
  else draw();
}

function playerLoses() {
  console.log("You LOSE!");
  compScore++;
  displayScores();
  askToPlayAgain();
}

function playerWins() {
  console.log("You WIN!");
  playerScore++;
  displayScores();
  askToPlayAgain();
}

function draw() {
  console.log("It's a DRAW!");
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
    console.log("//DEBUG Player chose: " + playerChoice);

    compChoice = Math.floor(Math.random() * compOptions.length);
    compChoice = playerOptions[compOptions[compChoice]];
    console.log("//DEBUG compChoice converted: " + compChoice);

    switch (playerChoice) {
      case "ROCK":
        playerChoseRock();
      case "PAPER":
        playerChosePaper();
      case "SCISSORS":
        playerChoseScissors();
    }
    askToPlayAgain();
  }
  console.log("Thanks for playing!");
}

//ask to play again

rockPaperScissors();
