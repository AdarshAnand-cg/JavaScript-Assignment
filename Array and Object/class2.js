// Using for loop is in Array in normal method
const students=["adarsh","anand","singh"]
for(i=0;i<students.length;i++) {
    console.log(students[i])
}

//Using For Loop using 'of' for extracting all the values in an array
for(const student of students){
    console.log(student);
}

let fruits=["apple","banana","watermelon","guava","muskmelon","grapes"]
for (j=0;j<fruits.length;j++){
    console.log(fruits[j])
}

let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
num.push(5,6,7,8);  ////Add these as last value in the array
num.unshift(-2,-1,0); //Add these as initial value in the array
let len=num.push(5,6,7,8)
console.log(num,len);


let array=[5,10,15]
array.push(20)
array.unshift(0)
console.log(array)
array.pop()    //removes the last value from the array
array.shift()  //removes the first value from the array
let removedElements=array.pop()
console.log(`The Removed Element is ${removedElements}`)
console.log(array)  //0 and 20 is removed bfrom the array named as array as pop() and shift() are used.

// Create an array [100, 200, 300, 400, 500]. Remove the last element using pop().
let arr=[100, 200, 300, 400, 500]
arr.pop()
arr.shift()
console.log(arr)

let studentName=["Adarsh","Anand","Singh"]
console.log(studentName)
console.log(studentName.indexOf("Anand"));
console.log(studentName.indexOf("Hello"));

// Create an array of 5 student names. Find and print the index of any one name using indexOf().
let names=["Adarsh","Neel","Amit","Mohit","Shivam"]
console.log(names.indexOf("Mohit"))

// Print the data type of each element using typeof.
const data = [100, "Hello", true, null];
for(i=0;i<data.length;i++){
    console.log(typeof(data[i]))
}

// Array in arrays
let matrix=[
    [1,2],
    [3,4],
    [5,6]
];
console.log(matrix[2][2])
console.log(matrix[1][1])
console.log(matrix[2][1])

