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
        console.log(response.data.results);
      } catch (e) {
        console.error(e);
      }
    };
    fetchReviews();
  }, [moviesId]);

  return (
    <div>
      {reviews.map(review => (
        <div key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>

        </div>
      ))}
    </div>
  );
};

export default Reviews;
