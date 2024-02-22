
// const time = (prompt('Nhập thời gian trong ngày:'));

// // var time = new Date().getHours();
// // console.log(new Date().getHours());
// switch (truezzzzzzzz) {
//         case (time < 10):
//                 alert('Good morning');
//                 break;
//         case (time <= 20):
//                 alert('Good day');
//                 break;
//         case (time > 20 && time <=24):
//                 alert('Good evening');
//                 break;
//         default:
//                 alert('Giờ không hợp lệ');
// }


var height = prompt("Nhập chiều cao của bạn (centimeter):");
height /= 100; // convert height to meters
var weight = prompt("Nhập cân nặng của bạn (kg):");

let bmi = weight / (height * height);
alert("Chỉ số BMI của bạn là: " + bmi.toFixed(2));

switch (true) {
    case (bmi < 18.5):
        alert("Bạn có chỉ số BMI Cân nặng thấp (gầy)");
        break;
    case (bmi >= 18.5 && bmi <= 24.9 ):
        alert("Bạn có chỉ số BMI Bình thường");
        break;
    case (bmi >= 25 && bmi <= 29.9):
        alert("Bạn có chỉ số BMI Tiền béo phì");
        break;
    case (bmi >= 30 && bmi <= 34.9):
        alert("Bạn có chỉ số BMI Béo phì độ I");
        break;
    case (bmi >= 35 && bmi <= 39.9):
        alert("Bạn có chỉ số BMI Béo phì độ II");
        break;
    default:
        alert("Bạn có chỉ số BMI Béo phì độ III");
}
