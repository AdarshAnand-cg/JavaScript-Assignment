// ============================================================
// B] if...else Statement
// ============================================================

// 1. Check whether a number is even or odd
let b1 = 17;

if (b1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 2. Check voting eligibility
let b2 = 20;

if (b2 >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// 3. Check whether a number is positive or negative
let b3 = -10;

if (b3 >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}


// 4. Check whether student passed or failed
let b4 = 45;

if (b4 >= 35) {
    console.log("Passed");
} else {
    console.log("Failed");
}


// 5. Check whether a character is uppercase
let b5 = "G";

if (b5 >= "A" && b5 <= "Z") {
    console.log("Uppercase Letter");
} else {
    console.log("Not an Uppercase Letter");
}


// 6. Check divisibility by 3
let b6 = 21;

if (b6 % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not Divisible by 3");
}


// 7. Password check
let b7 = "admin123";

if (b7 === "admin123") {
    console.log("Login Successful");
} else {
    console.log("Incorrect Password");
}


// 8. Check leap year using basic rule
let b8 = 2024;

if (b8 % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


// 9. Find greater of two numbers
let b9 = 50;
let b10 = 35;

if (b9 > b10) {
    console.log("Greater number:", b9);
} else {
    console.log("Greater number:", b10);
}


// 10. Check positive, negative, or zero
let b11 = 0;

if (b11 >= 0) {
    if (b11 === 0) {
        console.log("Zero");
    } else {
        console.log("Positive");
    }
} else {
    console.log("Negative");
}
