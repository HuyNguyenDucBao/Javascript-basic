function fakeFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

var result = fakeFilter([1, 2, 3, 4, 5], function(num) { return num > 3; });
console.log('Mang thoa dk: ',result); // In ra 4,5