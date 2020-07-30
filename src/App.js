import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import SearchWindow from './SearchWindow';
import BookCase from './BookCase';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books);
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookCase />
        )} />
        <Route path='/search' render={() => (
          <SearchWindow />
        )} />
      </div>
    )
  }
}

export default BooksApp
