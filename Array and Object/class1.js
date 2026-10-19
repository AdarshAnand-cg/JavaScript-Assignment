// An array is a special JavaScript data structure used to store a list of values
// An array is an ordered collection of values. Each value has a unique index (position).

var numbers = [10, 20, 30, 40];
// 10 is at index 0
// 20 is at index 1
// 30 is at index 2
// 40 is at index 3


// 3. Accessing Values in an Array
// METHOD-2(Using the Array constructor (less common)
let students=new Array("Adarsh","Anand","Singh")
console.log(students)
// For extraction of any student name from the array
console.log(students[10])
// for last name extraction from the array
console.log(students[2])
console.log(students.at(-1))
console.log(students[students.length - 1])

// 4. Updating Values
let marks=[45,65,78,87,89,94]
marks[4]=65
marks[0]=93
console.log(marks)

// 5. Array Length
let arr=[39,54,76,87,56]
console.log(arr.length)

// 6. Looping Through Arrays
let users=["John","Harry","Henry","David"]
for(let i=0;i<=users.length-1;i++){
    console.log(users[i])
}

// Create Array of 5 students names and print each name using loop
let names=["John Snow","Arya Stark","Joffrey Baratheon","Theon Greyjoy","Tyrion Lannister"]
for (let i=0;i<names.length;i++){
    console.log(names[i])
}

// Updation of value in an array
mark=[23,45,77]
mark[7]=46
console.log(mark)
console.log(typeof(mark[4]))

fheufue=[32,5345,75677,65]
fheufue[1]=45
console.log(fheufue[1])

let st=new Array("hyw",432,true,23.9)
console.log(st[1])