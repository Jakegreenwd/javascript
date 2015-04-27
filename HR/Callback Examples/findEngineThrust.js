var totalShuttleThrust = 6500000;
var engine = [];
var engineData = [];

function engineParams(name,thrustPercent,number) { //object contructor to input engine data
	this.name = name;
	this.thrustPercent = thrustPercent;
	this.number = number;
	this.thrust = 0;
}

function print(param) { //log parameter passsed to it out to the console
	console.log(param);
}	
	
function findThrust(engine,callback) {
	engine.thrust = engine.thrustPercent * totalShuttleThrust; //calculate engine thrust
	callback(engine.name + "\n" + "Number of: " + engine.number + "\n" + "Percent of total lift-off thrust: "+ engine.thrustPercent * 100 + "%" + "\n" + "Total thrust provided: " + engine.thrust + " lbf." + "\n" + "Total Space Shuttle thrust at lift-off: " + totalShuttleThrust + " lbf." + "\n"); //return result to callback function
	
}

var ssme = new engineParams("Space Shuttle Main Engine",0.17,3); //create new object using engineParams object constructor
var srb = new engineParams("Solid Rocket Booster",0.83,2); //create new object using engineParams object constructor

findThrust(ssme,print); // call findThrust function with ssme properties and use print callback function
findThrust(srb,print); //call findThrust function with srb properties and use print callback function