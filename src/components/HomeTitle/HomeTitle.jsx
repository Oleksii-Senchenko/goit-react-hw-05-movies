import React, { useEffect, useState } from 'react';
import fetchMovies from '../../API/API';
import { HomeBox } from './HomeTitle.styled';
import Films from 'components/MoviesList/MoviesList';

const HomeTitle = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const fetchedMovies = await fetchMovies('trending/all/day');
        setResults(fetchedMovies.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrending();
  }, []);
  return (
    <HomeBox>
      <Films results={results} />
    </HomeBox>
  );
};

export default HomeTitle;

/* <Link to={`${result.id}`}>{result.title || result.name}</Link> */
