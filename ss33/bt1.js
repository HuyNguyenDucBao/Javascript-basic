// Tạo một đối tượng con người với các thuộc tính như tên, tuổi và địa chỉ
let person = {
    name: "Nguyễn Văn A",
    age: 30,
    address: "Hồ Chí Minh, Việt Nam"
};

function addAttribute(object, attribute, value) {
    object[attribute] = value;
}

function removeAttribute(object, attribute) {
    delete object[attribute];
}

function main() {
    while (true) {
        let option = prompt("Chọn một tùy chọn:\n1. Thêm thuộc tính\n2. Xóa thuộc tính\n3. Hiển thị đối tượng\n4. Thoát");
        switch (option) {
            case '1':
                let attributeToAdd = prompt("Nhập tên thuộc tính muốn thêm:");
                let valueToAdd = prompt("Nhập giá trị cho thuộc tính:");
                addAttribute(person, attributeToAdd, valueToAdd);
                break;
            case '2':
                let attributeToRemove = prompt("Nhập tên thuộc tính muốn xóa:");
                removeAttribute(person, attributeToRemove);
                break;
            case '3':
                console.log(person);
                break;
            case '4':
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Tùy chọn không hợp lệ. Vui lòng chọn lại.");
        }
    }
}

main();
