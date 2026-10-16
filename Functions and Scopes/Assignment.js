// Question-1
// Function is a kind of box which stores some block of codes which can be reused anywhere in our whole codeanywhere by calling it .It leads to make code readability easy and make our code more time efficient

// Question-2
function greetStudents(name){
    return `Hello ${name} ,Welcome to CodingGita!`
}
console.log(greetStudents("Adarsh"))
console.log(greetStudents("Rohan"))

//Question-3
// Hoisting in JavaScript is a behavior where the interpreter allocates memory for variable and function declarations before executing the code.For function declarations (functions defined using the function keyword), the entire function—both its name and its body—is fully hoisted to the top of its containing scope. This allows you to successfully invoke the function in your code even before the line where it is officially defined

// Question-4
function calculateAverage(a, b, c) {
    return `Average: ${(a + b + c) / 3}`;
}
console.log(calculateAverage(10,20,30))

// Question-5
// Parameters :-Variables defined inside the function defination
// Argument :-Actual Values which is used on the time of function calling

function multiply(x, y) {  //   x,y==> Parameters
    return x * y;
}
console.log(multiply(12, 5)); //here 12,5 ==>Argument

// Question-6
function isEven(num){
    if(num%2==0){
        return "This Number is Even"
    }else{
        return "This Number is Odd"
    }
}console.log(isEven(24))
console.log(isEven(17))

// Question-7
function findPercentage(obtainedMarks,totalMarks){
    return `${(obtainedMarks*100)/totalMarks}%`
}
console.log(findPercentage(456,500))

// Question-8
// If a function does NOT return something, it returns undefined
function area(length, width) {
    console.log(length * width);
}
console.log(area(10, 5));

// Question-9
function calculateSimpleinterest(principal,rate,time){
    let SI=(principal*rate*time)/100;
    return SI
}
console.log(10000,5,2)

// Question-10
function student(Name,Marks){
    return `Student ${Name} has scored ${Marks} marks.`
}
console.log("Adarsh",87)
console.log("Rahul",98)

// Question-11
// 
// 
function displayAge(){
    let age=20
    console.log(age)
} 
displayAge()

let course="JavaScript";
function subject(){
    console.log(course)
}

subject();

// Question-12
function analyzeStudent(name,m1,m2,m3){
    let totalMarks=m1+m2+m3;
    let Av=(m1+m2+m3)/3
    return `${name} scored total ${totalMarks} with average ${Av}`

}
console.log(analyzeStudent("Harry Potter",93,83,76))
console.log(analyzeStudent("Percy Jackson",96.,87,72))

// Question-13
// Nested Function means a function contai ning some block of code inside an Parent Function
function studentReport(name,m1,m2,m3){
    function total(){
         sum=m1+m2+m3
    }
    total()
    return `${name}=> total marks: ${sum} `

}
console.log(studentReport("Adarsh Anand",76,86,89))

// Question-14
function generateReport(name,m1,m2,m3){
    Sum = m1+m2+m3;
    average=(m1+m2+m3)/3
    let a;
    if(average>=40){
        a="Pass"
    }else{
        a="Fail"
    }
    return `Student Name:${name}\n\tTotal Marks:${Sum}\n\tAverage:${average}\nResult:${a}`
}
console.log(generateReport("Ravi Kumar",54,23,12))
console.log(generateReport("Dhawni Kumari",74,83,52))

// Question-15
function sumOfThree(a,b,c){
    return a+b+c
}
function averageOfTwo(x,y){
    return (x+y)/2
}
function maxOfTwo(a,b){
    if ( a > b){
        return a
    }else{
        return b
    }
}
function fullName(first,last){
    return first+" "+last
}
console.log("Sum:", sumOfThree(10, 20, 30));
console.log("Average:", averageOfTwo(20, 40));
console.log("Maximum:", maxOfTwo(15, 25));
console.log("Full Name:", fullName("Adarsh", "Anand"));
//Question-15






//Question-16

let calculateGrade = function(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 40) {
        return "D";
    } else {
        return "F";
    }
};

console.log("Grade for 95:", calculateGrade(95));
console.log("Grade for 82:", calculateGrade(82));
console.log("Grade for 67:", calculateGrade(67));
console.log("Grade for 45:", calculateGrade(45));
console.log("Grade for 32:", calculateGrade(32));


//Question-17

function calculateFinalPrice(price, discountPercent) {
    let discount = price * discountPercent / 100;
    let finalPrice = price - discount;
    return finalPrice;
}

console.log("Final Price:", calculateFinalPrice(2500, 15));
console.log("Final Price:", calculateFinalPrice(1200, 10));


//Question-18

let celsiusToFahrenheit = function(c) {
    return (c * 9 / 5) + 32;
};

let fahrenheitToCelsius = function(f) {
    return (f - 32) * 5 / 9;
};

console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25));
console.log("100°C to Fahrenheit:", celsiusToFahrenheit(100));

console.log("77°F to Celsius:", fahrenheitToCelsius(77));
console.log("32°F to Celsius:", fahrenheitToCelsius(32));


//Question-19 (a)

// No, a function expression cannot normally be called before it is defined.
// Because the variable stores the function only when the assignment is executed.


//Question-19 (b)

function calculateSquare(number) {
    function square(n) {
        return n * n;
    }

    return square(number);
}

console.log("Square:", calculateSquare(5));
console.log("Square:", calculateSquare(8));


//Question-20

function processStudent(name, m1, m2, m3) {

    function calculateTotalAndAverage() {
        let total = m1 + m2 + m3;
        let average = total / 3;

        return {
            total: total,
            average: average
        };
    }

    let result = calculateTotalAndAverage();
    let status;

    if (result.average >= 40) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    return "Student Name: " + name +
           "\n\tTotal Marks: " + result.total +
           "\n\tAverage: " + result.average.toFixed(2) +
           "\n\tResult: " + status;
}

console.log(processStudent("Rahul", 80, 75, 90));
console.log(processStudent("Amit", 45, 50, 55));
console.log(processStudent("Priya", 30, 25, 35));

function compareAverages(avg1, avg2) {
    if (avg1 > avg2) {
        return "First average is higher.";
    } else if (avg2 > avg1) {
        return "Second average is higher.";
    } else {
        return "Both averages are equal.";
    }
}
console.log(compareAverages(80, 75));
console.log(compareAverages(60, 85));
console.log(compareAverages(70, 70));