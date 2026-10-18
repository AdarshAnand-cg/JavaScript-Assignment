//==================================================
//      Question-1
//==================================================
var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();
/*
Q1.>Which variable is declared in the global scope?
Ans:- city
Q2.>Which variable is declared inside the function?
Ans:-country
Q3.>Can both variables be accessed inside "display()"?
Ans:-Yes,Both Variable can be accessed inside display() 
as first variable 'city' is global scope ,it can accessed 
either inside the function or outside the function and 
second variable 'country' is local scope which can accessed 
inside the functon only.
*/ 

//==================================================
//      Question-2
//==================================================
var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);

/*
Q2.>What is the output?
Ans:-
550
500

Q2.>Why?
Ans:- 'price' is a global variable, so it can be accessed inside the
function. 'tax' is a local variable, so it can be accessed only inside
the 'calculate()' function.
*/


//==================================================
//      Question-3
//==================================================
var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}

/*
Q3.>What is the scope of each variable?

Ans:-
college = Global Scope
name = Function Scope
age = Function Scope
subject = Function Scope

Q3.>Why?
Ans:- 'college' is declared outside all functions, so it has global scope.
'name' and 'age' are declared inside the 'student()' function, so they
have function scope. 'subject' is declared inside the 'teacher()'
function, so it also has function scope.
*/


//==================================================
//      Question-4
//==================================================
function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
second();

/*
Q4.>What will happen?
Ans:- An error will occur.

Q4.>Why?
Ans:- 'number' is declared inside the 'first()' function, so it has
function scope. It cannot be accessed inside the 'second()' function.
Therefore, 'number' is not defined in 'second()'.
*/


//==================================================
//      Question-5
//==================================================
var city = "Surat";

function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}

display();
console.log(city);

/*
Q5.>Which variable is declared in the global scope?
Ans:- city

Q5.>Which variable is declared inside the function?
Ans:- country

Q5.>Can both variables be printed inside the function?
Ans:- Yes, because 'city' is a global variable and 'country' is a local
variable of the 'display()' function.

Q5.>Can the global variable be printed outside the function?
Ans:- Yes, 'city' can be accessed outside the function because it has
global scope.
*/


//==================================================
//      Question-6
//==================================================
var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);

/*
Q6.>What is the output?
Ans:-
I like Cricket
Cricket

Q6.>Why?
Ans:- 'game' is a global variable, so it can be accessed both inside
the 'play()' function and outside the function.
*/


//==================================================
//      Question-7
//==================================================
var language = "English";

function showLanguage() {
    console.log(language);
}

function changeLanguage() {
    language = "Gujarati";
}

showLanguage();
changeLanguage();
showLanguage();
console.log(language);

/*
Q7.>What is the output?
Ans:-
English
Gujarati
Gujarati

Q7.>Why does the output change?
Ans:- 'language' is a global variable. The 'changeLanguage()' function
changes the value of the global variable from "English" to "Gujarati".
Therefore, the next time 'showLanguage()' is called, it prints
"Gujarati".
*/


//==================================================
//      Question-8
//==================================================
function displayMarks() {
    console.log(marks);
}

var marks = 75;
displayMarks();

/*
Q8.>Will this code produce an error?
Ans:- No, this code will not produce an error.

Q8.>What is the output?
Ans:-
75

Q8.>Why?
Ans:- 'marks' is declared using 'var'. The declaration of 'marks' is
hoisted to the top of its scope. When 'displayMarks()' is called,
the value 75 has already been assigned to 'marks'.
*/


//==================================================
//      Question-9
//==================================================
var color = "Red";

function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}

showColor();
console.log(color);
console.log(message);

/*
Q9.>What is the output?
Ans:-
Favorite color: Red
Red
ReferenceError: message is not defined

Q9.>Which statement causes an error?
Ans:- console.log(message);

Q9.>Why?
Ans:- 'message' is declared inside the 'showColor()' function, so it has
function scope. It cannot be accessed outside the function.
'color' is a global variable, so it can be accessed both inside and
outside the function.
*/


//==================================================
//      Question-10
//==================================================
var school = "Sunrise School";

function showSchool() {
    console.log(school);
}

function updateSchool() {
    school = "Green Valley School";
}

showSchool();
updateSchool();
showSchool();
console.log(school);

/*
Q10.>What is the output?
Ans:-
Sunrise School
Green Valley School
Green Valley School

Q10.>Why?
Ans:- 'school' is a global variable. 'showSchool()' prints its value.
'updateSchool()' changes the value of the global variable to
"Green Valley School".
*/


//==================================================
//      Question-11
//==================================================
function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}

calculateTotal();
console.log(first);

/*
Q11.>What is the output?
Ans:-
300
ReferenceError: first is not defined

Q11.>Why?
Ans:- 'first' is declared inside the 'calculateTotal()' function.
Therefore, it has function scope and cannot be accessed outside the
function.
*/


//==================================================
//      Question-12
//==================================================
// function employee() {
    // var salary = 30000;
