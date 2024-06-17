import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ books }) {
  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <Link to={`/books/${book.id}`}>
            <h2>{book.name}</h2>
          </Link>
          <p>by {book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
