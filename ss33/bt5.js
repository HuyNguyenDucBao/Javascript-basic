// Tạo một đối tượng sách
class Book {
    constructor(title, author, publishedYear, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isAvailable = isAvailable;
    }

    // Phương thức mượn sách
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(this.title + " đã được mượn.");
        } else {
            console.log(this.title + " hiện không có sẵn để mượn.");
        }
    }

    // Phương thức trả sách
    returnBook() {
        this.isAvailable = true;
        console.log(this.title + " đã được trả.");
    }
}

// Tạo một đối tượng thư viện
class Library {
    constructor() {
        this.books = [];
    }

    // Thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
    }

    // Kiểm tra xem một cuốn sách cụ thể có sẵn để mượn hay không
    isBookAvailable(title) {
        for (let book of this.books) {
            if (book.title === title) {
                return book.isAvailable;
            }
        }
        return false;
    }
}

// Tạo một số đối tượng sách và thêm chúng vào thư viện
let library = new Library();
let book1 = new Book("Sách 1", "Tác giả A", 2020);
let book2 = new Book("Sách 2", "Tác giả B", 2021);
library.addBook(book1);
library.addBook(book2);

// Gọi phương thức để mượn một cuốn sách, trả cuốn sách và kiểm tra xem cuốn sách có sẵn để mượn hay không
book1.borrow();
console.log("Sách 1 có sẵn để mượn: " + library.isBookAvailable("Sách 1"));
book1.returnBook();
console.log("Sách 1 có sẵn để mượn: " + library.isBookAvailable("Sách 1"));
