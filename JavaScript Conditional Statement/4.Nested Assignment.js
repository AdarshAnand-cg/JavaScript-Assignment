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