let n = parseInt(prompt("Nhập vào một số nguyên dương: "));
let sum = 0;
let i = 1;

while (sum % 2 === 0) {
    if (i > n) {
        break;
    }
    console.log(i);
    sum += i;
    i++;
}

console.log("Tổng các số từ 1 đến " + (i - 1) + " là: " + sum);
