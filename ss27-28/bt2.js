var a = parseInt(prompt("Nhập vào số nguyên a:"));
var b = parseInt(prompt("Nhập vào số nguyên b:"));
var arr = [];
for (let i = a + 1; i < b; i++) {
    arr.push(i);
}

console.log('Mảng chứa tất cả các số trong khoảng giữa a và b:', arr);