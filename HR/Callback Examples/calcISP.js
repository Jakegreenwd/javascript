var engineAndISP = []; //declaring empty arrays 
var engine = []; 
 

function Engine(name,exhastSpeed) { //constructor used to input engine parameters
	this.name = name;
	this.exhastSpeed = exhastSpeed;
	this.isp = 0;
}

function calcISP(engine,callback,options) { //function to calculate ISP. Takes in an engine object, a callback function to determine what to do, and any options on that callback function
	engine.isp = Math.round(engine.exhastSpeed / 9.81); //simple calculation to get ISP of engine and storing the result in the objects isp parameter
	if(!options) {
		callback(engine.name + " Isp: " + engine.isp + " seconds"); //if no option parameter is called (in the case of the print function) omit the options parameter
	}
	else {
		callback(options,engine.name + " Isp: " + engine.isp + " seconds"); //else include and read the options parameter
	}	
}

function print(param) { //print whatever parameter is passed to it out to the console
	console.log(param);
}

function toArray(array,param) { //push whatever parameter is passed to it to the array specified
	array.push(param);
	
}

function printArray(param) { //print the contents of an array line by line
	for(var i=0; i<param.length; i++) {
		print(param[i]);
	}
}

function logArray(engineArray) { //take the contents of a specified array and pass it into the calcISP function, then log the results into the engineAndISP array
	for(var i=0; i<engineArray.length; i++) {
		calcISP(engineArray[i],toArray,engineAndISP);
	}
	printArray(engineAndISP); //print the engineAndISP array to the console
	console.log("\n"); // line break (just to make everything look clean)
}

engine[0] = new Engine("Space Shuttle Main Engine",4400); //passing parameters into the Engine object contructor (name and exhast speed)
engine[1] = new Engine("Solid Rocket Booster",2500); 
engine[2] = new Engine("Ion Thruster",29000); 
engine[3] = new Engine("Nuclear Thermal Rocket",8300); 

var ssme = engine[0]; //setting objects in the engine array equal to variable names for easier access when using print callback function
var srb = engine[1];
var ion = engine[2];
var nuclear = engine[3];

logArray(engine); //calling the logArray function the the console

calcISP(ion,print); //caling the calcISP function with the print callback function to log it to the console