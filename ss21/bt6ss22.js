let num = prompt("Nhập vào một số có 4 chữ số:");

num = Number(num);

let hangNghin = Math.floor(num / 1000);
let hangTram = Math.floor((num % 1000) / 100);
let hangChuc = Math.floor((num % 100) / 10);
let hangDonVi = num % 10;

console.log("Hàng nghìn: " + hangNghin);
console.log("Hàng trăm: " + hangTram);
console.log("Hàng chục: " + hangChuc);
console.log("Hàng đơn vị: " + hangDonVi);
