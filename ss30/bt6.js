let n = Number(prompt("nhập độ dài mảng lớn hơn 3"));
let arr = [];
function inArr(n) {
  for (var i = 0; i < n; i++) {
    num = Number(prompt(`nhập vào ${i + 1}`));
    arr.push(num);
  }
}

function timSoTamGiac(arr) {
  var dem = 0;
  for (var i = 0; i < arr.length - 2; i++) {
    for (var j = i + 1; j < arr.length - 1; j++) {
      for (var k = j + 1; k < arr.length; k++) {
        if (
          arr[i] + arr[j] > arr[k] &&
          arr[i] + arr[k] > arr[j] &&
          arr[j] + arr[k] > arr[i]
        ) {
          dem++;
        }
      }
    }
  }
  console.log("số tam giác cho thể lập là", dem);
}
inArr(n);
timSoTamGiac(arr);
