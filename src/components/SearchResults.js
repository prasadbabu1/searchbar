// src/components/SearchResults.js
import React from 'react';

function SearchResults({ results }) {
  return (
    <ul className="search-results">
      {results.map((item, index) => (
        <li key={index}>
          <strong>{item.country}</strong> - {item.capital}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
