import Book from './Book.js';

export default class EBook extends Book {
  constructor(title, author, publicationYear, fileFormat) {
    super(title, author, publicationYear);
    this._fileFormat = fileFormat;
  }
  // Option2 for constructor
  // constructor(fileFormat) {
  //   super("Best Book", "Ron Ger", 1977);
  //   this.fileFormat = fileFormat;
  // }

  printinfo() {
    super.printinfo();
    console.log(`File Format: ${this._fileFormat}`);
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (value === undefined || value === null) {
      console.log('Error: File Format is unknown');
      return;
    }
    if (!['pdf', 'fb2', 'EPUB'].includes(value)) {
      console.log(`Error: "${value}" is unsupported File Format`);
      return;
    }
    this._fileFormat = value;
  }

  static fromBookAndFileFormat(book, fileFormat) {
    return new EBook(book.title, book.author, book.publicationYear, fileFormat);
  }
}
