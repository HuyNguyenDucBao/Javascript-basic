let day = prompt("Nhập vào một số từ 1 đến 7:");

day = Number(day);

switch (day) {
    case 1:
        console.log("Thứ Hai");
        break;
    case 2:
        console.log("Thứ Ba");
        break;
    case 3:
        console.log("Thứ Tư");
        break;
    case 4:
        console.log("Thứ Năm");
        break;
    case 5:
        console.log("Thứ Sáu");
        break;
    case 6:
        console.log("Thứ Bảy");
        break;
    case 7:
        console.log("Chủ Nhật");
        break;
    default:
        console.log("Giá trị nhập vào không hợp lệ");
}
