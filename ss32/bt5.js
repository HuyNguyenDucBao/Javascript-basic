function Book(author, name) {
    this.author = author;
    this.name = name;
}

let books = [
    new Book('Huy', 'SayHi'),
    new Book('Phu', 'Me'),
];

let authorName = prompt("Nhập tên tác giả:");
let foundBooks = books.filter(book => book.author === authorName);

if (foundBooks.length > 0) {
    foundBooks.forEach(book => {
        console.log(`Tác giả: ${book.author}, Tên sách: ${book.name}`);
    });
} else {
    console.log("Không tìm thấy sách");
}