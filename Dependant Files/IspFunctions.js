
module.exports.engine = function(name,exhastSpeed) { //constructor used to input engine parameters
	this.name = name;
	this.exhastSpeed = exhastSpeed;
	this.isp = calcISP(exhastSpeed);
}

function calcISP(exhastSpeed) { //function to calculate ISP. Takes in an engine object, a callback function to determine what to do, and any options on that callback function
	return Math.round(exhastSpeed / 9.81); //simple calculation to get ISP of engine and storing the result in the objects isp parameter

}

module.exports.print = function(param) { //print whatever parameter is passed to it out to the console
	console.log(param);
}

module.exports.toArray = function(param) { //push whatever parameter is passed to it to the array specified
	saturnV.push(param);
	
}


