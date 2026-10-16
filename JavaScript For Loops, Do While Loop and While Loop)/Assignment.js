// ==================== Part I: For Loop ====================

//Question-1
let temperature = [28, 32, 25, 40, 18, 35];
let count = 0;

for (let i = 0; i < temperature.length; i++) {
    if (temperature[i] > 30) {
        count++;
    }
}

console.log(`Number of days hotter than 30°C: ${count}`);


//Question-2
let num = 4729;
let sum = 0;

for (let n = num; n > 0; n = Math.floor(n / 10)) {  //Searched Online About How to Use FloorDivision in JS 
    sum += n % 10;
}

console.log(`Sum of digits: ${sum}`);


//Question-3
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 != 0) {
        console.log(i);
    }
}


//Question-4
let string = "JavaScript";
let newString = "";

for (let i = 0; i < string.length; i++) {
    if (
        string[i] != "a" && string[i] != "e" && string[i] != "i" && string[i] != "o" && string[i] != "u" && string[i] != "A" && string[i] != "E" && string[i] != "I" && string[i] != "O" && string[i] != "U"
    ) {
        newString += string[i];
    }
}

console.log(newString);


//Question-5
let numbers = [12, 45, 7, 23, 56, 89, 34];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] < largest) {
        secondLargest = numbers[i];
    }
}

console.log(`Second largest number: ${secondLargest}`);


//Question-6
let number = 28;
let total = 0;

for (let i = 1; i < number; i++) {
    if (number % i == 0) {
        total += i;
    }
}

if (total == number) {
    console.log(`${number} is a perfect number`);
} else {
    console.log(`${number} is not a perfect number`);
}


//Question-7
let value = 1;

for (let i = 1; i <= 8; i++) {
    console.log(value);
    value *= 2;
}


//Question-8
let first = 0;
let second = 1;

for (let i = 1; i <= 20; i++) {
    console.log(first);
    let next = first + second;
    first = second;
    second = next;
}


//Question-9
let scores = [45, 78, 90, 32, 56, 88];
let totalScore = 0;
let aboveAverage = 0;

for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
}

let average = totalScore / scores.length;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > average) {
        aboveAverage++;
    }
}

console.log(`Average score: ${average}`);
console.log(`Students above average: ${aboveAverage}`);


//Question-10
let decimal = 13;
let binary = "";

for (let n = decimal; n > 0; n = Math.floor(n / 2)) {  //Searched Online
    binary = (n % 2) + binary;
}

console.log(`Binary representation: ${binary}`);


// ==================== Part I-a: break ====================

//Question-1
let numbers1 = [2, 5, 9, 7, 4, 7];

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] == 7) {
        console.log(`Number 7 found at index: ${i}`);
        break;
    }
}


//Question-2
let correctPassword = "hello123";
let enteredPassword = "";

for (let i = 1; i <= 5; i++) {
    enteredPassword = "Adarsh123";
    correctPassword="Adarsh123";

    if (enteredPassword == correctPassword) {
        console.log("Access granted");
        break;
    }

    if (i == 5) {
        console.log("Account locked");
    }
}


//Question-3
let sum1 = 0;

for (let i = 1; i <= 100; i++) {
    sum1 += i;

    if (sum1 > 100) {
        console.log(`Last number added: ${i}`);
        break;
    }
}


//Question-4
let names = ["Aman", "Rahul", "Sohan", "Simran", "Karan"];

for (let i = 0; i < names.length; i++) {
    if (names[i][0] == "S") {
        console.log(names[i]);
        break;
    }
}


//Question-5
for (let i = 1; i <= 50; i++) {
    console.log(i);

    if (Math.sqrt(i) % 1 == 0 && i > 20) {
        break;
    }
}


// ==================== Part I-b: continue ====================

//Question-1
for (let i = 1; i <= 30; i++) {
    if (i % 4 == 0) {
        continue;
    }

    console.log(i);
}


//Question-2
let numbers2 = [10, -5, 20, -8, 15, -3];
let positiveSum = 0;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] <= 0) {
        continue;
    }

    positiveSum += numbers2[i];
}

console.log(`Sum of positive numbers: ${positiveSum}`);


//Question-3
let string1 = "Hello World";

