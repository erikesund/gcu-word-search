import React from "react";
import Error404 from "./Error404";
import Word from "./Word";

function Results ({results, addFavourite}) {
  if (results === null) {
    return (
      <div className="results-feedback">Please search for a word to find a definition and add to favourites.</div>
    )}
     else if (results.title === "No Definitions Found"){
      return <Error404 error={results}/>
    } 
    else if ( results !== null) {
    var resultNodes = results.map((result, index) => {
      return <Word word={result} key={index}/>
    }) 
    } 
    return (
      <div id="results-main">
        {resultNodes}
        <button onClick={addFavourite}>Save Word</button>
      </div>
      )
    };
  
export default Results;
