import React from 'react';
import Book from './Book';

const SearchResults = (props) => {
  const { searchResults, updateBooks } = props;

  return (
    <div className="search-books-results">
      { searchResults.length > 0 &&
        (
          <ol className="books-grid">
            {searchResults.map(book => (
              <Book book={book} updateBooks={updateBooks} />
            ))}
          </ol>
        )
      }
    </div>
  )
}

export default SearchResults;
