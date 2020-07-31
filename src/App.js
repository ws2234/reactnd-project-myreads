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

  updateBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  componentDidMount() {
    this.updateBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookCase books={this.state.books} updateBooks={this.updateBooks} />
        )} />
        <Route path='/search' render={() => (
          <Search books={this.state.books} updateBooks={this.updateBooks} />
        )} />
      </div>
    )
  }
}

export default BooksApp
