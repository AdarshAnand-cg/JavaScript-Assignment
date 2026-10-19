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


//==================================================
//      Question-41
//==================================================
var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();

/*
Q.> Predict the output and explain the lookup process:
Ans:-The Output of the given function is as follows:-
2025
CSE
CodingGita

batch() first finds year in its own scope. Then it searches the outer
department() scope and finds dept. Finally, it searches the global
scope and finds institute. This searching process is called the
scope chain.
*/


//==================================================
//      Question-42
//==================================================
var globalVar = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar);
    }
    inner();
}
outer();

/*
Q.> What will happen when this code runs?
Ans:-The Output will be:-
I am global
I am outer

After that, the program gives a ReferenceError for innerVar because
JavaScript searches the inner(), outer(), and global scopes but cannot
find innerVar anywhere.
*/


//==================================================
//      Question-43
//==================================================
var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();

/*
Q.> Identify which variables are accessible inside deep():
Ans:-The Output of the given function is as follows:-
1 2 3

deep() can access a from the global scope, b from level1(), and c
from level2(). This is possible because of the scope chain.
*/


//==================================================
//      Question-44
//==================================================
var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
first();
console.log(x);

/*
Q.> Predict the output and explain:
Ans:-The Output of the given function is as follows:-
first
global

Inside second(), JavaScript finds x in the outer first() function,
so it prints "first". Outside the function, console.log(x) uses the
global x, so it prints "global". These are two different variables.
*/


//==================================================
//      Question-45
//==================================================
var country = "India";
function outer() {
    var state = "Gujarat";
    function middle() {
        var city = "Ahmedabad";
        function inner() {
            console.log(city);
            console.log(state);
            console.log(country);
        }
        inner();
    }
    middle();
}
outer();

/*
Q.> Write a nested function structure that demonstrates the scope chain:
Ans:-The Output of the given function is as follows:-
Ahmedabad
Gujarat
India

inner() accesses city from its own scope, state from middle(), and
country from the global scope. The scope chain is:
inner() -> middle() -> outer() -> global scope
*/


//==================================================
//      Question-46
//==================================================
var score = 50;
function test() {
    var score = 90;
    console.log(score);
}
test();
console.log(score);

/*
Q.> Predict the output and explain shadowing:
Ans:-The Output of the given function is as follows:-
90
50

The local score = 90 shadows the global score = 50 inside the test()
function. Therefore, inside the function 90 is printed, while outside
the function 50 is printed.
*/


//==================================================
//      Question-47
//==================================================
var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name);
}
show();
console.log(name);

/*
Q.> What will be printed? Does the local variable change the global one?
Ans:-The Output of the given function is as follows:-
Local Name
Global Name

The local name exists only inside show(). It shadows the global name
but does not permanently change it. Therefore, the global value remains
"Global Name".
*/


//==================================================
//      Question-48
//==================================================
var value = 10;
function update() {
    value = 20;
    console.log(value);
}
update();
console.log(value);

/*
Q.> Find the output and explain:
Ans:-The Output of the given function is as follows:-
20
20

Since value is not declared again inside update(), JavaScript finds the
global value and changes it to 20. This is different from using
var value = 20, which would create a local variable.
*/


//==================================================
//      Question-49
//==================================================
var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);

/*
Q.> Predict the complete output:
Ans:-The Output of the given function is as follows:-
Inside: Red
Outside: Blue

The local color variable shadows the global color variable. Therefore,
inside the function Red is printed and outside the function Blue is
printed.
*/


//==================================================
//      Question-50
//==================================================
var marks = 70;
function showMarks() {
    var marks = 95;
    console.log("Inside:", marks);
}
showMarks();
console.log("Outside:", marks);

/*
Q.> Write a program that demonstrates variable shadowing:
Ans:-The Output of the given function is as follows:-
Inside: 95
Outside: 70

The marks declared inside showMarks() is a local variable. It shadows
the global marks variable, so the values remain separate.
*/


