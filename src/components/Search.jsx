import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search bg-gray-800 rounded-3xl">
      <div>
        <img src="/search.svg" alt="search icon" className="size-6" />
        <input
          type="text"
          placeholder="Search through thousands of movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-white text-2xl tracking-wide placeholder:text-xl"
        />
      </div>
    </div>
  );
};

export default Search;
