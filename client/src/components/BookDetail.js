import React from 'react';
import { Link } from 'react-router-dom';

function BookDetail({ book }) {
  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.name}</h1>
      <h2>by {book.author}</h2>
      <h3>Reviews:</h3>
      <ul>
        {book.reviews.map(review => (
          <li key={review.id}>
            <Link to={`/reviews/${review.id}`}>{review.author}</Link>: {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetail;
