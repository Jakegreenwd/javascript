/*
Quick program to calculate Schwartzchild Radius of given objects
more info here: https://en.wikipedia.org/wiki/Schwarzschild_radius
 */

var gravConstant = 6.674 * Math.pow(10,-11); //gravitational constant
var c = 3.00 * Math.pow(10,8); //speed of light (in a vacuum)
var radii = []; //empty array to hold radii values of objects

function massObject(name,mass) { //object constructor for bodies passing in name and mass of object
    this.name = name;
    this.mass = mass;
}

function print(param) { //print parameter passed into it out to console
    console.log(param);
}

function toArray(param) { //push parameter into radii array
    radii.push(param);
}

function printArray(array) { //iterate through array and print out each value
    for(var i = 0; i<array.length; i++) {
        print(array[i]);
    }
}

/*
Schwartchild radius formula Rs = (2GM) / c^2
G = gravitational constant
M = mass of object
c = speed of light (in a vacuum)
 */

function schRadius(body,callback) { //find Schwartzchild radius of object using formula and using toExponential with 3 sig figs for sci notation
    callback(body.name + ": " + ((2 * gravConstant * body.mass) / Math.pow(c,2)).toExponential(3) + " km");
}

var cosmicBodies = []; //empty array to hold objects created with object constructor
cosmicBodies[0] = new massObject("Sun",1.9891 * Math.pow(10,30)); //values for Sun (name and mass)
cosmicBodies[1] = new massObject("Earth",5.97219 * Math.pow(10,24)); //values for Earth (name and mass)
cosmicBodies[2] = new massObject("Saturn",5.68 * Math.pow(10,26)); //values for Saturn (name and mass)

for(var i=0; i<cosmicBodies.length; i++) { //for loop using schRadius and toArray callback function to calculate radius and push to radii array
    schRadius(cosmicBodies[i],toArray);
}

printArray(radii); //print array to console using printArray function