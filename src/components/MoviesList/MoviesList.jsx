import React from 'react';
import { MoviesList, MoviesItem, MoviesLink } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const Films = ({ results }) => {
  const location = useLocation();
  console.log(location);
  return (
    <MoviesList style={{ borderRadius: '30px' }}>
      {results.map(result => (
        <MoviesItem key={result.id}>
          <MoviesLink to={`/movies/${result.id}`} state={{ from: location }}>
            {result.title || result.name}{' '}
          </MoviesLink>
        </MoviesItem>
      ))}
    </MoviesList>
  );
};

export default Films;
