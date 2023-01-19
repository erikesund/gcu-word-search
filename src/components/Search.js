import React from "react";

function Search({setSearchTerm, onClick}) {

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  function handleSearchClick(e) {
    onClick();
    e.preventDefault();
  };

  return (
    <div id="search-panel">
      <h3>Look Up A Word</h3>
      <form>
        <input onChange={handleChange}></input>
        <button onClick={handleSearchClick}>Search</button>
      </form>
    </div>
  )
};

export default Search;
