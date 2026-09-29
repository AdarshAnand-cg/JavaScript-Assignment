//if,else-if,else:
let num = 6;
if(num==0){
    console.log(`The Number '${num}' is 'Zero'`)
}else if(num>0){
    console.log(`The Number '${num}' is Positive`)
}else{
    console.log(`The Number '${num}' is Negative`)
}
//Marks based Question
let marks = 112;
if(85<=marks && marks<=100){
    console.log("Excellent Performance")
}else if(75<=marks && marks<=84){
    console.log("Very Good")
}else if(65<=marks && marks<=74){
    console.log("Good")
}else if(50<=marks && marks<=64){ 
    console.log("Average")
}else if(35<=marks && marks<=49){
    console.log("Not Good")
}else if(0<=marks && marks<=34){
    console.log("You Are Failed")
}else{
    console.log("Invalid Input\nPlease Try Again")
}

//Q>.Check A Number is positive and then it is Even Number//
let number=26
if(num>0){
    if(num%2==0){
        console.log("This is an Even Number")
    }else{
        console.log("This is an Odd Number")
    }
}else{
    console.log("This Is a Negative Number")
}


let studentMarks=96;
if(studentMarks>35){
    if(studentMarks>=90 && studentMarks<=100){
        console.log("Congrates!You Have Passed With Excellent Marks")
    }else{
        console.log("You Have Passed")
    }
}else if(studentMarks>=0 && studentMarks<=34){
    console.log("You Are Failed")
}else{
    console.log("Invalid Input")
}
