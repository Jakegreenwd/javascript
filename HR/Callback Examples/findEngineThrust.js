var totalShuttleThrust = 6500000;

function engineParams(name,thrustPercent,number) { //object contructor to input engine data
	this.name = name;
	this.thrustPercent = thrustPercent;
	this.number = number;
	this.thrust = 0;
}

function print(param) { //log parameter passsed to it out to the console
	console.log(param);
}

function findThrust(engine) {
	engine.thrust = engine.thrustPercent * totalShuttleThrust; //calculate engine thrust
	print(engine.name + "\n" + "Number of: " + engine.number + "\n" + "Percent of total lift-off thrust: "+ engine.thrustPercent * 100 + "%" + "\n" + "Total thrust provided: " + engine.thrust + " lbf." + "\n" + "Total Space Shuttle thrust at lift-off: " + totalShuttleThrust + " lbf." + "\n"); //return data into print function
	
}

var ssme = new engineParams("Space Shuttle Main Engine",0.17,3); //create new object using engineParams object constructor
var srb = new engineParams("Solid Rocket Booster",0.83,2); //create new object using engineParams object constructor

findThrust(ssme); //call findThrust function on ssme variable
findThrust(srb); //call findThrust function on srb variable

