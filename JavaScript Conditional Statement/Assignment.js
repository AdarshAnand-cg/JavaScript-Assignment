// ============================================================
// A] if Statement
// ============================================================

// 1. Check if a number is divisible by 5
let a1 = 25;

if (a1 % 5 === 0) {
    console.log("Divisible by 5");
}


// 2. Check if age is greater than or equal to 60
let a2 = 65;

if (a2 >= 60) {
    console.log("Senior Citizen");
}


// 3. Check if number is greater than 100
let a3 = 150;

if (a3 > 100) {
    console.log("Big Number");
}


// 4. Check if temperature is less than 10
let a4 = 5;

if (a4 < 10) {
    console.log("Very Cold");
}


// 5. Check if student scored full marks
let a5 = 100;

if (a5 === 100) {
    console.log("Perfect Score");
}


// 6. Check if a number is negative
let a6 = -20;

if (a6 < 0) {
    console.log("Negative Number");
}


// 7. Check if string is empty
let a7 = "";

if (a7 === "") {
    console.log("No input provided");
}


// 8. Check if year is divisible by 100
let a8 = 2000;

if (a8 % 100 === 0) {
    console.log("Century Year");
}


// 9. Check if number is positive and even
let a9 = 24;

if (a9 > 0 && a9 % 2 === 0) {
    console.log("Positive Even Number");
}


// 10. Check if marks are between 35 and 100
let marks = 75;

if (marks >= 35 && marks <= 100) {
    console.log("Valid Marks");
}



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



// ============================================================
// D] Nested if Statement
// ============================================================

// 1. Number greater than 10 and divisible by 3
let d1 = 18;

if (d1 > 10) {
    if (d1 % 3 === 0) {
        console.log("Number is greater than 10 and divisible by 3");
    } else {
        console.log("Number is greater than 10 but not divisible by 3");
    }
} else {
    console.log("Number is not greater than 10");
}


// 2. Voting with voter ID
let d2 = 21;
let hasVoterID = true;

if (d2 >= 18) {
    if (hasVoterID === true) {
        console.log("Can Vote");
    } else {
        console.log("Voter ID required");
    }
} else {
    console.log("Not eligible due to age");
}


// 3. Passed with distinction
let d3 = 85;

if (d3 >= 40) {
    if (d3 >= 80) {
        console.log("Passed with Distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}


// 4. Simple ATM system
let correctPin = 1234;
let enteredPin = 1234;
let balance = 10000;
let withdrawal = 3000;

if (enteredPin === correctPin) {
    if (withdrawal <= balance) {
        console.log("Withdrawal Successful");
        console.log("Remaining Balance:", balance - withdrawal);
    } else {
        console.log("Insufficient Balance");
    }
} else {
    console.log("Incorrect PIN");
}


// 5. Leap year using nested if
let d4 = 2000;

if (d4 % 4 === 0) {
    if (d4 % 100 === 0) {
        if (d4 % 400 === 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}


// 6. Nested email validation
let d5 = "student@gmail.com";

if (d5.includes("@")) {
    if (d5.endsWith(".com")) {
        if (d5.length > 10) {
            console.log("Valid Email");
        } else {
            console.log("Email length is too short");
        }
    } else {
        console.log("Email must end with .com");
    }
} else {
    console.log("Email must contain @");
}


// 7. Online shopping discount
let cartTotal = 2000;
let premiumMember = true;
let finalAmount;

if (cartTotal >= 1000) {
    if (premiumMember === true) {
        finalAmount = cartTotal - (cartTotal * 0.20);
        console.log("20% Discount");
    } else {
        finalAmount = cartTotal - (cartTotal * 0.10);
        console.log("10% Discount");
    }

    console.log("Final Amount: ₹" + finalAmount);
} else {
    console.log("No Discount");
    console.log("Final Amount: ₹" + cartTotal);
}


// 8. Positive, even, and divisible by 4
let d6 = 20;

if (d6 > 0) {
    if (d6 % 2 === 0) {
        if (d6 % 4 === 0) {
            console.log("Positive Even and Divisible by 4");
        } else {
            console.log("Positive Even but not divisible by 4");
        }
    } else {
        console.log("Positive Odd");
    }
} else {
    console.log("Number is not positive");
}


// 9. Job eligibility checker
let candidateAge = 25;
let hasDegree = true;
let experience = 3;

if (candidateAge >= 21 && candidateAge <= 30) {
    if (hasDegree === true) {
        if (experience >= 2) {
            console.log("Eligible for Interview");
        } else {
            console.log("Not eligible: Less than 2 years experience");
        }
    } else {
        console.log("Not eligible: Graduation degree required");
    }
} else {
    console.log("Not eligible: Age must be between 21 and 30");
}


// 10. Exam eligibility
let isPresent = true;
let internalMarks = 35;
let externalMarks = 40;

if (isPresent === true) {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        } else {
            console.log("Not Eligible: External marks are less than 35");
        }
    } else {
        console.log("Not Eligible: Internal marks are less than 30");
    }
} else {
    console.log("Not Eligible: Student is absent");
}