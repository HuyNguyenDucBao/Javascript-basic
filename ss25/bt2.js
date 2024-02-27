let a = parseInt(prompt("Nhập vào số nguyên dương a: "));
let b = parseInt(prompt("Nhập vào số nguyên dương b: "));

let sumOdd = 0;
let sumEven = 0;

for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log("Tổng các số chẵn từ " + a + " đến " + b + " là: " + sumEven);
console.log("Tổng các số lẻ từ " + a + " đến " + b + " là: " + sumOdd);
