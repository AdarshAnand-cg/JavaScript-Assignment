students=[
    ["Adarsh", [96,69,84]],
    ["Yash" ,[82,91,87]],
    ["Zaheer" , [91,83,94]]
];

for(i = 0; i < students.length; i++){
    let studentName = students[i][0];
    let marks = students[i][1]
    let totalMarks = 0

    for(j = 0; j < students[i][1].length; j++){
        totalMarks += marks[j]
    } 
    let avg = totalMarks / marks.length

    console.log("------------------");
    console.log("Name: " + studentName);
    console.log("Marks: " + marks.join(","));
    console.log("Total: " + totalMarks);
    console.log("Average: " + avg);
    console.log("------------------");
}

let scores = [12,45,73,23]
let largest = -Infinity
let secondlargest = -Infinity
for(const score of scores){
    if(score > secondlargest && score < largest){
        secondlargest = score
    }else if(score > largest){
        secondlargest = largest
        largest = score
    }
    
}
console.log(`The Second Largest Number in ${scores} is ${secondlargest}`)
let bag=""
const matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// for(let i = 0; i < matrix.length; i++){
//     bag += matrix[1][i] + " " 
// }console.log(bag)

// for(let i = 0; i < matrix.length; i++){
//     bag += matrix[2][i] + " "
// }console.log(bag)

for(let i = 0; i < matrix.length; i++){
    bag += matrix[i][matrix.length-i-1] + " "
}console.log(bag)