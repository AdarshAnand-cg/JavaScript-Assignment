// ==========================================
// 1. push()
// ==========================================

// Question 1.1
let array1_1 = ["Red", "Yellow", "White"];
array1_1.push("Black", "Violet");
console.log(array1_1); // [ 'Red', 'Yellow', 'White', 'Black', 'Violet' ]

// Question 1.2
let array1_2 = [];
array1_2.push(5);
array1_2.push(10);
array1_2.push(15);
console.log(array1_2); // [ 5, 10, 15 ]

// Question 1.3
let array1_3 = ["Pen", "Book"];
array1_3.push("Eraser", "Scale");
console.log(array1_3); // [ 'Pen', 'Book', 'Eraser', 'Scale' ]

// Question 1.4
// push() adds the new element(s) at the END of the array, after the current last element.

// Question 1.5
// Yes, push() modifies (mutates) the original array in place and returns the new length.

// ==========================================
// 2. pop()
// ==========================================

// Question :- 2.1
let array2_1 = [10, 20, 30, 40, 50];
let removed2_1a = array2_1.pop();
let removed2_1b = array2_1.pop();
console.log(array2_1);                      // [ 10, 20, 30 ]
console.log(removed2_1a, removed2_1b);      // 50 40

// Question :- 2.2
let array2_2 = ["Red", "Blue", "Green"];
let removed2_2 = array2_2.pop();
console.log(array2_2);                      // [ 'Red', 'Blue' ]
console.log(removed2_2);                    // Green

// Question :- 2.3
let array2_3 = [100, 200, 300, 400];
let removed2_3 = array2_3.pop();
console.log(removed2_3);                    // 400
console.log(array2_3);                      // [ 100, 200, 300 ]

// Question :- 2.4
// pop() returns the element that it removed from the END of the array.

// Question :- 2.5
let array2_5 = [];
console.log(array2_5.pop());                // undefined
console.log(array2_5);                      // [] (array stays empty, no error)
// Calling pop() on an empty array returns undefined and does nothing else.


// ==========================================
// 3. unshift()
// ==========================================

// Question :- 3.1
let array3_1 = ["CSS", "JavaScript"];
array3_1.unshift("HTML");
console.log(array3_1);                      // [ 'HTML', 'CSS', 'JavaScript' ]

// Question :- 3.2
let array3_2 = [20, 30];
array3_2.unshift(5, 10);
console.log(array3_2);                      // [ 5, 10, 20, 30 ]

// Question :- 3.3
let array3_3 = [];
array3_3.unshift("Ahmedabad");
array3_3.unshift("Surat");
array3_3.unshift("Rajkot");
console.log(array3_3);                      // [ 'Rajkot', 'Surat', 'Ahmedabad' ]
// Each new city goes to the front, so the final order is reverse of insertion.

// Question :- 3.4
// unshift() adds the new element(s) at the BEGINNING of the array (index 0).

// Question :- 3.5
// Yes, unshift(5, 10) adds multiple elements in one call, and they keep the
// same order in which they were passed. It also returns the new length.


// ==========================================
// 4. shift()
// ==========================================

// Question :- 4.1
let array4_1 = ["Mumbai", "Delhi", "Pune", "Chennai"];
let removed4_1 = array4_1.shift();
console.log(array4_1);                      // [ 'Delhi', 'Pune', 'Chennai' ]
console.log(removed4_1);                    // Mumbai

// Question :- 4.2
let array4_2 = [10, 20, 30, 40];
let removed4_2a = array4_2.shift();
let removed4_2b = array4_2.shift();
console.log(array4_2);                      // [ 30, 40 ]
console.log(removed4_2a, removed4_2b);      // 10 20

// Question :- 4.3
let array4_3 = ["Apple", "Banana", "Mango"];
let removed4_3 = array4_3.shift();
console.log(removed4_3);                    // Apple
console.log(array4_3);                      // [ 'Banana', 'Mango' ]

