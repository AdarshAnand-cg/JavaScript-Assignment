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