var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Mảng đã cho của bài 4: ', arr)

let evenArr = arr.filter(num => num % 2 === 0);
let oddArr = arr.filter(num => num % 2 !== 0);

console.log('Mảng chỉ chứa số chẵn:', evenArr);
console.log('Mảng chỉ chứa số lẻ:', oddArr);