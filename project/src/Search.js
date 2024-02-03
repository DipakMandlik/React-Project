import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import "./Search.css";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        // Call a function to fetch search results based on the search query
        // fetchSearchResults(e.target.value);
    };

    // Function to fetch search results based on the search query
    const fetchSearchResults = (query) => {
        // Example API call to fetch search results
        // Replace this with your actual API call
        fetch(`https://api.example.com/search?q=${query}`)
            .then((response) => response.json())
            .then((data) => {
                setSearchResults(data.results);
            })
            .catch((error) => {
                console.error("Error fetching search results:", error);
            });
    };

    return (
        <section className='search_section'>
            <div className='search_input_div'>
                <input
                    type='text'
                    className='search_input'
                    placeholder='Search...'
                    autoComplete='off'
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <div className='search_icon'>
                    <SearchIcon />
                    {/* <CloseIcon /> */}
                </div>
            </div>
            <div className='search_result'>
                {/* Display search results */}
                {searchResults.map((result) => (
                    <a
                        href={result.url}
                        target='_blank'
                        className='search_suggestion_line'
                        key={result.id}
                    >
                        {result.title}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default SearchBar;
