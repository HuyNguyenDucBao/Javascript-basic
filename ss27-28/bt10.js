function longestDistinctSubarray(arr) {
    let longest = [];
    let current = [];

    for (let i = 0; i < arr.length; i++) {
        if (current.includes(arr[i])) {
            current = current.slice(current.indexOf(arr[i]) + 1);
        }
        current.push(arr[i]);

        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest;
}

var array = [1, 2, 1, 3, 4, "f", 2, 3, 4, "g", "h", "i", "j", "k"];
console.log('Mảng đã cho của bài 10: ', array)

let longestDistinct = longestDistinctSubarray(array);

console.log("Mảng con chứa các phần tử phân biệt có độ dài lớn nhất là:", longestDistinct);