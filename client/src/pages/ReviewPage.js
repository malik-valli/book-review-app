import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewDetail from '../components/ReviewDetail';

function ReviewPage() {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    axios.get(`/books/${id}/reviews`)
      .then(response => {
        setReview(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the review!', error);
      });
  }, [id]);

  return (
    <div>
      <ReviewDetail review={review} />
    </div>
  );
}

export default ReviewPage;
