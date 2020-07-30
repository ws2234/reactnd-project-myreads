import React from 'react';
import Book from './Book';

const SearchResults = (props) => {
  const { searchResults } = props;

  return (
    <div className="search-books-results">
      { searchResults.length > 0 &&
        (
          <ol className="books-grid">
            {searchResults.map(book => (
              <Book book={book} />
            ))}
          </ol>
        )
      }
    </div>
  )
}

export default SearchResults;
