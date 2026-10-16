//Question-1
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}


//Question-2
let num2 = 1;
let sum1 = 0;

while (i <= 10) {
    sum1 = sum1 + i;
    num2++;
}

console.log(sum1);


//Question-3
let num3 = 5;
let i3 = 1;

while (i3 <= 10) {
    console.log(num3 + " x " + i3 + " = " + (num3 * i3));
    i++;
}


//Question-4
let num4 = 58372;
let count = 0;

while (num4 > 0) {
    count++;
    num4= Math.floor(num4 / 10);
}

console.log(count);


//Question-5
let num5 = 12345;
let reverse2 = 0;

while (num5 > 0) {
    let digit = num5% 10;
    reverse2 = reverse2 * 10 + digit;
    num5 = Math.floor(num / 10);
}

console.log(reverse);


//Question-6
let num6 = 4729;
let sum6 = 0;

while (num6 > 0) {
    let digit = num % 10;
    sum6 = sum6 + digit;
    num6 = Math.floor(num6 / 10);
}

console.log(sum6);


//Question-7
let i7 = 1;

while (i7 <= 100) {
    if (i7 % 3 == 0 && i7 % 5 == 0 && i7 % 7 != 0) {
        console.log(i7);
    }
    i7++;
}


//Question-8
let num8 = 5;
let factorial = 1;
let i8 = 1;

while (i8 <= num) {
    factorial = factorial * i8;
    i8++;
}

console.log(factorial);


//Question-9
let num9 = 121;
let original = num9;
let reverse = 0;

while (num9 > 0) {
    let digit = num9 % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num9 / 10);
}

if (original == reverse) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}


//Question-10
let num10= 13;
let binary = "";

while (num10 > 0) {
    let remainder = num10 % 2;
    binary = remainder + binary;
    num10 = Math.floor(num10 / 2);
}

console.log(binary);
