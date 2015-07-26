/**
 * Created by jake on 7/25/15.
 */
var data = require('./Dependant Files/launchVehicles.json'); //require JSON file with data
var resultVehicles = []; //initialize empty array

function print(param){ //print parameter passed into function to console
    console.log(param);
}

function printArray(array) { //iterate through array and print out each value
    if(array.length > 0) { //if array is not empty print array to console
        for (var i = 0; i < array.length; i++) {
            print(array[i]);
        }
    }
    else { //if array is empty print message to console
        print("No launch vehicles fit specified parameters!");
    }
}

function toArray(param) { //push parameters to resultVehicles array with formatting
    resultVehicles.push("Launch Vehicle: " + param.name + " - " + "To GTO: " + param.toGTO + "Kg" + " - " + "Launch Cost: " + "$" + param.launchCost + " Million");
}

function idealRocket(mass,costMax,callback) { //taking in mass of payload to be lifted, maximum cost (in $million), and callback function
    for(var i=0; i<data.launchVehicles.length; i++) { //iterate through length of JSON data file
        if(mass <= data.launchVehicles[i].toGTO && costMax >= data.launchVehicles[i].launchCost) { //if launch vehicle payload capacity is equal to or greater than the mass of payload and cost is less than or equal to maximum cost
            callback(data.launchVehicles[i]); //perform a callback function on the entries that fit the parameters
        }
    }
}

idealRocket(8000,250,toArray); //calling idealRocket function with 8000kg payload, maximum cost of $200 million, and using toArray as a callback function to log entries that fit parameters to resultVehicles array
printArray(resultVehicles); //calling printArray function to print entries in resultVehicles array 