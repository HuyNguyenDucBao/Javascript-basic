var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Mảng đã cho của bài 3: ', arr)

let newArr = arr.filter(num => num % 2 === 0);

console.log('Mảng sau khi xóa tất cả các phần tử lẻ:', newArr);