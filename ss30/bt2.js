let n = Number(prompt("nhập vào số nguyên dương"));
function soLe(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 2 != 0) {
      console.log(i);
      sum += i;
      if (sum % 2 === 0) {
        sum -= i;
        break;
      }
    }
  }
  console.log("tổng của các số lẻ là ", +sum);
}
soLe(n);
