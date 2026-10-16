// for( let i=1;i<=20;i++){
//     if(i==13){
//         break;//For Stopping any number after that condition is satisfied.
//     }
//     console.log(i)
// }

// for (i=1;i<=30;i++){
//     if(i%3==0 && i%7==0){
//         continue; //For skipping any Number by condition
//     }
//     console.log(i)
// }

// for( i=1;i<=20;i++){
//     if(i%2==0){
//         continue;//for skipping All the Even Number
//     }
    
// }

// for(i=1;i<=25;i++){
//     squareRoot=Math.sqrt(i)
//     if(Number.isInteger(squareRoot)){ //In-built Value for Square Root Checking
//         continue;
//     }
//     console.log(i)
// }


// // common mistake
// // for(let i=1;i<=10;i+=2){
// //     if( i==3){
// //         continue;
// //     }
// // }
// // console.log(i)

// for( i=20;i>=2;i--){
//     if(i%2==0){
//         console.log(i) //to reverse printing of even numbers.
//     }
// }

// for (i=20;i>=2;i--){
//     if(i%2!=0){
//         continue; //to reverse printing of even numbers.
//     }
//     console.log(i)
// }

// for (i=80;i>=8;i-=8){
//     console.log(i) //reverse printing of table of 8
// }

// for(i=80;i>=8;i--){
//     if(i%8==0){
//         console.log(i)//reverse printing of table of 8
//     }
// }

// for( i=10;i>=1;i--){
//     console.log(i*8)
// }

// let arr=[10, 20, 30, 40, 50];
// let bag=""
// for (let i=arr.length-1; i>=0;i--){  //Reverse printing of array value
//     bag+=+arr[i]+" "
// }
// console.log(bag)

// let factorial=1
// for(let i=5;i>=1;i--){
//     factorial*=i
//     console.log(factorial)
// }
// console.log(factorial)

// //Pattern Printing
// let star=""
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         star="*"
//     console.log(star)
//     }
    
// } console.log(star)

// let result = "";

// // Outer loop controls how far the inner loop counts up to (1 to 5)
// for (let i = 1; i <= 5; i++) {
//     // Inner loop counts from 1 up to the current value of i
//     for (let j = 1; j <= i; j++) {
//         result += j;
//     }
// }

// console.log(result);
bag=" "
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        bag=j+" "
    }console.log(bag)
}
