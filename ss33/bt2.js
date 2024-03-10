// Tạo một đối tượng đại diện cho danh bạ điện thoại
let phoneBook = {
    contact1: {
        name: "Nguyễn Văn A",
        phone: "123-456-7890",
        email: "a@example.com"
    },
    contact2: {
        name: "Trần Thị B",
        phone: "987-654-3210",
        email: "b@example.com"
    }
    // thêm các liên lạc khác vào đây
};

// Sử dụng một vòng lặp để duyệt qua tất cả các liên lạc trong danh bạ
for (let contact in phoneBook) {
    console.log("Tên: " + phoneBook[contact].name);
    console.log("Số điện thoại: " + phoneBook[contact].phone);
    console.log("Email: " + phoneBook[contact].email);
}
