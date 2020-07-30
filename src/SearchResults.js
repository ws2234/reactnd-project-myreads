import React from 'react';

const SearchResults = (props) => {
  const { searchResults } = props;

  return (
    <div className="search-books-results">
      { searchResults.length > 0 &&
        (
          <ol className="books-grid">
            {searchResults.map(book => {
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
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{title}</div>
                      <div className="book-authors">{authors}</div>
                    </div>
                  </li>
                )
              )
            })}
          </ol>
        )
      }
    </div>
  )
}

export default SearchResults;
