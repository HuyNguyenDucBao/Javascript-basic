let a = prompt("Nhập vào giá trị a:");
let b = prompt("Nhập vào giá trị b:");
let c = prompt("Nhập vào giá trị c:");

a = Number(a);
b = Number(b);
c = Number(c);

let delta = b*b - 4*a*c;

if (delta < 0) {
    console.log("Phương trình vô nghiệm");
} else if (delta == 0) {
    let x = -b / (2*a);
    console.log("Phương trình có nghiệm kép x1 = x2 = " + x);
} else {
    let x1 = (-b - Math.sqrt(delta)) / (2*a);
    let x2 = (-b + Math.sqrt(delta)) / (2*a);
    console.log("Phương trình có hai nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
}
