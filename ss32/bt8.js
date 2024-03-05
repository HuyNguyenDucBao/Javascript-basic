var users = [];

function register() {
    var id = prompt("Nhập ID:");
    var user_name = prompt("Nhập tên:");
    var email = prompt("Nhập email:");
    var password = prompt("Nhập mật khẩu:");

    if (!user_name || !email || !password) {
        alert("Tên, email và mật khẩu không được để trống!");
        return;
    }

    if (user_name.length < 3) {
        alert("Tên không được ngắn hơn 3 ký tự!");
        return;
    }

    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng!");
        return;
    }

    if (password.length < 8) {
        alert("Mật khẩu tối thiểu 8 ký tự!");
        return;
    }

    for (let user of users) {
        if (user.email === email) {
            alert("Email đã tồn tại trong hệ thống!");
            return;
        }
    }

    users.push({id, user_name, email, password});
    alert("Đăng ký thành công!");
}

function login() {
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    for (let user of users) {
        if (user.email === email && user.password === password) {
            alert("Đăng nhập thành công!");
            console.log(user);
            return;
        }
    }

    alert("Đăng nhập thất bại!");
}

function main() {
    let choice = prompt("Chọn 1 để đăng ký, 2 để đăng nhập, 3 để thoát:");

    switch (choice) {
        case '1':
            register();
            break;
        case '2':
            login();
            break;
        case '3':
            return;
        default:
            alert("Lựa chọn không hợp lệ!");
    }

    main();
}

main();