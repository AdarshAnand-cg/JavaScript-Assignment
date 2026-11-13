// const arr = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90],
//     [100, 110, 120]
// ];

// console.log(arr[arr.length-1][arr[0].length-1])

// // Create a 2D array of 2 rows and 3 columns, update the value at position [1][1] to 100, and print the complete matrix.
// let matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
// ];
// matrix[1][1]=100;
// console.log(matrix[1][1])
// console.log(matrix)

// // Create a 2×4 matrix and print all the elements of the first row.
// let oneLiner=""
// let mat=[
//     [21,67,64,85],
//     [24,84,36,94]
// ];
// console.log(mat[0])
// for(i=0;i<4;i++){
//     if(i>=0 && i<=2){
//         oneLiner+=" "+mat[0][i]+","
//     }else{
//         oneLiner+=" "+mat[0][i]
//     }
// }console.log(`[${oneLiner} ]`)

// const marks = [
//     [85, 90, 92], // Jenil
//     [70, 75, 80], // Arjun
//     [88, 82, 89], // Krishna
//     [86, 91, 79]  // Arnav
// ];

// for (let i = 0; i < marks.length; i++) {
//     const studentMarks = marks[i];
//     const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
//     const avg = total / 3;
//     console.log("Student " + (i + 1) +"\n"+" Total: " + total+"\n"+ " average: " + avg.toFixed(2));
// }

// // Modify the above code so that it also prints the total marks of each student.
// // Add one more student’s marks in the array and calculate their average too.


// const arr = [10, 20, 30];
// console.log(arr[3]);

// let arr = [10, 20, 30];
// arr[arr.length] = 40;
// console.log(arr)

student=["a","b","c","d","e"]
for(const i of student){
    console.log(i)
}
let sum=0
let marks = [90,72,85,53,65]
let highest = -Infinity
let lowest = Infinity
for(const mark of marks){
    highest = mark > highest ? mark : highest
    lowest = mark < lowest ? mark : lowest
    sum+=mark
}
console.log(`The Highest Number Among Them is ${highest}The Lowest Number Among Them is ${lowest}\n`)