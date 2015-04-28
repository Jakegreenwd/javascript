//Program to calculate IIFYM macros
//Should take in sex, height, weight, age, and if bulking or cutting and return calories and a break down of macros

//How to calcute BMR: 
//Male: 65 + (6.2 x weight in pounds) + (12.7 x height in inches) – (6.8 x age in years)
//Female: 655 + (4.3 x weight in pounds) + (4.3 x height in inches) – (4.7 x age in years)
var male = "male"; //declaring varibles as strings for later use
var female = "female";
var cut = "cut";
var bulk = "bulk";

function print(param) { //callback function to print parameter to console
	console.log(param);
}

function Person(sex,height,weight,age) { //object contructor to hold person parameters
	this.sex = sex;
	this.height = height;
	this.weight = weight;
	this.age = age;
	this.bmr = 0;
}

function calcBMR(person) { //function to caculat BMR based on person's sex
	if(person.sex === "male") {
		person.bmr = Math.round(65 + (6.2 * person.weight) + (12.7 * person.height) - (6.8 * person.age)); //sets result equal to name.bmr parameter
	}
	else if(person.sex === "female") {
		person.bmr = Math.round(655 + (4.3 * person.weight) + (4.3 * person.height) - (4.7 * person.age)); //sets result equal to name.bmr parameter
	}
}

function macroBreakdown(name,dietType,callback) { //function to determine macro nutriant breakdown taking in name,what type of diet, and callback function to perforn on the result
	calcBMR(name); //calling calcBMR function
	var calories = name.bmr; //storing name.bmr in a varible for easier access
	
	if(dietType === "bulk") { //if dietTyoe parameter is equal to bulk
		calories = (calories + 1000); //add 1000 to the calories variable (bmr)
		var protein = Math.round((calories * 0.40) /4); //set protein equal to 40% of calories (0.40) and divide by 4 to find how many grams
		var carb = Math.round((calories * 0.40) /4); //set carb equal to 40% of calories (0.40) and divide by 4 to find how many grams
		var fat = Math.round((calories * 0.20) /9); //set fat equal to 20% of calories (0.20) and divide by 9 to find how many grams
		callback("Total calories: " + calories + "\n" + "Protein: " + protein + "g" + "\n" + "Carbs: " + carb + "g" + "\n" + "Fats: " + fat + "g" + "\n"); //perform callback function on result
		
		
	}
	else if(dietType === "cut") { //if dietTyoe parameter is equal to cut
		calories = (calories - 200); //subtract 200 from the calories variable (bmr)
		var protein = Math.round((calories * 0.40) /4); //set protein equal to 40% of calories (0.40) and divide by 4 to find how many grams
		var carb = Math.round((calories * 0.30) /4); //set carb equal to 30% of calories (0.30) and divide by 4 to find how many grams
		var fat = Math.round((calories * 0.30) /9); //set fat equal to 30% of calories (0.30) and divide by 9 to find how many grams
		callback("Total calories: " + calories + "\n" + "Protein: " + protein + "g" + "\n" + "Carbs: " + carb + "g" + "\n" + "Fats: " + fat + "g" + "\n"); //perform callback function on resutl
	}
}

var jake = new Person(male,72,175,25); //create new variables using the Person object contructor
var amy = new Person(female,58,120,26);

macroBreakdown(jake,bulk,print); //call macroBreakdown function 
macroBreakdown(amy,cut,print);







