function chunkArrayInGroups(arr, n) {
    var result = [];
    while (arr.length) {
        result.push(arr.splice(0, n));
    }
    return result;
}

var result = chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log('Cac mang gom 3 phan tu',result);  