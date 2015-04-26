function print(param) { //callback function to print parameter to console
	console.log(param);
}

function calcForce(mass,acceleration,callback) { //calculate force and use callback function on the result
	var force = mass * acceleration;
	callback(force);
}

function calcAccel(mass,force,callback) { //calculate acceleration and use callback function on the result
	var accel = force / mass;
	callback(accel);
}

function calcGravForce(m1,m2,r,callback) { //calculate gravitation force between two bodies and use callback function on the result
	var gravForce = Math.pow(6.673 * 10,-11) * ((m1 * m2) / Math.pow(r,2));
	callback(gravForce);
}

calcForce(10,30,print); //call callForce function with parameters
calcAccel(10,5,print); //call calcAccel function with parameters
calcGravForce(10,50,100,print); //call calcGravForce function with parameters
