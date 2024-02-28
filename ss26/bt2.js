var arr = [1, 2, 'ba', 4, 'năm', 6.7, 8, 'chín', 10.11]; // Mảng gồm các phần tử bất kỳ
var input = prompt("Nhập vào giá trị bạn muốn tìm:");

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == input) {
        alert('Phần tử ' + input + ' tồn tại ở vị trí ' + i + ' trong mảng.');
        found = true;
        break;
    }
}

if (!found) {
    alert('Phần tử không tồn tại trong mảng.');
}
