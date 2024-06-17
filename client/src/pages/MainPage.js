import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';

function MainPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <BookList books={books} />
    </div>
  );
}

export default MainPage;
