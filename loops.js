// loops

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
};

for (let i = 0; i < arr.length; i++){
	if((arr[i] % 2) === 0){
		console.log(arr[i] + " is even.");
	}else{
		console.log(arr[i] + " is odd.");
	};
};

for (let i = 2; i >= 0; i--){
	console.log(arr[i] + " is leaving the array.");
	arr.pop();
	console.log(arr);
};

// looping through objects

const myCar = {
	brand: 'Audi',
	model: 'A3',
	year: 2008,
	color: 'White',
	autoTrans: false
};

for (let temp in myCar) {
	console.log(myCar[temp]);
};

for (let temp in myCar){
	myCar[temp] = myCar[temp] + " Kowabunga";
	console.log(temp + ": " + myCar[temp]);
};




// Loop Lab

for (let i = 0; i <= 20; i++){
	if(i % 2 === 0){
		console.log(i + " is Even!");
	}else{
		console.log(i + " is Odd!");
	};
};

let myBagOfBeans = 50;
for (let i = 100; i > 0; i--){
	if(i % 2 === 0){
		myBagOfBeans += i;
	};
};

const arrayOfStringsRememberIcanNameMyVariablesAnythingIWant = ['cheese', 'pepperoni', 'sausage', 'coca cola', 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];
const food = [];
const drinks = [];
const sauces = [];
for (let i = 0; i < arrayOfStringsRememberIcanNameMyVariablesAnythingIWant.length; i++){
	if(i < 3){
		food.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	}else if(i === 3 || i === 4){
		drinks.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	}else if(i === 5){
		food.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	}else if(i === 6 || i === 7){
		drinks.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	}else{
		sauces.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	};
};

const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30];
const seperateArray = [];
for (let i = 0; i < mixedArray.length; i++){
	if(typeof mixedArray[i] != typeof 1){
		seperateArray.push(mixedArray[i]);
	};
};

const food = ['bun', "jalepeno cheddar", "elk", "beef", "1954 ford mustang", 1.14, 1.23, 'hot dog', "gary clark jr", " I'lll never fall in love again", "mustard", "ketchup", 30, 50, 80, "grilled onions", "egg", "Dr. Suess"];
const dinner = [];
for (let i = 0; i < food.length; i++){
	if(i < 4){
		dinner.push(food[i]);
	}else if(i === 10 || i === 11){
		dinner.push(food[i]);
	}else if(i === 15 || i === 16){
		dinner.push(food[i]);
	};
};

const colorObjects = {red: 'red', blue: 'blue', cyan: 'cyan'};
for (let temp in colorObjects){
	console.log(colorObjects[temp]);
};

const seinfeld = {cosmo: "kramer", jerry: "Seinfeld", george: "constanza", elaine: "bennis"};
for (let temp in seinfeld){
	console.log(seinfeld[temp]);
};

const profile = {name: "Elon Musk", occupation: "space man", hobbies: ["paypal", "space X", "rocket science"]};
for (let temp in profile){
	console.log(profile[temp]);
};

const oldTime = ["benton flippen", "carter family", "roscoe Holcomb", "gus cannon", "Tommy Jarrell"];+
// I used a "for loop" because it is an array
for (let i = 0; i < oldTime.length; i++){
	console.log(oldTime[i]);
};

const sandwhich = {name: "sunday morning special", bread: "ciabatta", cheese: "pepper jack", green: "arugala", redStuff: "cherry tomatoes", heated: true};
// I used a "for in loop" because it is an object
for (let temp in sandwhich){
	console.log(sandwhich[temp]);
};

const zeppelin = ["In through the out door", "Zep 1", "Zep 2", "Zep3", "Zep4", "Physical Graffiti"];
// I used a "for loop" because it is just a standard array
for (let i = 0; i < zeppelin.length; i++){
	console.log(zeppelin[i]);
};




