const inputStr = prompt("Nhập vào chuỗi bất kỳ: ");

const allSubstrings = [];

for (let i = 0; i < inputStr.length; i++) {
  let substring = '';
  for (let j = i; j < inputStr.length; j++) {
    substring += inputStr[j];
    allSubstrings.push(substring);
  }
}

console.log("Danh sách tất cả các chuỗi con:");
for (const substring of allSubstrings) {
  console.log(substring);
}
