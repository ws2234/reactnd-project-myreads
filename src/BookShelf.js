import React from 'react';
import Book from './Book';

const BookShelf = props => {
  const { books, shelf, updateBooks } = props;

  // filters list of books to only those that are for the selected shelf
  const filteredBooks =
    books.length > 0
      ? books.filter((book) => (
        book.shelf === shelf)
      )
      : []

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {
          shelf === 'currentlyReading'
            ? "What I'm currently reading"
            : shelf === 'wantToRead'
              ? 'What I want to read'
              : "What I've read"
        }
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {filteredBooks.map((book) => (
            <Book key={book.id} books={books} book={book} updateBooks={updateBooks} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;
