
var str = prompt (`Vui lòng nhập chuỗi: `);

console.log(`Chuỗi đã nhập là: ${str}`);

function demKyTu(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            count++;
        }
    }
    return count;
}
console.log(`Số ký tự trong chuỗi ${str}(không tính ký tự trống) là: ${demKyTu(str)}`);
