console.log("Hello!")
console.log(7==7.0);
console.log(undefined==NaN);
//false=>0
//true=>1
//null=>NaN
//undefined=>NaN
//""=>false
//{}=>
//[]=>0


const storedPIN=1234;
let myEnteredPin=1234;
console.log(`Is the Code Correct? \n${storedPIN===myEnteredPin}`)


let savedThemePreference="Dark";
currentSelectedTheme="Dark";
let isTheme=savedThemePreference===currentSelectedTheme;
console.log(`Is the current theme same as saved theme preferance?\n \t\t\t\t\t\t\t${isTheme}`)


let browserCurrentLanguage="English";
let codeLanguage="Python"
let isNotMatched=browserCurrentLanguage!=codeLanguage;
console.log(`Is the browser current language not same as the code's language(true/false)? ${isNotMatched}`)


let userAge=17;
let permittedAge=18;
isDifferent=userAge!=permittedAge;
console.log(`Is the user age different from permitted age? ${isDifferent}\n Note:-Answer should be in true or false. `)

let scannedProductID="AGR123467";
let storedProductID="AGR134562";
let isMatch=scannedProductID===storedProductID;
console.log(`Is the Scanned Product ID matches with Stored Product ID ? ${isMatch}\nNote:The Output Should Be in 'true' or 'false'`)

console.log(Boolean(NaN));
console.log(Boolean([]));
console.log(Number(undefined));
console.log(Number(NaN));
console.log()

let havePanCard=false;
let haveAadharCard=true;
let haveVoterID=false;
let isUserVerified=haveAadharCard||havePanCard||haveVoterID;
console.log(`Q.>Is The User Verified?\nAns:-${isUserVerified}.`)


let isNewUser=false;
let isNotPurchasedin30Days=true;
let isOfferApplied=isNewUser||isNotPurchasedin30Days;
console.log(`Q.>Is Offer Applicable for the user?\nAns:-${isOfferApplied}`)


let isUserNotAlreadyLoggedIn=true;
let canSignUp=!isUserNotAlreadyLoggedIn;
console.log(canSignUp)

//Increament and Decrement
let a=10;
let b=15;
let c=a++;
let d=b--;
console.log(a,c,b,d)

let lives=5;
lives--;
console.log(lives);


let likes=100;
let userClick=++likes;
console.log(`The number of Likes is ${likes}`)


let timer=100;
let countdown=--timer;
console.log(`The time in stopwatch after countdown is  ${timer}`)
console.log(4>"3")