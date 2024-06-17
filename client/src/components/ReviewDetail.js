import React from 'react';

function ReviewDetail({ review }) {
  if (!review) return <div>Loading...</div>;

  return (
    <div>
      <h1>{review.author}</h1>
      <p>{review.text}</p>
    </div>
  );
}

export default ReviewDetail;
