// Assignment 1: Variable Declaration Practice

var name = "Adarsh";
let age = 18;
const PI = 3.14159;

console.log(name);
console.log(age);
console.log(PI);

// Assignment 2: Changing and Not Changing Values

let score = 0;

score += 10;
console.log(score);

score += 5;
console.log(score);

score -= 3;
console.log(score);

const maxScore = 100;

console.log(maxScore);

// This will give an error because maxScore is a const variable.
// maxScore = 120;
// Assignment 3: Primitive Data Types

let myNumber = 42;
let myDecimal = 3.14;
let myText = "Hello";
let isReady = true;
let notReady = false;
let nothing;
let emptyValue = null;
let myBigInt = 123456789012345678901234567890n;

console.log("myNumber:", myNumber, "Type:", typeof myNumber);

console.log("myDecimal:", myDecimal, "Type:", typeof myDecimal);

console.log("myText:", myText, "Type:", typeof myText);

console.log("isReady:", isReady, "Type:", typeof isReady);

console.log("notReady:", notReady, "Type:", typeof notReady);

console.log("nothing:", nothing, "Type:", typeof nothing);

console.log("emptyValue:", emptyValue, "Type:", typeof emptyValue);

console.log("myBigInt:", myBigInt, "Type:", typeof myBigInt);



// Assignment 4: Understanding undefined vs null

let x;
let y = null;

console.log("x =", x);
console.log("y =", y);

console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);

console.log("x == y:", x == y);
console.log("x === y:", x === y);


// When is a variable undefined?
// A variable is undefined when it is declared but no value
// has been assigned to it.


// When do you use null?
// We use null when we intentionally want to say that
// a variable has no value or an empty value.




// Assignment 5: Objects, Arrays, and Functions


// Part A - Object

let student = {
  name: "Adarsh",
  age: 17,
  isEnrolled: true
};

console.log("Whole object:", student);

console.log("Name:", student.name);

console.log("Age:", student.age);


// Part B - Array

let numbers = [1, 2, 3, 4, 5];

let mixed = [1, "hello", true, null];

console.log("First element:", numbers[0]);

console.log("Last element:", numbers[numbers.length - 1]);

console.log("Mixed array:", mixed);


// Why is it better to keep arrays with a single data type?
// Keeping the same data type makes the array easier to understand,
// process, and work with.


/*
Part C - Function
*/

function greet(name) {
  return "Hello, " + name + "!";
}

let message1 = greet("Adarsh");
let message2 = greet("Rahul");

console.log(message1);
console.log(message2);