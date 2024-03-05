let char = prompt("nhap vao chuoi bat ki");
function sapXep(char) {
  let so = [];
  let chu = [];
  let kiTu = [];
  for (var i = 0; i <= char.length; i++) {
    if (
      (char[i] >= "a" && char[i] <= "z") ||
      (char[i] >= "A" && char[i] <= "Z")
    ) {
      chu.push(char[i]);
    } else if (char[i] >= 0 && char[i] <= 9) {
      so.push(char[i]);
    } else {
      dB.push(char[i]);
    }
  }
  console.log(...chu, ...so, ...kiTu);
}
sapXep(char);
