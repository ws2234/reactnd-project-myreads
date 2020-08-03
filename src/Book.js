import React from 'react';
import MoveToPopup from './MoveToPopup';

const Book = props => {
  const { books, book, updateBooks } = props;

  //pull title, authors, and backgroundImage out of book object
  //sets values to '' if value does not exist
  //Using nullish coalescing operator and optional chaining
  const title = book.title ?? ''
  const authors = book.authors ?? ''
  const backgroundImage = book.imageLinks?.thumbnail ?? ''

  return (
    (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'contain'
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
