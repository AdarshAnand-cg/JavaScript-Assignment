// ==========================================
// 1. What Is an Array?
// ==========================================

// Question-1.1
// Ans:- An Array is a set of ordered data types to store different values at once, where each value has its indexing

// Question-1.2
// Ans:-The position of the value is said as Indexing as a technical term

// Question-1.3
// Ans:-The index starts with 0,instead of normal count method as start with 1

// Question-1.4
// Ans:-30

// Question-1.5
// Ans:-the index of 40 is 3

// ==========================================
// 2. Creating Arrays
// ==========================================

// Question-2.1
// Ans:-The two wayss to write array inn JavaScript are as Follows:-
//       1.> Using Squared Bracket/General method
//       2.> Using the Array constructor

// Question-2.2
// Ans:-Using The Square Method

// Question-2.3
// Ans:-
students=["Jenil","Mahir","Priyesha","Yashvi"]

// Question:-2.4
// Ans:-
var studentsMarks= new Array(85,90,78)
console.log(students)

// Question-2.5
// Ans:- The Keyword used in case of constructor aproach is "new Array()" so the keyword is new

// ==========================================
// 3. Accessing Values in an Array
// ==========================================

// Question-3.1
// Ans:- We use Slicing to access a specific value storedd in array

// Question-3.2
// Ans:- Jenil

// Question-3.3
// Ans:-Priyesha

// Question-3.4
// Ans:- Undefined

// Question-3.5
// Ans:- 
color=["Red","Yellow","Blue","White"]
console.log(color[0])

// ==========================================
// 4. Updating Values
// ==========================================

// Question-4.1
// Ans:- We can update a specific value in an existing array by using
//       its index number and assigning a new value to it.

// Question-4.2
// Ans:-
var MARKS = [80, 75, 90];
MARKS[1] = 95;

// Question-4.3
// Ans:-The Output is [80,95,90]

// Question-4.4
// Ans:- False. We do not need any special built-in method like
//       update(). We can directly change the value using its index.

// Question-4.5
// Ans:- Yes, we can assign a value to an index outside the current
//       bounds of an array. JavaScript increases the array length
//       and creates empty slots between the old and new index.


// ==========================================
// 5. Array Length
// ==========================================

// Question-5.1
// Ans:- The built-in property used to find the number of items in
//       an array is "length".

// Question-5.2
// Ans:-
var arr = [1, 2, 3, 4];
console.log(arr.length);

// Ans:-The Output will be:-
//       4

// Question-5.3
// Ans:- If an array is empty, its length property is equal to 0.

// Question-5.4
// Ans:- The length property is useful because it tells us the total
//       number of elements in an array. It is commonly used while
//       looping through an array.

// Question-5.5
// Ans:- length is a property, not a function. Therefore, we write
//       arr.length instead of arr.length().


// ==========================================
// 6. Looping Through Arrays
// ==========================================

// Question-6.1
// Ans:- The two types of loops used for iterating through an array
//       are as follows:-
//       1.> for loop
//       2.> while loop

// Question-6.2
// Ans:- The condition typically used in a for loop is:
//       i < array.length
//       This ensures that the loop stops before going out of bounds.

// Question-6.3
// Ans:- In a while loop, the increment step i++ is generally placed
//       inside the while loop that is just after the array access statement.

// Question-6.4
// Ans:-
var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Question-6.5
// Ans:- If we use <= instead of <, the loop will run one extra time.
//       When i becomes equal to students.length, students[i] will
//       access an index that does not exist, so it will print
//       undefined.


// ==========================================
// 7. Adding Elements to Arrays
// ==========================================

// Question-7.1
// Ans:- The method used to add an element at the end of an array
//       is "push()".

// Question-7.2
// Ans:- The method used to add an element at the beginning of an
//       array is "unshift()".

// Question-7.3
// Ans:-
let nums = [1, 2, 3];

nums.push(4);

console.log(nums);

// Ans:- The Output will be:-
//       [1, 2, 3, 4]


// Question-7.4
// Ans:-
nums.unshift(0);

console.log(nums);

// Ans:- The Output will be:-
//       [0, 1, 2, 3, 4]


// Question-7.5
// Ans:- True.
//
//       Both push() and unshift() modify the original array.
//       Therefore, both are mutating methods.



// ==========================================
// 8. Removing Elements
// ==========================================

// Question-8.1
// Ans:- The method used to remove the last element of an array
//       is "pop()".

// Question-8.2
// Ans:- The method used to remove the first element of an array
//       is "shift()".

// Question-8.3
// Ans:-
let numbers = [100, 200, 300, 400, 500];

numbers.pop();

console.log(numbers);

