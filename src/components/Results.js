import React from "react";
import Word from "./Word";

function Results ({results, addFavourite}) {
  if( results !== null) {
    var resultNodes = results.map((result) => {
      return <Word word={result}/>
    }) 
  };

  if (results === null) {
    return (
      <div>No Result</div>
    )} else {
      return (
        <div id="results-main">
          {resultNodes}
          <button onClick={addFavourite}>Save Word</button>
        </div>
      )
    };
};

export default Results;
