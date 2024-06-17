import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the book!', error);
      });
  }, [id]);

  return (
    <div>
      <BookDetail book={book} />
    </div>
  );
}

export default BookPage;
