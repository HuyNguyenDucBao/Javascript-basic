let n = prompt("Nhập vào một số nguyên dương n:");
n = parseInt(n);

if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    let reversedNumber = parseInt(n.toString().split('').reverse().join(''));
    console.log(`Số đảo ngược của ${n} là ${reversedNumber}`);
}
