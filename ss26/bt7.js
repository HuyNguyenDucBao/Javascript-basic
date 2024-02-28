var arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7]; // Mảng số nguyên gồm nhiều số bất kỳ
var input = prompt("Nhập vào một số:");

for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    var j = i;
    while (sum < input && j < arr.length) {
        sum += arr[j];
        j++;
    }
    if (sum == input) {
        var mangCon = arr.slice(i, j);
        console.log('Mảng con đầu tiên có tổng các phần tử bằng với số vừa nhập là:', mangCon);
        break;
    }
}

if (i == arr.length) {
    console.log('Không có mảng con thỏa mãn');
}
