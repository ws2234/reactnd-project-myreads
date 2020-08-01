import React from 'react';
import * as BooksAPI from './utils/BooksAPI';

const MoveToPopup = props => {
  const { books, book, updateBooks } = props;
  const options = ["currentlyReading", "wantToRead", "read", "none"];

  //grabs the appropriate book from the books array
  const filteredBooks =
    books.length > 0
      ? books.filter((b) => (
        b.id === book.id)
      )
      : []

  //determines if the book belongs to a shelf or if shelf should be set to none
  const selectedValue =
    book.shelf
      ? book.shelf
      : filteredBooks.length > 0
        ? filteredBooks[0].shelf
        : 'none'


  /**
  * @description Handles updates to books on the server when the shelf for
  *   selected book is updated. The function will initiate an update using the
  *   BooksAPI and pass in the book and the new shelf value as inputs. Once the
  *   books data has been udpated, then the books data will be refreshed.
  * @param {object} books
  * @param {event} event
  */
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
