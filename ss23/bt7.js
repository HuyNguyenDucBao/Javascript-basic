let num = prompt("Nhập vào một số");
num = parseInt(num);

if (isNaN(num) || num <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        console.log(num + " là số hoàn hảo.");
    } else {
        console.log(num + " không phải là số hoàn hảo.");
    }
}
