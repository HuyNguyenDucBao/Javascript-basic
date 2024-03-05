// Khai báo mảng gồm nhiều đối tượng Book
let books = [
    {author: 'Author1', name: 'Book1'},
    {author: 'Author2', name: 'Book2'},
    {author: 'Author3', name: 'Book3'},
];
  let authorName = prompt("Nhập tên tác giả:");
  
  const foundBook = books.find((book) => book.author === authorName);

// In ra kết quả
if (foundBook) {
  console.log("Sách:", foundBook.name);
} else {
  console.log("Không tìm thấy sách");
}