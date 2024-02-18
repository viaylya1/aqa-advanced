import Book from "./Book.js";
import EBook from "./EBook.js";

// Task1
console.log(
  `Task1 **************************************************************`
);
const book1 = new Book("Summer", "Ted Novan", 1998);
const book2 = new Book("Winter", "Jack Reck", 2011);
book1.printinfo();
book2.printinfo();

// Task2
console.log(
  `Task2 **************************************************************`
);
const ebook1 = new EBook("Best Book", "Ron Ger", 1977, "pdf");
// Option2
// const ebook1 = new EBook("pdf");
ebook1.printinfo();

// Task3
console.log(
  `Task3 **************************************************************`
);
console.log(`GET book1 title: ${book1.title}`);
book1.title = "Лето";
book1.title = "Summer time is coming! It's time to plan your vacation!";
book1.title = "Summer again";
console.log(`SET new book1 title: ${book1.title}`);

console.log(`______________`);
console.log(`GET book1 author: ${book1.author}`);
book1.author = "Ted Ted";
book1.author = 111;
book1.author = "Ted New";
console.log(`SET new book1 author: ${book1.author}`);

console.log(`______________`);
console.log(`GET book1 Year of publication: ${book1.publicationYear}`);
book1.publicationYear = "Thousand";
book1.publicationYear = 1800;
book1.publicationYear = 2000;
console.log(`SET new book1 Year of publication: ${book1.publicationYear}`);

console.log(`______________`);
console.log(`GET ebook File format: ${ebook1.fileFormat}`);
ebook1.fileFormat = "TXT";
ebook1.fileFormat = null;
ebook1.fileFormat = "fb2";
console.log(`SET new ebook File Format: ${ebook1.fileFormat}`);

//Task 4
console.log(
  `Task4 **************************************************************`
);
const books = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log(
  `The oldest book: ${oldestBook.title}, Publication Year: ${oldestBook.publicationYear}`
);

//Task 5
console.log(
  `Task5 **************************************************************`
);
const ebook2 = EBook.fromBookAndFileFormat(book1, "pdf");
console.log(ebook2);
