import React, { useEffect, useState } from 'react';
import fetchMovies from '../../API/API';
import { Link } from 'react-router-dom';

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
    <>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <Link to={`/movies/${result.id}`}>  {result.title || result.name} </Link>
           
           
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeTitle;

/* <Link to={`${result.id}`}>{result.title || result.name}</Link> */