// Question :- 4.4
// shift() removes the FIRST element, while pop() removes the LAST element.
// Both change the original array and return the removed element.

// Question :- 4.5
// shift() returns the removed first element (undefined if the array is empty).


// ==========================================
// 5. indexOf()
// ==========================================

// Question :- 5.1
let array5_1 = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Papaya"];
console.log(array5_1.indexOf("Mango"));     // 2
console.log(array5_1.indexOf("Kiwi"));      // -1

// Question :- 5.2
let array5_2 = ["A", "B", "C", "B", "D"];
console.log(array5_2.indexOf("B"));         // 1

// Question :- 5.3
let array5_3 = ["Aman", "Riya", "Karan", "Neha"];
console.log(array5_3.indexOf("Karan"));     // 2

// Question :- 5.4
// indexOf() returns -1 if the element is not found.

// Question :- 5.5
// If the element appears more than once, indexOf() returns the index of the
// FIRST occurrence only.


// ==========================================
// 6. lastIndexOf()
// ==========================================

// Question :- 6.1
let array6_1 = ["Pen", "Book", "Pen", "Eraser", "Pen"];
console.log(array6_1.lastIndexOf("Pen"));   // 4

// Question :- 6.2
let array6_2 = ["X", "Y", "Z", "Y", "X"];
console.log(array6_2.lastIndexOf("Y"));     // 3
console.log(array6_2.lastIndexOf("X"));     // 4

// Question :- 6.3
let array6_3 = [7, 3, 9, 3, 5];
console.log(array6_3.lastIndexOf(3));       // 3

// Question :- 6.4
// indexOf() returns the index of the FIRST match (searching from the start),
// lastIndexOf() returns the index of the LAST match (searching from the end).

// Question :- 6.5
// Prefer lastIndexOf() when you need the most recent / last occurrence,
// e.g. the latest duplicate entry or the last time a value appears in a list.


// ==========================================
// 7. includes()
// ==========================================

// Question :- 7.1
let friends7_1 = ["Aman", "Riya", "Karan", "Neha"];
if (friends7_1.includes("Karan")) {
    console.log("Karan is in the friends list");
} else {
    console.log("Karan is not in the friends list");
}

// Question :- 7.2
let array7_2 = [11, 22, 33, 44];
console.log(array7_2.includes(33));         // true
console.log(array7_2.includes(55));         // false

// Question :- 7.3
let subjects7_3 = ["Maths", "Physics", "Chemistry", "English"];
console.log(subjects7_3.includes("Physics"));   // true
console.log(subjects7_3.includes("Biology"));   // false

// Question :- 7.4
// includes() returns a boolean: true if the element is found, otherwise false.

// Question :- 7.5
// Yes, it works for both numbers and strings. It uses strict comparison, so
// the type must match too (e.g. 33 and "33" are different, and "a" !== "A").


// ==========================================
// 8. reverse()
// ==========================================

// Question :- 8.1
let array8_1 = [1, 2, 3, 4, 5];
console.log("Before:", array8_1);           // [ 1, 2, 3, 4, 5 ]
array8_1.reverse();
console.log("After:", array8_1);            // [ 5, 4, 3, 2, 1 ]

// Question :- 8.2
let array8_2 = ["A", "B", "C", "D"];
array8_2.reverse();
console.log(array8_2);                      // [ 'D', 'C', 'B', 'A' ]

// Question :- 8.3
let array8_3 = ["Mumbai", "Delhi", "Pune", "Chennai"];
array8_3.reverse();
console.log(array8_3);                      // [ 'Chennai', 'Pune', 'Delhi', 'Mumbai' ]

// Question :- 8.4
// reverse() modifies the ORIGINAL array (it does not create a new one).

// Question :- 8.5
// "In-place" means the change is made directly inside the same array,
// without making a copy. The original array itself gets reversed.


