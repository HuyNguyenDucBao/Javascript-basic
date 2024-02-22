let num = prompt("Nhập vào một số:");

num = Number(num);
let sqrt = Math.sqrt(num);

if (sqrt === Math.floor(sqrt)) {
    console.log(num + " là số chính phương");
} else {
    console.log(num + " không phải là số chính phương");
}
