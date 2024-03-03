var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Mảng đã cho của bài 1: ', arr)

function findMinMax(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    return {min, max};
}

var result = findMinMax(arr);
console.log('Phần tử lớn nhất trong mảng là:', result.max);
console.log('Phần tử nhỏ nhất trong mảng là:', result.min);