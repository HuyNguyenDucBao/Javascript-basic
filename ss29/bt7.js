
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = parseInt(prompt("Nhập vào 1 số nguyên bất kỳ: "));

function findPair(inputArray, targetSum) {
    let map = {};
    for(let i = 0; i < inputArray.length; i++) {
        let complement = targetSum - inputArray[i];
        if(map[complement] !== undefined) {
            return [complement, inputArray[i]];
        }
        map[inputArray[i]] = i;
    }

    return null;
}
function main() {
// Gọi hàm với mảng đã khai báo và số đã nhập vào
let result = findPair(arr, target);

// In kết quả ra màn hình
if(result) {
    console.log("Cặp số tìm được là: " + result[0] + " và " + result[1]);
} else {
    console.log("Không tìm thấy cặp số nào có tổng bằng với số đã nhập vào.");
}
}