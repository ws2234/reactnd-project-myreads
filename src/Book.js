import React from 'react';
import MoveToPopup from './MoveToPopup';

const Book = props => {
  const { books, book, updateBooks } = props;

  const title = book.title ? book.title : ''
  const authors = book.authors ? book.authors.join(', ') : ''
  const backgroundImage = 'imageLinks' in book ? book.imageLinks.thumbnail : ''

  return (
    (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${backgroundImage})`
              }}>
            </div>
            <MoveToPopup books={books} book={book} updateBooks={updateBooks} />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  )
}

export default Book;
