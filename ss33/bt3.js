// Tạo một đối tượng đại diện cho danh bạ điện thoại
let phoneBook = {
    contact1: {
        name: "Nguyễn Văn A",
        phone: "123-456-7890",
        email: "a@example.com",
        displayInfo: function() {
            console.log("Tên: " + this.name);
            console.log("Số điện thoại: " + this.phone);
            console.log("Email: " + this.email);
        }
    },
    contact2: {
        name: "Trần Thị B",
        phone: "987-654-3210",
        email: "b@example.com",
        displayInfo: function() {
            console.log("Tên: " + this.name);
            console.log("Số điện thoại: " + this.phone);
            console.log("Email: " + this.email);
        }
    }
    // thêm các liên lạc khác vào đây
};

// Gọi phương thức displayInfo cho mỗi liên lạc trong danh bạ
for (let contact in phoneBook) {
    phoneBook[contact].displayInfo();
}
