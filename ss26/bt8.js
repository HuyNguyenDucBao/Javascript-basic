var arr = [1, 2, 3, 2, 4, 5, 4, 6, 7, 8, 9, 7, 10]; // Mảng số nguyên bất kỳ

var count = {}; // Đối tượng để đếm số lần xuất hiện của mỗi phần tử
for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    count[num] = count[num] ? count[num] + 1 : 1;
}

console.log('Các phần tử xuất hiện từ hai lần trở lên trong mảng:');
for (var num in count) {
    if (count[num] >= 2) {
        console.log(num);
    }
}
