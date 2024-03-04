let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function soNguyenTo(n) {
  if (n <= 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function inArr(array) {
  console.log("Các số nguyên tố trong mảng là: ", array.filter(soNguyenTo));
}
inArr(arr);
