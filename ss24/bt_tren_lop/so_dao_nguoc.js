let n = parseInt(prompt("Nhập vào một số nguyên dương n"));

if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    let reversedNumber = 0;
    while (n > 0) {
        reversedNumber = reversedNumber * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    console.log(`Số đảo ngược là ${reversedNumber}`);
}
