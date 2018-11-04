import React, { Component } from 'react';
import Shelf from './Shelf.js' 

class Book extends Component {
    render() {
        let book = this.props.book
        let displayThumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url("${displayThumbnail}")` }}>
                    </div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf || this.props.currentShelf}  
                                onChange={(e) => this.props.moveShelf(book, e.target.value)}>
                            <option value="move" disabled>Move to...</option>

                            {
                                Shelf.shelves.map((shelf) => (
                                    <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
                                    ))

                            }
                               
                            <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    } 

}

export default Book;