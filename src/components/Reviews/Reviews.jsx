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
        setReviews(response);
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchReviews();
  }, [moviesId]);
  console.log(reviews);

  return <div>Reviews</div>;
};

export default Reviews;
