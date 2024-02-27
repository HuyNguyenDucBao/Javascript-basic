let n = parseInt(prompt("Nhập vào số nguyên dương n: "));
let fib = [0, 1];

for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log("Số Fibonacci thứ " + n + " là: " + fib[n]);
