// Write a function processMarks(m1, m2) that has an inner function sum to add the two marks and returns the total.

// Taking Two Inner Variable for Each Function
function processMarks(m1,m2){
    function sum(){
        let total=m1+m2;
        return total;
    };
    let totalSum=sum();
    return totalSum
}
console.log(processMarks(10,20))
// According to the question 
function processs_marks(a,b){
    function Sum(){
        let toTal=a+b;
        return toTal;
    };
    return Sum()
}
console.log(processs_marks(10,20))

// Write a function studentSummary(name, m1, m2, m3) that returns total + average.

function studentSummary(name,m1,m2,m3){
    let Total=m1+m2+m3;
    let average=(m1+m2+m3)/3
    return `The Total Marks of ${name} is ${Total} and his Averge is ${average.toFixed(2)}`
};
console.log(studentSummary("Adarsh",98,78,92))

function studentSummary(name,m1,m2,m3){
    function findTotal(){
        let Total=m1+m2+m3;
        return `The Total Marks of ${name} is ${Total} and `
    }
    
    function findAverage(){
        let average=(m1+m2+m3)/3
        return `his Averge is ${average.toFixed(2)}`  
    };
    let res1=findTotal();
    let res2=findAverage();
    return res1+res2
}
let finalResult = studentSummary("Adarsh",90,78,92)
console.log(finalResult)

// Scopes 
var college = "CodingGita";

function showCollege() {
    console.log(college);
}

showCollege();       // CodingGita
console.log(college); // CodingGita

// Var= totoally ignores the block scope

if(true){
    var y = 20; //It doesn't show error
    // let y =20; it shows the error 
}
console.log(y)

for(var x=12;x<=18;x++){
    if(x%2==0){
        continue
    }
    var f=12; //Doesn't Show Error.
    // let f=12; =>It shows Error.
}
console.log(`${x},${f}`)


function myFunc(){
    for(var i=1;i<=5;i++){
        console.log("Inner i",i)  //
    }
}
x=12;  //
console.log(x);
var x=10;