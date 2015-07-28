/**
 * Created by jake on 7/27/15.
 */
//deltaV = Isp * 9.81 * ln(Mf/Md)
var isp = require('./Dependant Files/IspFunctions.js'); //require IspFunctions.js file which contains required functions
var saturnV = [];

function stage(name,engine,massFull,massDry) { //object constructor for stages that calculates delta v of each stage as well.
    this.name = name;
    this.engine = engine.isp;
    this.massFull = massFull;
    this.massDry = massDry;
    this.deltaV = Math.round(engine.isp * 9.81 * Math.log((massFull / massDry)));
}

function stageInfo(stage,callback) { //Format the stage info into a readable output
    callback("Stage name: " + stage.name + " - " + "Full mass: " + stage.massFull + "kg." + " - " + "Dry mass: " + stage.massDry + "kg." + " - " + "Delta-V: " + stage.deltaV + "m/s");

}

function toArray(param) { //push parameter into saturnV array
    saturnV.push(param);
}

function printArray(param) { //print the contents of an array line by line
    for(var i=0; i<param.length; i++) {
        isp.print(param[i]);
    }
}

var f1 = new isp.engine("Rocketdyne F1",2600); //create new engines using engine constructor from IspFunctions.js
var j2 = new isp.engine("Rocketdyne J2",4125);

var stages = [];
stages[0] = new stage("Saturn V SI",f1,2900000,731000); //create new stages using stage constructor
stages[1] = new stage('Saturn V SII',j2,600000,156000);
stages[2] = new stage('Saturn V SIVB',j2,120800,10000);

for(var i=0; i<stages.length; i++) { //loop through stages array and log contents to saturnV array
    stageInfo(stages[i],toArray);
}

printArray(saturnV); //print array to console



