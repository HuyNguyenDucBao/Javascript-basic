function getDistinctArray(arr) {
    let distinctArray = [...new Set(arr)];
    return distinctArray;
}

var array = [1, 2, 1, 3, 4, "f"];
console.log('Mảng đã cho của bài 8: ', array)
let distinctArray = getDistinctArray(array);

console.log('Mảng con của mảng truyền vào chỉ chứa các phần tử phân biệt: ', distinctArray);
