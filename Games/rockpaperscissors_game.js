var checkAnswer = function(userChoice) {    // function to test is user entered valid entry  
    if(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        prompt("Enter a valid option. rock, paper, or scissors");
    }
};
var userChoice = prompt("Do you choose rock, paper or scissors?"); // prompts use for choice
checkAnswer(userChoice);


var computerChoice = Math.random(); // creates "computer" choice using Math.random
if (computerChoice < 0.34) { 
	computerChoice = "rock"; // if random number is less than 0.34 => set computerChoice variable to "rock"
} else if(computerChoice <= 0.67) { 
	computerChoice = "paper"; // if random number is less than 0.67 => set computerChoice variable to "paper"
} else {
	computerChoice = "scissors"; // if random number is between 0.68 and 1 => set computerChoice variable to "scissors"
}
console.log("Jake: " + userChoice); // print out userChoice varible to console
console.log("Computer: " + computerChoice); // print out computerChoice variable to console
      

var compare = function(choice1,choice2) { // function to compare userChoice and computerChoice variables
    if( choice1 === choice2) {
        return "The result is a tie!"; // if both are equal => return "tie" 
    }
    else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "rock wins"; // if choice1 is "rock" and choice2 is "scissors" => return "rock wins" 
        }
        else {
            return "scissors wins"; // otherwise => return "scissors wins"
        }
    }
    else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins" // if choice1 is "paper" and choice2 is "rock" => return "paper wins" 
        }
        else {
            return "rock wins"; // otherwise => return "rock wins" 
        }
    }
    else if(choice1 === "scissors") {
        if(choice2 === "rock") {
            return "rock wins"; // if choice1 is "scissors" and choice2 is "rock" => return "rock wins"
        }
        else {
            return "scissors wins"; // otherwise => return "scissors wins"
        }
    }    
};
compare(userChoice,computerChoice); //call compre function with userChoice as first param (choice1) and computerChoice as second param (choice2)