import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const BookCase = props => {
  const { books } = props;
  const shelves = ["currentlyReading", "wantToRead", "read"];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <BookShelf books={books} shelf={shelf} />
          ))}
        </div>
      </div>
      <Link to="/search" className="open-search">
        <button>Add a book</button>
      </Link>
    </div>
  )
}

export default BookCase;
