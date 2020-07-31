import React from 'react';
import * as BooksAPI from './utils/BooksAPI';

const MoveToPopup = props => {
  const { book, updateBooks } = props;
  const options = ["currentlyReading", "wantToRead", "read", "none"];

  const handleChange = (book, event) => {
    console.log(event.target.value);
    console.log(book);
    BooksAPI.update(book, event.target.value)
      .then(() => updateBooks());
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={(event) => handleChange(book, event)}>
        <option value="move" disabled>Move to...</option>
        {options.map((option, i) => (
          book.shelf
            ? book.shelf === option
              ? <option key={i} value={option} selected="selected">{option}</option>
              : <option key={i} value={option}>{option}</option>
            : option === "none"
              ? <option key={i} value="none" selected="selected">{option}</option>
              : <option key={i} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default MoveToPopup;
