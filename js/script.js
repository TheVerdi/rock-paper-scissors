function computerPlay() {
   let choice = Math.floor(Math.random()*3)
   return choice = hand(choice)
}

function humanPlay() {
    let choice = prompt("Choose rock, paper or scissors: ")
    choice.toLowerCase()
    return choice
}

function hand(num) {
    let draw = '';
    switch(num) {
        case 0:
            draw = "rock";
            break;
        case 1:
            draw = "paper";
            break;
        case 2:
            draw = "scissors";
            break;
        default:
            console.log("Draw something already!")
            break;

    }
    return draw
}

function fight(playerSelection, computerSelection) {
    if(playerSelection === "rock"){
        if(computerSelection === 'rock') {
            console.log('Rock v Rock! Tie!')
        }
        else if(computerSelection === "paper") {
            console.log("Rock vs Paper! You lose!")
        }
        else {
            console.log("Rock vs Scissors! You won!")
        }
    
    }
    else if(playerSelection === "paper"){
        if(computerSelection === 'rock') {
            console.log('Paper v Rock! You won!')
        }
        else if(computerSelection === "paper") {
            console.log("Paper vs Paper! Tie!")
        }
        else {
            console.log("Paper vs Scissors! You lost!")
        }
    }
    else {
        if(computerSelection === 'rock') {
            console.log('Scissors v Rock! You lost!')
        }
        else if(computerSelection === "paper") {
            console.log("Scissors vs Paper! You won!")
        }
        else {
            console.log("Scissors vs Scissors! Tie!")
        }
    }
        
}


function game() {
    var rounds = 0;
    while(rounds < 5) {
        fight(humanPlay(), computerPlay())
        rounds++;
    }
    console.log("You have played 5 rounds!")
}