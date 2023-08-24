import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import fetchMovies from 'API/API';
import SearchQuery from 'components/SearchBar/SearchBar';
import Films from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    const query = searchQuery.get('query');
    if (!query) {
      return;
    }
    const fetchSearchMovies = async () => {
      const result = await fetchMovies(`search/movie?query=${query}`);
      setMovies(result.data.results);
    };
    fetchSearchMovies();
  }, [searchQuery]);

  const onSubmit = query => {
    setSearchQuery({ query: query });
  };
  return (
    <div>
      <SearchQuery onSubmit={onSubmit} />
      <Films  results={movies}/>
    </div>
  );
};

export default Movies;
