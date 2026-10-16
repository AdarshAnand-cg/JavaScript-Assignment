// for if,else if and else type problem
let n1 = 0;
n1 = n1 > 0 ? "Positive" : n1 == 0 ? "Zero" : "Negative";
console.log(n1);

let studentMark = 35;
studentMark =
  studentMark < 35 ? "Failed" : studentMark == 35 ? "Just Passed" : "Passed";
console.log(studentMark);

let num1 = 27;
let num2 = 27;
minimum =
  num1 > num2
    ? `The smallest between ${num1} and ${num2} is ${num2}`
    : num1 == num2
      ? `Both The Number are Equal`
      : `The smallest between ${num1} and ${num2} is ${num1}`;
console.log(minimum);

//Syntax of for loop
let hello = "";
for (let i = 1000; i >= 1; i -= 2) {
  hello += i + " ";
}
console.log(i);
