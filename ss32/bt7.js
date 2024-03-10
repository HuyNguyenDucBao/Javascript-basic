var users = [];

// Hàm kiểm tra đầu vào
function validateInput(user_name, email, password) {
    if (!user_name || !email || !password) {
        alert("Tên, email và mật khẩu không được để trống!");
        return false;
    }

    if (user_name.length < 2) {
        alert("Tên không được ngắn hơn 2 ký tự!");
        return false;
    }

    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng!");
        return false;
    }

    if (password.length < 8) {
        alert("Mật khẩu tối thiểu 8 ký tự!");
        return false;
    }

    return true;
}

// Hàm tạo người dùng
function createUser() {
    var id = prompt("Nhập ID:");
    var user_name = prompt("Nhập tên:");
    var email = prompt("Nhập email:");
    var password = prompt("Nhập mật khẩu:");

    if (validateInput(user_name, email, password)) {
        users.push({id, user_name, email, password});
    }
}

createUser();

console.log(users);
