function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    if (num === 0) {
        console.log("rock");
    } else if (num === 1) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
    
}

function getHumanChoice() {
    let userChoice = prompt("What's your choice? Rock, Paper or Scissors?");
    let userLower = userChoice.toLowerCase();
    console.log(userLower);
}

let humanScore = 0;
let computerScore = 0;
let think = getHumanChoice();
let cpu = getComputerChoice();

function playGame() {

    function playRound(think, cpu) {

        if ((think === "rock" && cpu === "paper") || (think === "paper" && cpu === "scissors") ||
            (think === "scissors" && cpu === "rock")) {
                return(0);
        } else if ((think === "rock" && cpu === "scissors") || (think === "paper" && cpu === "rock") || 
            (think === "scissors" && cpu === "paper")) {
                return(1);
        } else {
            return(2);
        }
    }

    for(let i = 1; i <= 5; i++) {
        if (playRound(0)){
            computerScore += 1;
            console.log("One round for the computer");
        } else if (playRound(1)) {
            humanScore += 1;
            console.log("Computer bytes the dust!");
        } else {
            console.log("It's a tie!");
        }
    }

    if (computerScore > humanScore) {
        console.log("Something is wrong! computer wins!");
    } else {
        console.log("Wow! You won!");
    }
}

playGame(think, cpu);