import React, { useState } from 'react';

const SearchQuery = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('')
  };

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchQuery;
