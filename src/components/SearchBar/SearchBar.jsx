import React, { useState } from 'react';

const SearchQuery = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams(query);
    
  };

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <form action="">
      <input type="text" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}></button>
    </form>
  );
};

export default SearchQuery;
