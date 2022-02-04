let playerScore = 0;
let compScore = 0;
let playerChoice;
let compChoice;
let playerWin = false;
let compWin = false;

const playerSelection = document.querySelector(".player-selection");
const options = document.querySelectorAll(".option");
let selectionMade = false;

options.forEach((option) => {
  option.addEventListener("mouseenter", function handleMouseEnter(e) {
    playerSelection.innerHTML = option.innerHTML;  //show name in selection
    option.classList.add("hovering")               //highlight hovered box
    console.log(e.target);
  });
  option.addEventListener("mouseleave", function handleMouseLeave(e) {
    playerSelection.innerHTML = "";                //empty box if !hovering
    option.classList.remove("hovering")            
    console.log(e.target);
  });
  option.addEventListener("click", (e) => {
    option.classList.add("selected");
    option.removeEventListener("click")
    playerSelection.removeEventListener("mouseleave", handleMouseLeave);
    playerSelection.removeEventListener("mouseenter", handleMouseEnter);
    console.log("clicked " + e.target);
  });
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

// rockPaperScissors();
