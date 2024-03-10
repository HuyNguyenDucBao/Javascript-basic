// Định nghĩa lớp Sản Phẩm
class Product {
    constructor(id, name, price, expiryDate) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.expiryDate = expiryDate;
    }
}

// Định nghĩa lớp Nhân Viên
class Employee {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

// Định nghĩa lớp Hóa Đơn
class Invoice {
    constructor(products, quantities, values) {
        this.products = products;
        this.quantities = quantities;
        this.values = values;
    }
}

// Tạo danh sách sản phẩm, nhân viên, và hóa đơn
let productList = [];
let employeeList = [];
let invoiceList = [];

// Hàm để thêm sản phẩm vào danh sách
function addProduct() {
    let id = prompt("Nhập ID sản phẩm:");
    let name = prompt("Nhập tên sản phẩm:");
    let price = prompt("Nhập giá sản phẩm:");
    while (isNaN(price) || price <= 0) {
        alert("Giá sản phẩm phải là một số lớn hơn 0. Vui lòng nhập lại.");
        price = prompt("Nhập giá sản phẩm:");
    }
    let expiryDate = prompt("Nhập hạn sử dụng sản phẩm (dd/mm/yyyy):");
    while (!/^(\d{2}\/\d{2}\/\d{4})$/.test(expiryDate)) {
        alert("Hạn sử dụng sản phẩm phải có định dạng dd/mm/yyyy. Vui lòng nhập lại.");
        expiryDate = prompt("Nhập hạn sử dụng sản phẩm (dd/mm/yyyy):");
    }
    let product = new Product(id, name, price, expiryDate);
    productList.push(product);
}


// Hàm để in ra danh sách sản phẩm
function printProductList() {
    console.log("Danh sách sản phẩm:");
    for (let product of productList) {
        console.log("ID: " + product.id + ", Tên: " + product.name + ", Giá: " + product.price + ", Hạn sử dụng: " + product.expiryDate);
    }
}

// Hàm để thêm nhân viên vào danh sách
function addEmployee() {
    let id = prompt("Nhập ID nhân viên:");
    let name = prompt("Nhập tên nhân viên:");
    let age = prompt("Nhập tuổi nhân viên:");
    while (isNaN(age) || age < 0) {
        alert("Tuổi nhân viên phải là một số không âm. Vui lòng nhập lại.");
        age = prompt("Nhập tuổi nhân viên:");
    }
    let employee = new Employee(id, name, age);
    employeeList.push(employee);
}

// Hàm để in ra danh sách nhân viên
function printEmployeeList() {
    console.log("Danh sách nhân viên:");
    for (let employee of employeeList) {
        console.log("ID: " + employee.id + ", Tên: " + employee.name + ", Tuổi: " + employee.age);
    }
}


// Hàm để thêm hóa đơn vào danh sách
function addInvoice() {
    let products = prompt("Nhập sản phẩm (cách nhau bởi dấu phẩy):").split(",");
    let quantities = prompt("Nhập số lượng (cách nhau bởi dấu phẩy):").split(",");
    for (let i = 0; i < quantities.length; i++) {
        while (isNaN(quantities[i]) || quantities[i] <= 0) {
            alert("Số lượng phải là một số lớn hơn 0. Vui lòng nhập lại.");
            quantities[i] = prompt("Nhập lại số lượng cho sản phẩm " + products[i] + ":");
        }
    }
    let values = prompt("Nhập giá trị (cách nhau bởi dấu phẩy):").split(",");
    for (let i = 0; i < values.length; i++) {
        while (isNaN(values[i]) || values[i] <= 0) {
            alert("Giá trị phải là một số lớn hơn 0. Vui lòng nhập lại.");
            values[i] = prompt("Nhập lại giá trị cho sản phẩm " + products[i] + ":");
        }
    }
    let invoice = new Invoice(products, quantities, values);
    invoiceList.push(invoice);
}


// Hàm để in ra danh sách hóa đơn
function printInvoiceList() {
    console.log("Danh sách hóa đơn:");
    for (let invoice of invoiceList) {
        console.log("Sản phẩm: " + invoice.products.join(", ") + ", Số lượng: " + invoice.quantities.join(", ") + ", Giá trị: " + invoice.values.join(", "));
    }
}

// Hàm để hiển thị thông tin tổng quan về cửa hàng
function displayOverview() {
    console.log("Số lượng sản phẩm: " + productList.length);
    console.log("Số lượng nhân viên: " + employeeList.length);

    let totalRevenue = 0;
    for (let invoice of invoiceList) {
        for (let value of invoice.values) {
            totalRevenue += Number(value);
        }
    }
    console.log("Doanh thu: " + totalRevenue);
}

// Hàm để kiểm tra hạn sử dụng của sản phẩm
function checkExpiryDate(product) {
    let currentDate = new Date();
    let expiryDate = new Date(product.expiryDate.split("/").reverse().join("-"));

    if (expiryDate < currentDate) {
        console.log("Sản phẩm " + product.name + " đã hết hạn sử dụng.");
    } else {
        console.log("Sản phẩm " + product.name + " vẫn còn hạn sử dụng.");
    }
}

function main() {
    while (true) {
        let option = prompt("Chọn một tùy chọn:\n1. Thêm sản phẩm\n2. In danh sách sản phẩm\n3. Thêm nhân viên\n4. In danh sách nhân viên\n5. Thêm hóa đơn\n6. In danh sách hóa đơn\n7. Hiển thị thông tin tổng quan\n8. Kiểm tra hạn sử dụng sản phẩm\n9. Thoát");
        switch (option) {
            case '1':
                addProduct();
                break;
            case '2':
                printProductList();
                break;
            case '3':
                addEmployee();
                break;
            case '4':
                printEmployeeList();
                break;
            case '5':
                addInvoice();
                break;
            case '6':
                printInvoiceList();
                break;
            case '7':
                displayOverview();
                break;
            case '8':
                let productId = prompt("Nhập ID sản phẩm:");
                let product = productList.find(p => p.id === productId);
                if (product) {
                    checkExpiryDate(product);
                } else {
                    console.log("Không tìm thấy sản phẩm với ID: " + productId);
                }
                break;
            case '9':
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Tùy chọn không hợp lệ. Vui lòng chọn lại.");
        }
    }
}
 main ();