# MyReads Project

This project is for Udacity's React Fundamentals course. I created a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project utilizes React to build the application and an API server to persist information as you interact with the application.


## Getting started

To get started with interacting with the application:
* install all project dependencies with `npm install`
* start the development server with `npm start`


## Functionality Implemented

* Search for books using the BooksAPI server
* Move books from search to one of your shelves
* Move books from one shelf to another shelf
* Remove books from book case
* Book information persists on page refresh


## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
