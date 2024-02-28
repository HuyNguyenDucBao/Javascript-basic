var arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]; // Mảng số nguyên gồm nhiều phần tử bất kỳ

var arrKetQua = new Array(arr.length);
var start = 0;
var end = arr.length - 1;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arrKetQua[start] = arr[i];
        start++;
    } else {
        arrKetQua[end] = arr[i];
        end--;
    }
}

console.log('Mảng sau khi di chuyển các phần tử âm lên đầu, phần tử dương về cuối:', arrKetQua);
