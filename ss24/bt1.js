let num = prompt("Nhập vào một số nguyên dương:");
num = parseInt(num);

if (isNaN(num) || num <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(`Bình phương của ${i} là ${i * i}`);
        }
    }
}
