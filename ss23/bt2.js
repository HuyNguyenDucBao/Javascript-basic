let num = prompt("Nhập vào một số nguyên dương");
num = parseInt(num);

if (isNaN(num) || num <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`Giai thừa của ${num} là ${factorial}`);
}
