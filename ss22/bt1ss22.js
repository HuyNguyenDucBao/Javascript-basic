let a = prompt("Nhập vào số a:");
let b = prompt("Nhập vào số b:");

a = Number(a);
b = Number(b);

if (a % b == 0) {
    console.log("Số a chia hết cho số b");
} else if (b % a == 0) {
    console.log("Số b chia hết cho số a");
} else {
    console.log("Cả hai số không chia hết cho nhau");
}
