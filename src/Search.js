import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import * as BooksAPI from './utils/BooksAPI';

class Search extends Component {
  state = {
    query: '',
    searchResults: []
  }

  /**
  * @description Handles updates to search query. As the user enters text
  *   into the query field, the function sets the new state of the query to
  *   match the user input. Then, the function will initiate a search from
  *   the BooksAPI if the query is entered. Finally, the function will set the
  *   new state of the searchResults. It will be set to empty if there is an
  *   error or will set it to the searchResults returned by the API.
  * @param {string} query
  */
  handleUpdate = (query) => {
    this.setState(() => ({
      query: query
    }))

    // calling the fetchBooks method after a 800ms delay
    setTimeout(()=>{
      this.fetchBooks()
    }, 800)
  }

  fetchBooks = () => {
    const query = this.state.query;

    query === '' || query === null
      ? this.setState(() => ({ searchResults: '' }))
      : (
        BooksAPI.search(query)
          .then((searchResults) => {
            if(searchResults && !searchResults.error) {
              this.setState(() => ({
                searchResults
              }))
            } else {
              this.setState(() => ({
                searchResults: ''
              }))
            }
          })
      )
  }

  render() {
    const { books, updateBooks } = this.props;
    return (
      <div className="search-books">
        <SearchBar
          query={this.state.query}
          handleUpdate={this.handleUpdate}
        />
        <SearchResults
          books={books}
          searchResults={this.state.searchResults}
          updateBooks={updateBooks}
        />
      </div>
    )
  }
}

export default Search;