// }

// employee();
// console.log(salary);

/*
Q12.>What is the error?
Ans:- ReferenceError: salary is not defined

Q12.>Why?
Ans:- 'salary' is declared inside the 'employee()' function. It is a
local variable and has function scope. Therefore, it cannot be
accessed outside the function.
*/


//==================================================
//      Question-13
//==================================================
var number = 15;

function test() {
    var number = 25;
    console.log(number);
}

test();
console.log(number);

/*
Q.>What is the output?
Ans:-
25
15

Q.>Why doesn't the value inside the function change the global variable?
Ans:- The 'number' inside the function is a different local variable.
It has function scope. Therefore, changing or using the local
'number' does not change the global 'number'.
*/


//==================================================
//      Question-14
//==================================================
function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}

calculate();
calculate();

/*
Q14.>What is the output?
Ans:-
50
50

Q14.>Is a new local variable created each time the function is called?
Ans:- Yes, a new local variable 'result' is created each time the
function is called.

Q14.>Does the local variable remain accessible after the function finishes?
Ans:- No, the local variable cannot be accessed after the function
finishes because it has function scope.
*/


//==================================================
//      Question-15
//==================================================
function calculateArea() {
    var length = 8;
    var width = 4;
    var area = length * width;
    console.log(area);
}

calculateArea();

/*
Q15.>What is the output?
Ans:-
32

Q15.>Why?
Ans:- 'length' and 'width' are local variables of the
'calculateArea()' function. They are used to calculate the area
inside the function and cannot be accessed outside the function.
*/


//==================================================
//      Question-16
//==================================================
if (10 > 5) {
    var result = "Success";
}

console.log(result);

/*
Q16.>What is the output?
Ans:-
Success

Q16.>Why is 'result' accessible outside the if block?
Ans:- 'var' does not have block scope. It has function scope.
Since the 'if' block is not a function, the variable 'result' can
be accessed outside the 'if' block.
*/


//==================================================
//      Question-17
//==================================================
var number = 1;

if (true) {
    var number = 2;
}

console.log(number);

/*
Q17.>What is the output?
Ans:-
2

Q17.>Why?
Ans:- 'var' does not create a separate scope for an 'if' block.
Both declarations refer to the same variable. Therefore, the value
of 'number' becomes 2.
*/


//==================================================
//      Question-18
//==================================================
var message = "Start";

{
    var message = "End";
}

console.log(message);

/*
Q18.>What is the output?
Ans:-
End

Q18.>Does the standalone block create a separate scope for 'var'?
Ans:- No.

Q18.>Why?
Ans:- 'var' does not have block scope. Therefore, the 'message'
inside the block refers to the same variable declared outside
the block. Its value changes from "Start" to "End".
*/


//==================================================
//      Question-19
//==================================================
if (false) {
    var result = 100;
}

console.log(result);

/*
Q19.>What is the output?
Ans:-
undefined

Q19.>Why?
Ans:- The 'var result' declaration is hoisted even though the
condition is false. However, the assignment 'result = 100' does not
execute because the condition is false.

Therefore, 'result' exists but its value is undefined.
*/


//==================================================
//      Question-20
//==================================================
// if (true) {
    // let secret = "Hidden";
// }

// console.log(secret);

/*
Q.>What is the error?
Ans:- ReferenceError: secret is not defined

Q.>Why?
Ans:- 'let' supports block scope. Therefore, 'secret' can be accessed
only inside the 'if' block. It cannot be accessed outside the block.

The 'secret' variable is therefore protected from access outside
the 'if' block.
*/
//==================================================
//      Question-21
//==================================================
for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);

