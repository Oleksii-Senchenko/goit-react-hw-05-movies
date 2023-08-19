import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from 'API/API';

const DetailMovies = () => {
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchMovies(`movies/${moviesId}`); 
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDetails();
  }, [moviesId]);

  return <div>MoviesDetails: {moviesId}</div>;
};

export default DetailMovies;
