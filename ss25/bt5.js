let n = parseInt(prompt("Nhập vào số nguyên n: "));
let count = 0;

while (n > 0) {
    let digit = n % 10;
    if (digit % 2 === 0) {
        count++;
    }
    n = Math.floor(n / 10);
}

console.log("Số nguyên n có " + count + " chữ số chẵn.");
