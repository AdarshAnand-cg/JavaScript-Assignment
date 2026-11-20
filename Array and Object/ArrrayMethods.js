// var array = [5, 10, 15, 20, 25, 30]           //<<<<<<<<<<<<<<========>>>>>>>>>>>>>>>\\    
// var slice = array.slice(2,6)                 //                OUTPUTS                \\
// //                                          //<<<<<<<<<<<<<<<<========>>>>>>>>>>>>>>>>>\\  
// console.log(slice)                         //        [ 15, 20, 25, 30 ]                 \\
// console.log(array)                        //      [ 5, 10, 15, 20, 25, 30 ]              \\
// console.log(array.push(35,40,45))        //                      9                        \\
// console.log(array)                      //      [ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]      \\
// console.log(array.unshift(-10,-5,0))   //                        12                         \\
// console.log(array)                    // [ -10, -5,  0,  5, 10, 15, 20, 25, 30, 35, 40, 45 ] \\
// //                                   //<<<<<<<<<<<<<<<<<<<<<<<========>>>>>>>>>>>>>>>>>>>>>>>>\\


// newArray=[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
// console.log(newArray.push(22))
// console.log(newArray.pop())
// console.log(newArray.unshift(-2,0))
// console.log(newArray.shift())
// console.log(newArray.indexOf(10))
// console.log(newArray.lastIndexOf())
// console.log(newArray.includes(20))
// console.log(newArray.reverse())


// festivals=[ "Holi", "Eid", "Navratri", "Ganesh Chaturthi"]
// festivals.splice(3,1,"Chhath Pooja", "Makar Shankranti")  //Here 3 =>Index from where adding of element occurs
// console.log(festivals)                                    // 1 =>Deleting of the object at the index 3 previosly


// // Remove two elements starting from index 1 in an array of 5 numbers and insert a new number at that position. Print the final array.
// let nums = [ 1, 2, 3, 4, 5, 6 ]
// nums.splice(1,2,2.5)
// console.log(nums)

// let movies = [ "Interstellar", "Inception", "The Persuit of Life", "It"]
// favourite=movies.toString()
// console.log(favourite)

// let numbers = [ 2, 5, 6, 4, 7, 1, 9 ]
// console.log(numbers.indexOf(9))
// console.log(numbers.lastIndexOf(7))
// console.log(numbers.lastIndexOf(7))


let NumBers = [ 12, 14, 17, 23, 35, 67]
NumBers.fill(10)
console.log(NumBers)
NumBers.fill(7,2,5)   // Here 7 means the elements are changed to 7.
console.log(NumBers)  // Here 2 is the starting Index and The 5 is the Ending Index (which is exclueded as per the range standards).

let Names = [ "Adarsh", "Neel", "Ojaswa", "Pal", "Divyansh", "Lakshay", "Ashok", "Mohit"]
let Marks = [ 95, 65, 87, 96, 35, 75, 100, 120]
Names.sort()   //It Makes sort of Element in Alphabetical Order.
Marks.sort()  //It Makes sort of Element in Numeric Order.
console.log(Marks)
console.log(Names)

// Store marks of 5 students and use array methods.
var marks = [85, 90, 75, 92, 88];

// Add a new student's marks
marks.push(80);

// Remove lowest marks (last student)
marks.pop();

// Sort (string-based in Unit 1)
marks.sort();

console.log(marks); 
console.log("Top 3:", marks.slice(0, 3));


// Modify the above example: After sorting, extract the last 2 marks using slice() and print them.
var marks = [85, 90, 75, 92, 88]
marks.sort()
console.log(marks.slice(-2))

// Add one more mark using unshift() instead of push() and observe the difference in the final sorted array.
marks.unshift(54)
marks.sort()
console.log(marks)

marks.splice(2,2,99,94)
integers = [ 98, 95, -58, -69, -71, 57 ]    // Not Applicable for negative Numbers Sorting <it Basicallly Sorts alphabetically not Numerically.

integers.sort((a, b) => a-b);
console.log(integers)
