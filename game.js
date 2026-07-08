/* 
create function named getComputerChoice
INIT array called choices with rock, paper, scissors
INIT int variable called random
SET variable random to random number between 0 and 2
INIT string variable called choice
SET choice to array[random]
RETURN choice
 */

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
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

function getHumanChoice(){
    let choice = prompt("Enter your choice:");
    return choice;
}

// player score variable
let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice === computerChoice){
        console.log(`Draw. You both picked ${humanChoice}.`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }

    return;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);