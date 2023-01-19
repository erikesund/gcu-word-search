import React from "react";

function Search({setSearchTerm, onClick}) {

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <form>
        <input onChange={handleChange}></input>
        <button>Search</button>
      </form>
      <hr/>
    </div>
  )
}

export default Search;