// Khai báo mảng gồm các thành phần ngẫu nhiên
let arr = ["Hello", "Microsoft", "Copilot", "JavaScript", "Programming"];

function longestString(inputArray) {
    let maxLength = 0;
    let longestElement = "";

    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length > maxLength) {
            maxLength = inputArray[i].length;
            longestElement = inputArray[i];
        }
    }

    return longestElement;
}
function main (){
let result = longestString(arr);

console.log(result);
}