for (let i = 0; i < string1.length; i++) {
    if (string1[i] == " ") {
        continue;
    }

    console.log(string1[i]);
}


//Question-4
for (let i = 1; i <= 12; i++) {
    let product = 6 * i;

    if (product % 5 == 0) {
        continue;
    }

    console.log(`6 x ${i} = ${product}`);
}


//Question-5
let ages = [12, 18, 25, 15, 30, 17, 22];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        continue;
    }

    console.log(ages[i]);
}


// ==================== Part I-c: Reverse For Loop ====================

//Question-1
for (let i = 50; i >= 1; i--) {
    if (i % 3 == 0 && i % 9 != 0) {
        console.log(i);
    }
}


//Question-2
let numbers3 = [12, 45, 7, 23, 56, 89, 34];
let largestBelow50 = -Infinity;

for (let i = numbers3.length - 1; i >= 0; i--) {
    if (numbers3[i] < 50 && numbers3[i] > largestBelow50) {
        largestBelow50 = numbers3[i];
    }
}

console.log(`Largest number less than 50: ${largestBelow50}`);


//Question-3
let num1 = 4729;
let oddProduct = 1;

for (let n = num1; n > 0; n = Math.floor(n / 10)) {
    let digit = n % 10;

    if (digit % 2 != 0) {
        oddProduct *= digit;
    }
}

console.log(`Product of odd digits: ${oddProduct}`);


//Question-4
let string2 = "Programming";
let consonants = "";

for (let i = string2.length - 1; i >= 0; i--) {
    if (
        string2[i] != "a" && string2[i] != "e" &&
        string2[i] != "i" && string2[i] != "o" &&
        string2[i] != "u" && string2[i] != "A" &&
        string2[i] != "E" && string2[i] != "I" &&
        string2[i] != "O" && string2[i] != "U"
    ) {
        consonants += string2[i];
    }
}

console.log(consonants);


//Question-5
let fibonacci = [];
let f1 = 0;
let f2 = 1;

for (let i = 1; i <= 15; i++) {
    fibonacci[i - 1] = f1;

    let next = f1 + f2;
    f1 = f2;
    f2 = next;
}

for (let i = 14; i >= 0; i--) {
    console.log(fibonacci[i]);
}


//Question-6
let palindromeNum = 12321;
let originalNum = palindromeNum;
let reversedNum = 0;

for (let n = palindromeNum; n > 0; n = Math.floor(n / 10)) {
    reversedNum = reversedNum * 10 + n % 10;
}

if (originalNum == reversedNum) {
    console.log(`${originalNum} is a palindrome`);
} else {
    console.log(`${originalNum} is not a palindrome`);
}


//Question-7
let temperature1 = [32, 28, 41, 19, 35, 27, 38];
let coldDays = 0;

for (let i = temperature1.length - 1; i >= 0; i--) {
    if (temperature1[i] < 30) {
        coldDays++;
    }
}

console.log(`Days colder than 30°C: ${coldDays}`);


//Question-8
let decimal1 = 13;
let reverseBinary = "";

for (let n = decimal1; n > 0; n = Math.floor(n / 2)) {
    reverseBinary += n % 2;
}

console.log(`Binary digits in reverse order: ${reverseBinary}`);


//Question-9
let scores1 = [90, 85, 70, 95, 60, 88, 75];

for (let i = scores1.length - 1; i >= 0; i--) {
    if (scores1[i] > 80) {
        console.log(`Score: ${scores1[i]}`);
        console.log(`Index: ${i}`);
        break;
    }
}


//Question-10
for (let i = 40; i >= 1; i--) {
    if (Math.sqrt(i) % 1 == 0) {
        continue;
    }

    console.log(i);
}


// ==================== Part I-d: Nested For Loop ====================

//Question-1
let num2 = 1;

for (let i = 1; i <= 4; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += num2 + " ";
        num2++;
    }

    console.log(row);
}


//Question-2
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
        row += String.fromCharCode(65 + j) + " ";
    }

    console.log(row);
}


//Question-3
for (let i = 1; i <= 5; i++){
    let row = "";

    for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i || i == 5) {
            row += "* ";
        } else {
            row += "  ";
        }
    }

    console.log(row);
}


//Question-4
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}


//Question-5
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }

    console.log(row);
}

