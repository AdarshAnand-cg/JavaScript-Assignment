//while loop
let i=5;
while(i>0){
    console.log(i)
    i--
}

bag=""
for(let i=0;i<=5;i++){
    row=""
    for(let j=0;j<=i;j++){
        row=row+"* "
    }console.log(row)
}
//Sum of First Ten Natural Loop using For Loop
let Sum=0
for(let i=1;i<=10;i++){
    Sum+=i
}
console.log(Sum)

//Sum ofFirst Ten Natural Loop Using while loop
let num=1
let sum=0
while(num<=10){
    sum+=num
    num++
}console.log(sum)

//Print 1 to 50 using while loop in one line
let number=1;
let one=""
while(number<=50){
    one+=number+" "
    number++
}console.log(one)

//Reversing A Number Using While Loop
let num1=1235
let reverseNum=0
while(num1>0){
    let digit=num1%10;
    num1=Math.floor(num1/10) //123
    reverseNum=((reverseNum*10)+digit)
}console.log(reverseNum)

//Multipliaction Table of 29 using while loop
let tableNum=1
while(tableNum<=10){
    console.log(`29×${tableNum}=${29*tableNum}`)
    tableNum++
}
//DO WHILE
//But Executes a block of Code atleast one 
// do{
//     //code
// }while(condition)
let q=15;
do{
    console.log("Hello")
    q++;
}while(q<=10)

//By Do-while Loop , print 10 to 1
let a=10;
do{
    console.log(a)
    a--;
}while(a>0);

//By Dpo while Loop,Reverse A Number
let numb=3547;
let reverse=0
do{
    let last_digit = numb%10
    reverse=Math.floor(numb/10)+last_digit
}