let a = prompt("Nhập vào số nguyên dương a");
let b = prompt("Nhập vào số nguyên dương b");

a = parseInt(a);
b = parseInt(b);

if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0) {
    console.log("Vui lòng nhập vào hai số nguyên dương.");
} else {
    for (let i = 1; i <= a; i++) {
        if (i % b === 0) {
            console.log(i);
        }
    }
}
