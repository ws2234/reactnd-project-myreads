import React from 'react';
import Book from './Book';

const SearchResults = (props) => {
  const { books, searchResults, updateBooks } = props;

  return (
    <div className="search-books-results">
      { searchResults.length > 0 &&
        (
          <ol className="books-grid">
            {searchResults.map(book => (
              <Book key={book.id} books={books} book={book} updateBooks={updateBooks} />
            ))}
          </ol>
        )
      }
    </div>
  )
}

export default SearchResults;
