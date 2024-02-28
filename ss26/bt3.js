var arr = [1, 2, 3, 4, 5, 2, 3, 4, 2, 1]; // Mảng số nguyên gồm nhiều phần tử
var input = prompt("Nhập vào một số nguyên:");

var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == input) {
        count++;
    }
}

if (count > 0) {
    console.log('Số ' + input + ' xuất hiện ' + count + ' lần trong mảng.');
} else {
    console.log('Số ' + input + ' không xuất hiện trong mảng.');
}
