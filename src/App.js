import React from 'react'
import { Route } from 'react-router-dom';
import Search from './components/Search';
import Main from './components/Main';
import * as BooksAPI from './BooksAPI';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBookDetails()
    // BooksAPI.getAll().then((books) => {
    //   this.setState({ books: books })
    // })
  }

  getBookDetails = () => {
     BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBookDetails()
    })
  
}








  render() {
 
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <Main
          books={this.state.books}
          moveShelf={this.moveShelf}
          />
          )} />

        <Route path="/search" render={() => (
          <Search
          books={this.state.books}
          moveShelf={this.moveShelf}
          />
          )} />  

      </div>
    )
  }
}

export default BooksApp


