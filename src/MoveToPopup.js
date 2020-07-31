import React from 'react';
import * as BooksAPI from './utils/BooksAPI';

const MoveToPopup = props => {
  const { books, book, updateBooks } = props;
  const options = ["currentlyReading", "wantToRead", "read", "none"];
  const filteredBooks =
    books.length > 0
      ? books.filter((b) => (
        b.id === book.id)
      )
      : []

  const selectedValue =
    book.shelf
      ? book.shelf
      : filteredBooks.length > 0
        ? filteredBooks[0].shelf
        : 'none'



  const handleChange = (book, event) => {
    BooksAPI.update(book, event.target.value)
      .then(() => updateBooks());
  }

  return (
    <div className="book-shelf-changer">
      <select value={selectedValue} onChange={(event) => handleChange(book, event)}>
        <option value="move" disabled>Move to...</option>
        {options.map((option) => (
          <option key={book.id+option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default MoveToPopup;
