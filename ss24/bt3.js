let a = prompt("Nhập vào số nguyên a:");
let b = prompt("Nhập vào số nguyên b:");

a = parseInt(a);
b = parseInt(b);

if (isNaN(a) || isNaN(b)) {
    console.log("Vui lòng nhập vào hai số nguyên.");
} else {
    let result = Math.pow(a, b);
    console.log(`Kết quả của biểu thức ${a}^${b} là ${result}`);
}
