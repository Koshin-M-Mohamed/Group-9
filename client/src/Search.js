import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9000/searchResults/patient/${searchTerm}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("Checking if data prints accurately from search: ")
      console.log(data); // Logging the data for testing
      setSearchResults(data); // Set search results in state
      navigate("/search-results", { state: { searchResults: data } }); // Navigate to search results page with searchResults data
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='search-bar-Container'>
      <div className='searchBar'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
/*
import React from "react";
import { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9000/searchResults/exams/${searchTerm}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data); // Logging the data for testing
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='search-bar-Container'>
      <div className='searchBar'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
*/