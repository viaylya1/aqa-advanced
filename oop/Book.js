export default class Book {
  constructor(title, author, publicationYear) {
    this._title = title;
    this._author = author;
    this._publicationYear = publicationYear;
  }

  printinfo() {
    console.log(
      `Book name: ${this._title}, Author: ${this._author}, Year of publication: ${this._publicationYear}`
    );
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value.length > 50) {
      console.log(`Error: "Maximum number of letters in the title is 50"`);
      return;
    }
    if (!/^[A-Za-z\s]+$/.test(value)) {
      console.log(`Error: "Title must be in EN letters"`);
      return;
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value === "string" && value.includes("Ted Ted")) {
      console.log(`Error: "Ted Ted" is a forbidden author`);
      return;
    }
    if (typeof value !== "string") {
      console.log(`Error: "Author must be a string"`);
      return;
    }
    this._author = value;
  }

  get publicationYear() {
    return this._publicationYear;
  }

  set publicationYear(value) {
    if (value <= 1900) {
      console.log(`Error: "Year of publication must be 1900 or later"`);
      return;
    }
    if (typeof value !== "number" || isNaN(value)) {
      console.log(`Error: "Year of publication must be a number"`);
      return;
    }
    this._publicationYear = value;
  }

  // Static method Option 1
  static findOldestBook(books) {
    const oldestBook = books.sort(
      (a, b) => a.publicationYear - b.publicationYear
    );
    return oldestBook[0];
  }

  // Static Method Option 2
  // static findOldestBook(books) {
  //   const oldestBook = books.reduce((a, b) =>
  //     a.publicationYear < b.publicationYear ? a : b
  //   );
  //   return oldestBook;
  // }

  //Static Method Option 3
  // static findOldestBook(books) {
  //   let oldestYear = Infinity;
  //   let oldestBook;
  //   books.forEach((book) => {
  //     if (book.publicationYear < oldestYear) {
  //       oldestYear = book.publicationYear;
  //       oldestBook = book;
  //     }
  //   });
  //   return oldestBook;
  // }
}
