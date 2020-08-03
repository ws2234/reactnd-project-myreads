import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import Search from './Search';
import BookCase from './BookCase';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  /**
  * @description Sets state by pulling the latest book data from the server.
  */
  updateBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  //initializes the list of books when the component mounts for the first time
  componentDidMount() {
    this.updateBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/'>
          <BookCase
            books={this.state.books}
            updateBooks={this.updateBooks}
          />
        </Route>
        <Route path='/search'>
          <Search
            books={this.state.books}
            updateBooks={this.updateBooks}
          />
        </Route>
      </div>
    )
  }
}

export default BooksApp
