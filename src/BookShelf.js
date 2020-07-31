import React from 'react';
import Book from './Book';

const BookShelf = props => {
  const { books, shelf, updateBooks } = props;

  const filteredBooks = books.length > 0
    ? books.filter((book) => (
      book.shelf === shelf)
    )
    : []
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
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
