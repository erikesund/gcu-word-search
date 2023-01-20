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
      <h3>Wordsearch</h3>
      <form>
        <input onChange={handleChange} type="text"></input>
        <button onClick={handleSearchClick}>Search</button>
      </form>
    </div>
  )
};

export default Search;
