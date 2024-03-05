function findMaxOfArrays(...arrays) {
    let maxNumbers = arrays.map(array => Math.max(...array));
    return maxNumbers;
}

var result = findMaxOfArrays([-1, -2, -3], [4, 5, 6], [7, 8, 9]);
console.log('Cac phan tu lon nhat trong moi mang: ',result);  