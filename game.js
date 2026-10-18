/* 
create function named getComputerChoice
INIT array called choices with rock, paper, scissors
INIT int variable called random
SET variable random to random number between 0 and 2
INIT string variable called choice
SET choice to array[random]
RETURN choice
 */

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    let choice = choices[random];
    return choice;
}

/* 
create function named getHumanChoice
INIT string variable called choice
GET input and assign to choice variable
return choice
 */

function getHumanChoice() {
    let choice = prompt("Enter your choice:");
    return choice;
}


// single round logic
/* 
create function named playRound with parameters humanChoice and computerChoice
SET humanChoice to arg humanChoice in all lowercase
IF humanChoice beats computerChoice THEN
    LOG "You win! humanChoice beats computerChoice."
    INCREMENT humanScore
ELSE
    LOG "You lose! computerChoice beats humanChoice."
    INCREMENT computerScore
ENDIF
*/

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));


let playerScore = 0;
let computerScore = 0;
const playerTxt = document.querySelector(".player-txt");
const computerTxt = document.querySelector(".computer-txt");
playerTxt.textContent = `Player score: ${playerScore}`;
computerTxt.textContent = `Computer score: ${computerScore}`;
const gameOverTxt = document.querySelector(".game-over-txt");

function playRound(humanChoice, computerChoice) {
    const roundTxt = document.querySelector(".round-txt");

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        roundTxt.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        playerScore++;
        playerTxt.textContent = `Player score: ${playerScore}`;

    } else if (humanChoice === computerChoice) {
        roundTxt.textContent = `Draw. You both picked ${humanChoice}.`;
    } else {
        roundTxt.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        computerTxt.textContent = `Computer score: ${computerScore}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            gameOverTxt.textContent = "GAME OVER. The player won!";
        } else if (computerScore === 5) {
            gameOverTxt.textContent = "GAME OVER. The computer won!";
        }
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

}



