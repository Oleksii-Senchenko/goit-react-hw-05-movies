import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchMovies from 'API/API';
import SearchBar from 'components/SearchBar/SearchBar';

function Movies() {
  const [result, setResult] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    const fetchMoviesList = async () => {
      try {
        const fetchedMoviesList = await fetchMovies(
          `search/movie?query=${searchQuery}`
        );
        setResult(fetchedMoviesList);
        console.log(fetchedMoviesList);
      } catch (e) {
        console.error(e);
      }
    };
    fetchMoviesList();
  }, [searchParams]);

  return (
    <>
      <SearchBar setSearchParams={setSearchParams} />
      <ul>
        {result.results.map(res => (
          <li key={res.id}>{res.original_title}</li>
        ))}
      </ul>
    </>
  );
}

export default Movies;


