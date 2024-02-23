// Desctructuring objects

const book = {
  title: 'Amazing book',
  author: 'Ted Novan',
  year: 1995
};

const { title: bookName, author } = book;
console.log(`Book name: ${bookName}`);
console.log(`Author: ${author}`);
