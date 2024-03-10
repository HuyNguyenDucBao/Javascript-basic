// Lớp cơ sở Job
class Job {
    constructor(id, title, description) {
        this._id = id;
        this._title = title;
        this._description = description;
    }

    // Getter và Setter cho id
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    // Getter và Setter cho title
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }

    // Getter và Setter cho description
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}

// Lớp CompletedJob kế thừa từ Job và thêm thuộc tính completed
class CompletedJob extends Job {
    constructor(id, title, description, completed) {
        super(id, title, description); // Gọi tới constructor của lớp cha
        this._completed = completed;
    }

    // Getter và Setter cho completed
    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }
}

// Tạo một mảng jobs
let jobs = [];

// Phương thức thêm công việc mới
function addJob() {
    // Nhập thông tin công việc từ người dùng
    let id = parseInt(prompt("Nhập ID công việc: "));
    let title = prompt("Nhập tiêu đề công việc: ");
    let description = prompt("Nhập mô tả công việc: ");
    let completed = prompt("Nhập trạng thái hoàn thành công việc (true/false): ");

    // Kiểm tra tính hợp lệ của id
    if (!Number.isInteger(id)) {
      console.log("Lỗi: ID công việc phải là số nguyên.");
      return;
    }

    // Kiểm tra title và description
    if (title === "" || description === "") {
      console.log("Lỗi: Tiêu đề và mô tả công việc không được rỗng.");
      return;
    }

    // Kiểm tra id công việc đã tồn tại hay chưa
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === id) {
        console.log("Lỗi: ID công việc đã tồn tại.");
        return;
      }
    }

    // Thêm công việc mới vào mảng
    jobs.push(new CompletedJob(id, title, description, completed));
}

// Phương thức in ra danh sách công việc
function printJobs() {
    // Kiểm tra mảng jobs có rỗng hay không
    if (jobs.length === 0) {
      console.log("Danh sách công việc rỗng.");
      return;
    }

    // In ra danh sách công việc
    for (let i = 0; i < jobs.length; i++) {
      console.log(`ID: ${jobs[i].id}, Title: ${jobs[i].title}, Description: ${jobs[i].description}, Completed: ${jobs[i].completed}`);
    }
}

// Phương thức tìm kiếm công việc theo id
function findJobById(id) {
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === id) {
        return jobs[i];
      }
    }
    console.log("Không tìm thấy"); // In ra thông báo nếu không tìm thấy công việc
    return null;
}

// Hàm menu để hiển thị menu chính
function menu() {
    console.log('1. Thêm công việc mới (addJob)');
    console.log('2. In ra danh sách công việc (printJobs)');
    console.log('3. Tìm kiếm công việc theo id (findJobById)');
    console.log('0. Thoát');
}

// Hàm main để điều khiển chương trình
function main() {
    let choice;
    do {
        menu();
        choice = Number(prompt("Nhập lựa chọn của bạn: "));
        switch(choice) {
            case 1:
                addJob();
                break;
            case 2:
                printJobs();
                break;
            case 3:
                let searchId = prompt("Nhập id công việc cần tìm: ");
                findJobById(searchId);
                break;
            case 0:
                console.log("Đã thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while(choice !== 0);
}
