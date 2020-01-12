/*
    Rune Færø Programming foundations - Module assignement 2
*/

// Level 1.1
// Creating an Array with string value
var petArray = ["cat", "cow", "dog"];

// Level 1.2
// Outputting the value of the second item in the array
console.log(petArray[1]);

// Level 1.3
// Using push method to add item to existing list
petArray.push("sheep");

// Level 1.4
// Console using length method
console.log(petArray.length);

// Level 1.5
// Create an object with properties
var catObject = {
    name: "Meow",
    colour: "Black & White",
    age: 9
};

// Level 1.6
// Outputting the third value
console.log(catObject.age);

// Level 1.7
// Creating an array out of object values
let catArray = [{
    name: "Meow", // String
    colour: "Black & White", // String
    age: 9 // Number
}];

// Level 1.8
// Creating a Loop with the catArray values
for (var index = 0; index < catArray.length; index++) {
    console.log(catArray[index].name);
    console.log(catArray[index].colour);
    console.log(catArray[index].age);
}

// Level 1.9
// Creating a function
function logToConsole (dataToLog) {
    console.log(dataToLog);
}

// Level 1.10
// Creating a value for function
var horseFromShrek = "donkey";

// Calling test function
logToConsole(horseFromShrek);