// Ans:- pop() removes the last element from the array.
//
//       The last element is 500.
//
//       The Output will be:-
//       [100, 200, 300, 400]


// Question-8.4
// Ans:-
numbers.shift();

console.log(numbers);

// Ans:- shift() removes the first element from the array.
//
//       The first element is 100.
//
//       The Output will be:-
//       [200, 300, 400]


// Question-8.5
// Ans:- pop() and shift() both return the element that they remove.
//
//       pop() returns the last removed element.
//
//       shift() returns the first removed element.
//
//       Example:-

let values = [10, 20, 30];

let removedValue = values.pop();

console.log(removedValue);

// Ans:- The Output will be:-
//       30



// ==========================================
// 9. Searching in Arrays
// ==========================================

// Question-9.1
// Ans:- The indexOf() method returns the index of the searched
//       value when the value is found in the array.

// Question-9.2
// Ans:- If the searched value is not present in the array,
//       indexOf() returns -1.

// Question-9.3
// Ans:-
const names = ["Jenil", "Mahir", "Arjun"];

console.log(names.indexOf("Mahir"));

// Ans:- The Output will be:-
//       1
//
//       "Mahir" is present at index 1.


// Question-9.4
// Ans:-
console.log(names.indexOf("Krishna"));

// Ans:- The Output will be:-
//       -1
//
//       "Krishna" is not present in the array.


// Question-9.5
// Ans:-
let student = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

console.log(student.indexOf("Priyesha"));

// Ans:- The Output will be:-
//       2



// ==========================================
// 10. Array with Different Data Types
// ==========================================

// Question-10.1
// Ans:- Yes, a JavaScript array can store values of different
//       data types in the same array.
//
//       For example, an array can contain a number, string,
//       boolean, and null value.

// Question-10.2
// Ans:-
let data = [100, "Hello", true, null];


// Question-10.3
// Ans:- We can use the typeof operator to check the data type
//       of each element in an array.
//
//       Example:-

console.log(typeof data[0]);
console.log(typeof data[1]);
console.log(typeof data[2]);
console.log(typeof data[3]);


// Question-10.4
// Ans:-
const data2 = [100, "Hello", true, null];

console.log(typeof data2[0]);

// Ans:- The Output will be:-
//       number


// Question-10.5
// Ans:-
console.log(typeof data2[2]);

// Ans:- The Output will be:-
//       boolean


// ==========================================
// 11. Array of Arrays(Matrix)-2D Array
// ==========================================

// Question-11.1
// Ans:-
let matrix = [
    [33, 54, 83, 67],
    [23, 98, 80, 77]
];
console.log(matrix[1])

// Question-11.2
const Marks = [
    [85, 90, 78],
    [70, 75, 80],
    [88, 82, 95],
    [60, 65, 70]
];
console.log(Marks[2])

// Question-11.3
mat = [
    [23, 56, 98],
    [12, 65, 98],
    [89, 72, 91],
    [61, 86, 38]
];
let count = 0;
for (const i of mat) {
    for (const j of mat[0]) {
        count += 1
    }
}
console.log(count)

// Question-11.4
let matRix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
matRix[1][1] = 0
console.log(matRix)

// Question-11.5
let cat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(cat[0][2])
console.table(cat)

// ==========================================
// 12. Real-World Example
// ==========================================

const marks = [
    [85, 90, 92], // Jenil
    [70, 75, 80], // Arjun
    [88, 82]  // Krishna
];

for (let i = 0; i < marks.length; i++) {
    const studentMarks = marks[i];
    const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
    const avg = total / 3;
    console.log("Student " + (i + 1) + " average: " + avg + " Total: "+total);
    console.table(marks)
    
}

// Question-12.1
// Ans:-marks[i] represent the number of element in the matrix named marks.

// Question-12.2
// Ans:- WE Use marks.length to set a range of i basically to extract each and every element one by one in a row for make progress in the matrix.

// Question-12.3
// Ans:- It doesn't throw any error but it makes 'Nan' for Average  and Total

// ==========================================
// 13. Common Mistakes
// ==========================================

// Question-13.1
const arr = [10, 20, 30];
console.log(arr[3]);
// Ans:-Undefined

// Question-13.2
// arr[arr.length] = 10;
// Ans:- [10,20,30,10]

// Question-13.3
// let arr = [10, 20, 30];
// arr[arr.length] = 40;
// Ans:- [10,20,30,40]

// Question-13.4
// Ans:- A Sparse Array is an array in which some indexes are empty or have no elements stored in them.

// Question-13.5
//Ans:- 

// Question-13.6
// Array contains only elements/values in it to store them in it while Object contains key-value Pair.Also Array's value is stored in big bracket and object's value in in curly bracket.

// ==========================================
// 14. Practice Exercises
// ==========================================


