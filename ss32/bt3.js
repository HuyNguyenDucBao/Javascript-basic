var students = [];

let numStudents = prompt("Nhập số lượng sinh viên:");

for (let i = 0; i < numStudents; i++) {
    var student = {
        id: prompt("Nhập ID sinh viên:"),
        name: prompt("Nhập tên sinh viên:")
    };

    students.push(student);
}

console.log(students);
