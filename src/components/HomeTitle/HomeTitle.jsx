import React, { useEffect, useState } from 'react';
import fetchMovies from '../../API/API';

import {
  HomeBox,
  HomeList,
  HomeItem,
  HomeLink,

} from './HomeTitle.styled';

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
      <HomeList style={{ borderRadius: '30px' }}>
        {results.map(result => (
          <HomeItem key={result.id}>
            <HomeLink to={`/movies/${result.id}`}>
              {' '}
              {result.title || result.name}{' '}
            </HomeLink>
          </HomeItem>
        ))}
      </HomeList>
   
    </HomeBox>
  );
};

export default HomeTitle;

/* <Link to={`${result.id}`}>{result.title || result.name}</Link> */
