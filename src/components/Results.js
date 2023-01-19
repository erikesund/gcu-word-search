import React from "react";
import Word from "./Word";

function Results ({results, addFavourite}) {
  if( results !== null) {
    var resultNodes = results.map((result, index) => {
      return <Word word={result} key={index}/>
    }) 
  };

  if (results === null || results === undefined) { //need something to catch word not found
    return (
      <div></div>
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
