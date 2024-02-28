let arr = [1, 2, 'ba', 4, 'năm', 6.7, 8, 'chín', 10.11]; // Mảng gồm các phần tử bất kỳ
let soNguyen = [];

for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
        soNguyen.push(arr[i]);
    }
}

if (soNguyen.length > 0) {
    console.log('Các số nguyên trong mảng là:', soNguyen);
} else {
    console.log('Trong mảng không tồn tại số nguyên');
}