/*
Q.>Explain why "number" can be accessed after the loop.
The number can be accessed after the loop as 'var' does not 
follows block scope,it works on functional scope .The written 
code is inside the function and console.log() is outside the function,
so only var gives output as 8 whether let or const gives 2 as output.
Hence it is accessed after the loop.
*/
//==================================================
//      Question-22
//==================================================
var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);
/*
Q.>Explain what happens to the original value of "count"
Ans:-Outside the loop there is console.log(count) which 
gives output as 4 whereas the coun t inside the loop 
gives 1,2,3 as output
*/
//==================================================
//      Question-23
//==================================================
let i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);
/*
Q.>Is "i" accessible after the loop? Why?
Ans:-Yes,i is Accessible after the loop because , it is general
case of while loop and so it is easily accessible even with let or const  
*/
//==================================================
//      Question-24
//==================================================
for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);
/*
Q.>Does the final statement cause an error? What value does "item" contain?
Ans:-No,The Final Statement Doesn't Lead to an error as it is a general code 
of for loop question the last statement gives a single output which is '4' as
var ignores block scope so,the last statement which is outside the for loop doesn't 
gives error instead it print by adding one to the last output of for loop as per inside
 the loop it goes till three and then due to increment in 'i',it becomes 4 and inside loop
 'i' goes till 3 because 4<=3 becomes wrong .so,it is wrong for inside consoe.log()
*/
//==================================================
//      Question-25
//==================================================
for (var step = 1; step <= 4; step++) {
    console.log(step);
}
console.log(step);
/*
Q.>Explain the difference between your solution and the original code.
Ans:-In the Original solution,there is use of 'var',which leads to restricts 
the error as it ignores block scope ,but when 'var' is replaced by 'let' ,it 
makes ReferenceError as it works on block scope and can't handle the print statement outside 
the loop
*/
//==================================================
//      Question-26
//==================================================
function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();
/*
Q.>Explain why "number" is accessible after the loop but not outside the function.
Ans:-The variable can be accessed inside the loop as it is called outside .Now ,the
question is why we can't access it outside the function,this is because any code
whether it is for loop or while loop or any conditional statement as the variable number
is declared using var, which is function-scoped. This means it is visible anywhere inside 
the calculate() function—including after the loop finishes. However, because it is bound 
to the function's scope, it is completely hidden from the outside code and cannot be 
accessed outside the function.
*/
//==================================================
//      Question-27
//==================================================
function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
console.log(marks);
/*
Q.>Explain your answer for each occurrence of "marks".
Ans:-If we uses let or const instead of var,then it 
causes error as ,they follows block scope and var ignores the 
block scope and obeys functional scope.so the console.log
inside the loop prints 60 and 70,whether the console.log outside
the function gives 80 as the output ,by increament of 10 to the the 
last output of the marks inside the loop
*/
//==================================================
//      Question-28
//==================================================
function test() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
test();

/*
Q.>How many times does the loop execute?
Ans:-The loop executes 3 times because the value starts from 5 and runs
while value is less than 8. It prints 5, 6 and 7. After the last increment,
the value becomes 8, so the loop stops.
*/


//==================================================
//      Question-29
//==================================================
function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i);
calculate();

/*
Q.>Find and explain the error. Why does the order of these statements matter?
Ans:-The first console.log(i) gives a ReferenceError because i is declared
inside the calculate() function. The variable i is function-scoped because
it uses var, so it can only be accessed inside the calculate() function.
The order matters because console.log(i) is written before the function
is called, but even if calculate() was called first, i would still not be
accessible outside the function.
*/


//==================================================
//      Question-30
//==================================================
function printNumbers() {
    for (var number = 1; number <= 5; number++) {
        console.log(number);
    }
    console.log("Final:", number);
}
printNumbers();
console.log(number);

/*
Q.>Explain the expected error.
Ans:-The loop prints numbers from 1 to 5. After the loop, number becomes 6,
so the console.log inside the function prints 6. Because number is declared
using var, it is function-scoped and can be accessed anywhere inside the
printNumbers() function. However, it cannot be accessed outside the function,
so the last console.log(number) gives a ReferenceError.
*/


//==================================================
//      Question-31
//==================================================
console.log(score);
var score = 90;
console.log(score);

/*
Q.>Explain why the first statement does not produce a ReferenceError.
Ans:-The first console.log prints undefined because var variables are
hoisted. The declaration of score is moved to the top of its scope during
hoisting, but its value is not assigned until var score = 90 is reached.
The second console.log prints 90.
*/


//==================================================
//      Question-32
//==================================================
var a = 10;

function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();

/*
Q.>Why doesn't the first console.log() print the global value of "a"?
Ans:-The first console.log() prints undefined because the local variable a
is declared inside the test() function using var. Due to hoisting, the local
declaration of a is moved to the top of the function. Therefore, JavaScript
uses the local a instead of the global a. Its value is undefined until
a = 20 is executed. The second console.log() prints 20.
*/


//==================================================
//      Question-33
//==================================================
console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);

/*
Q.>Identify which statements produce undefined.
Ans:-The first console.log(first) and the second console.log(second) both
produce undefined because the var declarations are hoisted to the top,
but their values are assigned later. The third console.log(first) prints
100 and the fourth console.log(second) prints 200.
*/


//==================================================
//      Question-34
//==================================================
function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();

/*
Q.>Rewrite the code to represent how the variable declaration is handled during hoisting.
Ans:-The declaration of total is hoisted to the top of the function, but
the value 50 is assigned at its original position.
*/

function calculate() {
    var total;
    console.log(total);
    total = 50;
    console.log(total);
}
calculate();


//==================================================
//      Question-35
//==================================================
var price = 100;

function showPrice() {
    console.log(price);
    var price = 500;
}

showPrice();
console.log(price);

/*
Q.>What does the first console.log() inside the function print?
Ans:-It prints undefined because the local price variable is hoisted to
the top of the showPrice() function.

Q.>What does the final console.log() print?
Ans:-It prints 100 because the final console.log() is outside the function
and accesses the global price variable.

Q.>How does hoisting affect the local variable price?
Ans:-Hoisting moves the declaration of the local price to the top of the
function. Therefore, the local price exists inside the function before
price = 500 is executed. It hides the global price inside the function,
so the first console.log() prints undefined instead of 100.
*/

