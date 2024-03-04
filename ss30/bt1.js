let arr = [1, 2, 3, 2, 1];
function timDoiXung(arr) {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    if (arr[i] === arr[n - i - 1]) {
      console.log(arr, "la mang doi xung");
    } else {
      console.log(arr, "khong la mang doi xung");
    }
  }
}
timDoiXung(arr);
