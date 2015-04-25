var launchCompanies = ["SpaceX", "ULA", "Orbital Sceinces", "Arianespace"]; //declaring arrays for launch companies, launch vehicles, and an empty array for later use
var launchVehicles = ["Falcon 9", "Delta IV", "Antares", "Ariane 5"];
var companyAndVehicle = [];

function print(name) { //print whatever parameter is passed into it out to the console
	console.log(name);
}

function printArray(name) { //print the contents of a specifed array to the console line by line
	for(var i=0; i<name.length; i++) {
		console.log(name[i]);
	}
}

function addTo(name) { //push the parameter that is passed into it to the comnpanyAndVehicle array
	companyAndVehicle.push(name);	
}


function spaceSystem(company, callback) { //function that finds the corresponding value in the launchVehicles array of the company parameter that was passed into it
	for(var i=0; i<launchCompanies.length; i++) { //cycles through array 
		if(company === launchCompanies[i]) { //if company parameter matches a value in launchCompanies
			callback(launchCompanies[i] + ":" + " " + launchVehicles[i]); //callback function on the result of combining a value from launchCompanies with corresponding launchVehicles
		}
	}

}


function logAllCraft() { //pass the values from launchCompanies into the spaceSystem function to find corresponding values in launchVehicle
	for(var i=0; i<launchCompanies.length; i++) {
		spaceSystem(launchCompanies[i],addTo); //log results into companyAndVehicle array
	}
	printArray(companyAndVehicle); //print companyAndVehicle array to the console
}


spaceSystem("ULA",print); //call spaceSystem function with the print callback function

logAllCraft(); //call logAllCraft function