// ==========================================
// 9. sort() - Basic Version
// ==========================================

// Question :- 9.1
let names9_1 = ["Riya", "Aman", "Neha", "Karan", "Dev"];
names9_1.sort();
console.log(names9_1);                      // [ 'Aman', 'Dev', 'Karan', 'Neha', 'Riya' ]

// Question :- 9.2
let array9_2 = ["Dog", "Cat", "Elephant", "Ant"];
array9_2.sort();
console.log(array9_2);                      // [ 'Ant', 'Cat', 'Dog', 'Elephant' ]

// Question :- 9.3
let array9_3 = [40, 100, 5, 25];
array9_3.sort();
console.log(array9_3);                      // [ 100, 25, 40, 5 ]

// Question :- 9.4
// sort() converts every element to a STRING and compares them character by
// character, so "100" comes before "25", "40" and "5".
// (Correct numeric sort needs a compare function: arr.sort((a, b) => a - b))

// Question :- 9.5
// Yes, sort() changes (sorts in-place) the original array.


// ==========================================
// 10. join()
// ==========================================

// Question :- 10.1
let array10_1 = ["HTML", "CSS", "JavaScript", "Python"];
console.log(array10_1.join(" | "));         // HTML | CSS | JavaScript | Python

// Question :- 10.2
let array10_2 = ["HTML", "CSS", "JavaScript"];
console.log(array10_2.join(" - "));         // HTML - CSS - JavaScript

// Question :- 10.3
let array10_3 = ["Maths", "Physics", "English"];
console.log(array10_3.join(" / "));         // Maths / Physics / English

// Question :- 10.4
// If no separator is passed, join() uses a comma (,) by default.
console.log(["A", "B", "C"].join());        // A,B,C

// Question :- 10.5
// join() returns a STRING (the original array is not changed).


// ==========================================
// 11. concat()
// ==========================================

// Question :- 11.1
let array11_1a = [1, 2, 3];
let array11_1b = [4, 5, 6];
let combined11_1 = array11_1a.concat(array11_1b);
console.log(combined11_1);                  // [ 1, 2, 3, 4, 5, 6 ]
console.log(array11_1a);                    // [ 1, 2, 3 ]
console.log(array11_1b);                    // [ 4, 5, 6 ]

// Question :- 11.2
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2));             // [ 1, 2, 3, 4 ]

// Question :- 11.3
let array11_3a = ["A", "B"];
let array11_3b = ["C", "D"];
let array11_3c = ["E", "F"];
console.log(array11_3a.concat(array11_3b, array11_3c));
// [ 'A', 'B', 'C', 'D', 'E', 'F' ]

// Question :- 11.4
// No, concat() does not change the original arrays. It returns a NEW array.

// Question :- 11.5
// Yes, concat() accepts multiple arrays: arr1.concat(arr2, arr3, arr4, ...).


// ==========================================
// 12. slice()
// ==========================================

// Question :- 12.1
let array12_1 = [5, 10, 15, 20, 25, 30];
console.log(array12_1.slice(2, 5));         // [ 15, 20, 25 ]
// The end index is NOT included. To include index 5 as well, use slice(2, 6).

// Question :- 12.2
let array12_2 = [10, 20, 30, 40, 50];
let sliced12_2 = array12_2.slice(1, 4);
console.log(sliced12_2);                    // [ 20, 30, 40 ]
console.log(array12_2);                     // [ 10, 20, 30, 40, 50 ]

// Question :- 12.3
let array12_3 = [3, 6, 9, 12, 15, 18];
console.log(array12_3.slice(0, 3));         // [ 3, 6, 9 ]

// Question :- 12.4
// No, slice() does not modify the original array. It returns a new array.

// Question :- 12.5
// If the second argument is omitted, slice() extracts from the start index
// till the END of the array.
console.log([1, 2, 3, 4, 5].slice(2));      // [ 3, 4, 5 ]

