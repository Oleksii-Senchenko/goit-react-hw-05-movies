import fetchMovies from 'API/API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMovies(`movie/${moviesId}/reviews`);
        setReviews(response.data.results);
      } catch (e) {
        console.error(e);
      }
    };
    fetchReviews();
  }, [moviesId]);

  return (
    <div>
      {reviews.length > 0 &&
        reviews.map(review => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))}
    {reviews.length === 0 && <p>Sorry review missed reviews</p>}
    </div>

  );
};

export default Reviews;
