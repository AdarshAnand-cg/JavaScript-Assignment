// JavaScript Operators Assignment
//=============================\\
// Part C: Comparison & Relational Operators
//=============================\\


// 1. Loose Equality ==
console.log(1234 == "1234");      // true
console.log(0 == false);          // true
console.log("" == false);         // true
console.log(null == undefined);   // true
console.log(500 == "500");        // true

// 2. Loose Inequality !=
console.log("SAVE10" != "SAVE20"); // true
console.log("admin" != "guest");   // true
console.log(42 != "40");           // true
console.log("" != false);          // false
console.log(null != 101);          // true

// 3. Strict Equality ===
console.log(1234 === "1234");      // false
console.log(1234567890 === 1234567890); // true
console.log(true === 1);           // false
console.log(null === undefined);   // false
console.log(85 === 85);            // true

// 4. Strict Inequality !==
console.log("101" !== 101);        // true
console.log(true !== 1);           // true
console.log("abc123" !== "abc124"); // true
console.log(null !== undefined);   // true
console.log(10 !== 20);            // true

// 5. Greater Than >
console.log(20 > 18);              // true
console.log(650 > 500);            // true
console.log(1200 > 1000);          // true
console.log(40000 > 30000);        // true
console.log(11000 > 10000);        // true

// 6. Less Than <
console.log(30 < 35);              // true
console.log(8000 < 10000);         // true
console.log(7 < 10);               // true
console.log(40 < 50);              // true
console.log(4 < 5);                // true

// 7. Greater Than or Equal >=
console.log(18 >= 18);             // true
console.log(75 >= 75);             // true
console.log(14 >= 13);             // true
console.log(500 >= 500);           // true
console.log(3 >= 2);               // true

// 8. Less Than or Equal <=
console.log(7 <= 8);               // true
console.log(5 <= 5);               // true
console.log(12 <= 12);             // true
console.log(9.5 <= 10);            // true
console.log(40 <= 40);             // true