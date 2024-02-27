let n = parseInt(prompt("Nhập vào số nguyên dương n: "));
let S = 0;
let term = '';

for (let i = 1; i <= n; i++) {
    term += i;
    S += parseInt(term);
}

console.log("Giá trị biểu thức S = 1 + 12 + 123 + ... + 12...n với n = " + n + " là: " + S);
