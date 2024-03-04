let str = prompt("Nhập vào 1 chuỗi bất kỳ:");
function processString(s) {
  let words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].substring(0, words[i].length - 1) +
      words[i].charAt(words[i].length - 1).toUpperCase();
  }
  return words.join(" ");
}
console.log(processString(str));
