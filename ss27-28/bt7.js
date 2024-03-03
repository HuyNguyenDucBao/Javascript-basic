var str = prompt("Nhập vào một chuỗi bất kỳ:");
function getAllSubstrings(s) {
    let substrings = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            substrings.push(s.slice(i, j));
        }
    }
    return substrings;
}

console.log('Mảng chứa tất cả các chuỗi con trong chuỗi đã nhập:', getAllSubstrings(str));