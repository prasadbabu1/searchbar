// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';
import data from './data/countries.json';  // Import your JSON data

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    if (!query) {
      setResults([]);
      return;
    }

    const filteredResults = data.filter(item =>
      item.country.toLowerCase().includes(query.toLowerCase()) ||
      item.capital.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
