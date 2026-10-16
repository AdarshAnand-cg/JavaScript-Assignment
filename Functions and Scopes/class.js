//Variables defined insides the function defination(declarartion).
function functionName(Name){
    return("Welcome To Coding Gita, "+Name) //Function with argument and Parameters
};

console.log(functionName("Adarsh"))

function add(a,b){
    return(a+b)
};
console.log(add(10,34))

function product(a,b){
    return(a*b)
};
console.log(product(8,11))

function division(a,b){
    let k=a/b;
    return k.toFixed(3); //Like.2f in Python .To Stop Numbers After the decimal
};
console.log(division(10,3))

// function division(a,b){  
//     console.log(a/b)    //Without Return:-It Shows Undefined if outside isn't console.log is used.
// }console.log(division)

// FUNCTION SCOPE[ Scope]
function myFunction(){
    // return "Hello"
    let x = 10;
    console.log(x)
};
myFunction()
// console.log(myFunction); //Error:myFunction is not Defined

let batch = "CSE";

function printBatch() {
    console.log(batch);
}

printBatch(); // CSE

// Write a function isEven(num) that returns true if the number is even.
function isEven(num){
    if(num%2==0){
        return("True")
    }else{
        return("False")
    }
}
console.log(isEven(12))