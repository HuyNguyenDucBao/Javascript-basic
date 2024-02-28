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