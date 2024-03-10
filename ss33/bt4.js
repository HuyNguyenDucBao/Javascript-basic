// Định nghĩa class cha Book
class Book {
    constructor(title, author, publishedYear) {
        this._title = title;
        this._author = author;
        this._publishedYear = publishedYear;
    }

    // Sử dụng getter và setter
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }


    get author() {
        return this._author;
    }
    set author(newAuthor) {
        this._author = newAuthor;
    }


    get publishedYear() {
        return this._publishedYear;
    }
    set publishedYear(newYear) {
        this._publishedYear = newYear;
    }

    // Phương thức hiển thị thông tin sách
    displayInfo() {
        return `Tên sách: ${this.title}, Tác giả: ${this.author}, Năm xuất bản: ${this.publishedYear}.`;
    }
}

class Library extends Book {
    constructor() {
        super();
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayBooks() {
        return this.books.map(book => book.displayInfo()).join('\n');
    }
}

let library = new Library();
let book1 = new Book('Sách 1', 'Tác giả 1', 2001);
let book2 = new Book('Sách 2', 'Tác giả 2', 2002);
library.addBook(book1);
library.addBook(book2);

console.log(library.displayBooks());

