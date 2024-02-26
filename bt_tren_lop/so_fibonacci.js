let n = prompt("Nhập vào số nguyên dương n");
n = parseInt(n);

if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    console.log(`Số Fibonacci thứ ${n} là ${b}`);
}