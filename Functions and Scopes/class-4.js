// Hoisting
// TDZ=>Temporary Dead Zone.Hoisting of 'let' and 'const' occurs in TDZ.
console.log(x);
// console.log(y);
// console.log(z);

var x=10;
// let y=23;  =>Creates Error thet cannot access before initialisation.
// const z=54; =>Just Like let

// But In case of function
variable()      //Calling of function is above the function decleartion.
function variable(){
    console.log("Hello,JavaScript!")
}

// Function Expression
// console.log(a) =>Can't Access 'a' before initization
let a=function(){
    console.log("Hello ECMAscript")
}
console.log(a)

let k=5;
function outer(){
    let l=23;
    function inner(){
        let m=12;
        console.log(m);
        console.log(l);
        console.log(k);
    }
    inner()
}
outer()
// Variable Shadowing
var variable=100;
function v(){
    var variable=120; //Local shadows Global as it is Inside the Function
    console.log(variable)
}
v()
console.log(variable)  //Only Global Value Matters for it.
