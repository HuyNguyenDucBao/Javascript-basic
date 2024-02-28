var arr = [1, 2, 5, 7]; // Mảng số nguyên gồm nhiều số bất kỳ

var i = 1;
while (true) {
    var found = false;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] == i) {
            found = true;
            break;
        }
    }
    if (!found) {
        break;
    }
    i++;
}

console.log('Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng là:', i);
