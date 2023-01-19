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
    <div>
      <form>
        <input onChange={handleChange}></input>
        <button onClick={handleSearchClick}>Search</button>
      </form>
      <hr/>
    </div>
  )
};

export default Search;
