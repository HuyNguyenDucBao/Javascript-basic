function fakeReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

var result = fakeReduce([1, 2, 3, 4, 5], function(acc, num) { return acc + num; }, 0);
console.log('Gia tri cuoi cung cua mang: ',result);  // In ra: 15