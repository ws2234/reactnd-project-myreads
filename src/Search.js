import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import * as BooksAPI from './utils/BooksAPI';

class Search extends Component {
  state = {
    query: '',
    searchResults: []
  }

  handleUpdate = (query) => {
    this.setState(() => ({
      query: query
    }))

    BooksAPI.search(query)
      .then((searchResults) => {
        console.log(searchResults);
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
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar
          query={this.state.query}
          handleUpdate={this.handleUpdate}
        />
        <SearchResults
          searchResults={this.state.searchResults}
        />
      </div>
    )
  }
}

export default Search;
