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
        if(searchResults && !searchResults.error) {
          console.log(searchResults)
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
    const { updateBooks } = this.props;
    return (
      <div className="search-books">
        <SearchBar
          query={this.state.query}
          handleUpdate={this.handleUpdate}
        />
        <SearchResults
          searchResults={this.state.searchResults}
          updateBooks={updateBooks}
        />
      </div>
    )
  }
}

export default Search;
