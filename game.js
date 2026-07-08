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
    let winner = "draw";
    humanChoice = humanChoice.toLowerCase();
    if((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        winner = "human";
    } else if (humanChoice === computerChoice){
        console.log(`Draw. You both picked ${humanChoice}.`);
        winner = "draw";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        winner = "computer";
    }

    return winner;
}



// entire game logic
/* 
    create function playGame() that plays 5 rounds
*/

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let winner = "draw";

    for(let round = 1; round <= 5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        winner = playRound(humanSelection, computerSelection);
        if(winner === "human"){
            humanScore++;
        } else if(winner === "computer"){
            computerScore++;
        }
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    
    return;
}

playGame();