//==================================================
//      Question-36
//==================================================
sayHello();
function sayHello() {
    console.log("Hello from CodingGita");
}
/*
Q.>Explain why this works even though the function is called before it is written.
Ans:-Here, Output is 'Hello from Codinggita' as function is completely hoisted so 
it finds the function calling anywhere in the code,if  it is found then it prints
it in output
*/
greet();
var greet = function() {
    console.log("Hi");
};

//==================================================
//      Question-37
//==================================================
display();
function display() {
    console.log("Function is hoisted completely");
}

/*
Q.>What will be the output? Explain the difference from a normal var variable
Ans:-The Output of the given function is as follows:-
Function is hoisted completed. As,function is completely hoisted
so whether you call function before the the function declaration  or after it 
does make any effect,it gives the output as the code written in code inside the 
function.If we use 'var' instead of keeping it in function,it is half hoisted
means,JS knew that a variable exists but its value is not defined so,it shows
error.
*/

//==================================================
//      Question-38
//==================================================
greet();
var greet = function() {
    console.log("Hi");
};

/*
Q.> Find and explain the issue (if any):
Ans:-The code will give an error because only the variable declaration
is hoisted, not the function value. JavaScript treats it approximately
like this:
var greet;
greet();
greet = function() {
    console.log("Hi");
};
So, greet() is called when greet is undefined. This is different from
a function declaration because a function declaration is completely
hoisted, including its name and body.
*/


//==================================================
//      Question-39
//==================================================
console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());

/*
Q.> Predict the output:
Ans:-The Output of the given function is as follows:-
function
I am hoisted

As the complete function declaration is hoisted, myFunc is available
before its actual declaration. Therefore, typeof myFunc gives
"function" and myFunc() returns "I am hoisted".
*/


//==================================================
//      Question-40
//==================================================
var message = "Hello from the global variable";
showMessage();
function showMessage() {
    console.log(message);
}

/*
Q.> Write a small program that calls a function before its declaration.
Ans:-The Output of the given function is as follows:-
Hello from the global variable

As the complete function is hoisted, showMessage() can be called before
its declaration. The function also accesses the global variable
message, which is available in the global scope.
*/

