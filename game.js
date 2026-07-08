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
    let choices = ["rock","paper","scissors"];
    let random = Math.floor(Math.random() * 3);
    let choice = choices[random];
    return choice;
}

getComputerChoice();

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

getHumanChoice();