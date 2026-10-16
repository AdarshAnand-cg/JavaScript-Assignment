// METHOD 1
function average(x,y){
    return (x+y)/2
}
let result=average(22,14);
console.log(result)
// METHOD 2
function avg(x,y){
    let res=(x+y)/2
    return res
}console.log(average(10,20))

// FUNCTIONAL SCOPE
function showMark(){
    let marks=79;
    console.log(marks);
}
showMark();
// console.log(marks) ==>This Leads to create Error because ,we can't write outside the function in function scope

// GLOBAL SCOpe
let mark=79;  //Variable is Assigned Outside the function
function showMarks(){
    console.log(mark)   //It can Be Written Either Inside the Functions Or Outside The Function
}
showMarks()
console.log(mark)  //Either Inside Or Outsiode The Funcrtion ,IT Doesn't Lead To an Error.

//QUESTION_3
function displayAge(){
    let age = 23;
    return age
}console.log(displayAge())


// Write a function that calculates total marks and average for a student.

function totalMarks(name,a,b,c,d){
    let total=a+b+c+d;
    let average=(a+b+c+d)/3
    average=average.toFixed(1)
    return `The Total Marks of ${name} is ${total} and his Average is ${average}`
}
console.log(totalMarks("Adarsh",98,78,81,93))
console.log(totalMarks("Anand",96,81,83,88))

// Write a function reportCard(name, m1, m2) that returns the student’s name, total, and average.

function reportCard(name,m1,m2){
    let sum=m1+m2
    let avg=(m1+m2)/2
    return `Name:${name}\n\tTotal Marks:${sum}\n\tAverage:${avg}`
}
console.log(reportCard("Adarsh Anand",79,93))
console.log(reportCard("Rohan Kumar",91,83))
console.log(reportCard("Rohit Sharma",81,93))

// Write a function checkPass(aver) that returns "Pass" if average ≥40, otherwise "Fail"
function checkPass(aver){
    if(aver>=40){
        return "Pass"
    }else{
        return "Fail"
    }
    // OR Use Ternery Operator
    // aver>=40?return "Pass":"Fail"
};
let ans=checkPass(56)
console.log(ans)

// Create A Function studentReport(name, m1, m2) and contains a inner function ,total to calculate the total marks

function studentReport(name,m1,m2){
    function Total(m1,m2){
        return m1+m2
    };
    let totalMarks=Total(m1,m2)
    return `The Total Marks Obtain By the Student is ${totalMarks}`
};
console.log(studentReport("Adarsh Annad",98,87))


// Write a function main that contains another function helper which returns "Helper function called". Call helper from inside main and return its result.

function main(){
    function helper(){
        return "Helper Function Called"
    };
    let final=helper();
    return final
}
console.log(main())

// Write a function processMarks(m1, m2) that has an inner function sum to add the two marks and returns the total.
function processMarks(){
    function sum(q,w){
        let addition=q+w
        return addition
    }
    let Ans=sum(112,342)
    return Ans
}
console.log(processMarks())