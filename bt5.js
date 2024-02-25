let randomNumber = Math.floor(Math.random() * 10) + 1;
let userNumber = parseInt(prompt("Nhập vào một số từ 1 đến 10"));

while (userNumber !== randomNumber) {
    if (userNumber > randomNumber) {
        alert("Số bạn nhập lớn hơn số ngẫu nhiên. Hãy thử lại!");
    } else {
        alert("Số bạn nhập nhỏ hơn số ngẫu nhiên. Hãy thử lại!");
    }
    userNumber = parseInt(prompt("Nhập vào một số từ 1 đến 10"));
}

alert("Chúc mừng! Bạn đã đoán đúng số.");
