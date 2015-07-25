var numbers = []; //declare empty array

function range(start,end,step) { //function to log range of numbers to declared array
	if(!step) { // if no step parameter is defined, set step to 1
		step = 1;
	}
	
	if(start > end) { //if counting down
		for(var i=start; i>=end; i-=step) {
			numbers.push(i); //push range of numbers to array
		}
	}
	else { //if counting up
		for(var i=start; i<=end; i+=step) {
			numbers.push(i); //push range of numbers to array
		}
	}
}
 function sum(array) { //function to add sum of the range of numbers in specified array
	var sum = 0;
	for(var i=0; i<array.length; i++) { //loop through contents of array
		sum = sum + array[i]; //set sum equal to itself plus every element of array
	}
	return sum; //return sum
}

range(0,50,5); //call range function starting from 50 and counting down to 0 by 5
console.log(numbers);

function binarySearch(number) {
	var minNum,maxNum;
	minNum = 
	for(var i=0; i>numbers.length; i++) {
		if(number === 25) {
			console.log(numbers[i]);
		}
		else if)
		
	}
}

binarySearch(25);










