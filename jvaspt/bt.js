// let a = parseInt(prompt("Nhập vào số nguyên dương a:"));
// let b = parseInt(prompt("Nhập vào số nguyên dương b:"));

// if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0) {
//     console.log("Vui lòng nhập vào hai số nguyên dương.");
// } else {
//     let arrA = [];
//     let arrB = [];
//     for (let i = 1; i <= a; i++) {
//         if (i % b === 0) {
//             arrA.push(i);
//         }
//     }
//     for (let i = 1; i <= b; i++) {
//         if (i % a === 0) {
//             arrB.push(i);
//         }
//     }
//     console.log(`Mảng A các số chia hết cho ${b} trong khoảng từ 1 đến ${a} là: ${arrA}`);
//     console.log(`Mảng B các số chia hết cho ${a} trong khoảng từ 1 đến ${b} là: ${arrB}`);
// }

let a = prompt("Nhập số nguyên dương a");
let b = prompt("Nhập số nguyên dương b");
let arr = [];

for(let i = 1; i <= Math.max(a, b); i++) {
    if(i <= a && i % b === 0) {
        arr.push(i); 
    }
    if(i <= b && i % a === 0) {
        arr.push(i);
    }
}

console.log(arr);
