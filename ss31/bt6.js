function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}

var result = fakeFind([1, 2, 3, 4, 5], function(num) { return num > 3; });
console.log('Phan tu dau tien thoa dk: ',result); //In ra 4