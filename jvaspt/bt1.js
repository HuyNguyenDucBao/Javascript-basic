let n = prompt("Nhập số lượng phần tử của mảng");
let arr = [];

for(let i = 0; i < n; i++) {
    let element = prompt(`Nhập phần tử thứ ${i+1}`);
    arr.push(element);
}

console.log("Mảng ban đầu: ", arr);

let reversedArr = [];
for(let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}

console.log("Mảng sau khi đảo ngược: ", reversedArr);


// let n = prompt("Nhập số lượng phần tử của mảng");
// let arr = [];

// for(let i = 0; i < n; i++) {
//     let element = prompt(`Nhập phần tử thứ ${i+1}`);
//     arr.push(element);
// }

// console.log("Mảng ban đầu: ", arr);

// let reversedArr = [];
// for(let i = 0; i < arr.length; i++) {
//     reversedArr.unshift(arr[i]);
// }

// console.log("Mảng sau khi đảo ngược: ", reversedArr);
