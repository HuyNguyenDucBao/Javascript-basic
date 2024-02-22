let a = prompt("Nhập vào độ dài cạnh a:");
let b = prompt("Nhập vào độ dài cạnh b:");
let c = prompt("Nhập vào độ dài cạnh c:");

a = Number(a);
b = Number(b);
c = Number(c);

if (a + b > c && a + c > b && b + c > a) {
    console.log("Độ dài 3 cạnh hợp lệ, có thể tạo thành một tam giác");
} else {
    console.log("Độ dài 3 cạnh không hợp lệ, không thể tạo thành một tam giác");
}
