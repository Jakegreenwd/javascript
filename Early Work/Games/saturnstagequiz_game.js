console.log("Welcome to the Saturn V Stage Name Quiz. Good luck!");

var answers = ["S-IC","S-II","S-IVB"]; //array with correct answers
var userAnswers = []; // empty array for user answers

for(var i=0; i<3; i++) {
    userAnswers[i] = prompt("What was the number " + (i+1) + " stage on the Saturn V called?"); // for loop prompting user for answers to be stored in userAnswers array
}    

for(var i=0; i<3; i++) { //for loop to check if userAnswer array equal answers array
    if(userAnswers[i].toUpperCase() === answers[i]) { 
        console.log("Question " + (i+1) + " is correct!"); 
    }
    else {
        console.log("Question " + (i+1) + " is incorrect.");
    }    
}        
    