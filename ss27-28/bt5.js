var arr = [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10];
console.log('Mảng đã cho của bài 5: ', arr)

let uniqueElement;
for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
        uniqueElement = arr[i];
        break;
    }
}

if (uniqueElement !== undefined) {
    console.log('Phần tử đầu tiên là độc nhất trong mảng là:', uniqueElement);
} else {
    console.log('Không có phần tử nào độc nhất trong mảng.');
}