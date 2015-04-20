var launchCompanies = ["SpaceX", "ULA", "Orbital Sceinces", "Arianespace"];
var launchVehicles = ["Falcon 9", "Delta IV", "Antares", "Ariane 5"];
var companyAndVehicle = [];

function print(name) {
	console.log(name);
}

function printArray(name) {
	for(var i=0; i<name.length; i++) {
		console.log(name[i]);
	}
}

function addTo(name) {
	companyAndVehicle.push(name);	
}


function spaceSystem(company, callback) {
	for(var i=0; i<launchCompanies.length; i++) {
		if(company === launchCompanies[i]) {
			callback(launchCompanies[i] + ":" + " " + launchVehicles[i]);
		}
	}

}


function logAllCraft() {
	for(var i=0; i<launchCompanies.length; i++) {
		spaceSystem(launchCompanies[i],addTo);
	}
	printArray(companyAndVehicle);
}


spaceSystem("ULA",print);

logAllCraft();