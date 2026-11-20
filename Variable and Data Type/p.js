// let arr = [2, 4, 6, 8];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 4 === 0) {
//         sum += arr[i];
//     }
// }

// console.log(sum);


let arr = [3, 6, 9, 12];
let sum = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 3 === 0) {
        if (arr[i] > 6) {
            sum += arr[i];
        }
    }
}

console.log(sum);

function test(a, b) {
    return a + b;
}

console.log(test(10, 20));
