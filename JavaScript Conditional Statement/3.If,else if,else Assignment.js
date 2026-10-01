// ============================================================
// C] if...else if...else Statement
// ============================================================

// 1. Print season based on month number
let c1 = 7;

if (c1 === 12 || c1 === 1 || c1 === 2) {
    console.log("Winter");
} else if (c1 === 3 || c1 === 4 || c1 === 5) {
    console.log("Summer");
} else if (c1 === 6 || c1 === 7 || c1 === 8) {
    console.log("Monsoon");
} else if (c1 === 9 || c1 === 10 || c1 === 11) {
    console.log("Autumn");
} else {
    console.log("Invalid Month");
}


// 2. Simple tax calculator
let c2 = 800000;
let tax;

if (c2 < 300000) {
    tax = 0;
} else if (c2 <= 700000) {
    tax = c2 * 0.05;
} else if (c2 <= 1000000) {
    tax = c2 * 0.10;
} else {
    tax = c2 * 0.15;
}

console.log("Tax amount:", tax);


// 3. Student score category
let c3 = 85;

if (c3 >= 90) {
    console.log("Outstanding");
} else if (c3 >= 70) {
    console.log("Good");
} else if (c3 >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}


// 4. Vehicle speed
let c4 = 75;

if (c4 < 40) {
    console.log("Slow");
} else if (c4 <= 80) {
    console.log("Normal");
} else {
    console.log("Fast");
}


// 5. Person's height
let c5 = 175;

if (c5 < 150) {
    console.log("Short");
} else if (c5 <= 170) {
    console.log("Average");
} else {
    console.log("Tall");
}


// 6. Weekday or Weekend
let c6 = 6;

if (c6 >= 1 && c6 <= 5) {
    console.log("Weekday");
} else if (c6 === 6 || c6 === 7) {
    console.log("Weekend");
} else {
    console.log("Invalid Day");
}


// 7. Electricity bill
let c7 = 120;
let bill;

if (c7 <= 50) {
    bill = c7 * 2;
} else if (c7 <= 150) {
    bill = c7 * 4;
} else {
    bill = c7 * 6;
}

console.log("Total Bill: ₹" + bill);


// 8. Student attendance
let c8 = 82;

if (c8 >= 90) {
    console.log("Excellent");
} else if (c8 >= 75) {
    console.log("Good");
} else if (c8 >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}


// 9. Find highest of three marks
let c9 = 78;
let c10 = 92;
let c11 = 85;

if (c9 >= c10 && c9 >= c11) {
    console.log("Highest mark:", c9);
} else if (c10 >= c9 && c10 >= c11) {
    console.log("Highest mark:", c10);
} else {
    console.log("Highest mark:", c11);
}


// 10. Positive Even, Positive Odd, Negative Even,
//     Negative Odd, or Zero
let c12 = -15;

if (c12 === 0) {
    console.log("Zero");
} else if (c12 > 0 && c12 % 2 === 0) {
    console.log("Positive Even");
} else if (c12 > 0 && c12 % 2 !== 0) {
    console.log("Positive Odd");
} else if (c12 < 0 && c12 % 2 === 0) {
    console.log("Negative Even");
} else {
    console.log("Negative Odd");
}



