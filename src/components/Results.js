import React from "react";

function Results ({result}) {
  if (result === null) {
    return (
      <div>No Result</div>
    )} else {
      return (
        <div id="results-main">
          Result
        </div>
      )
    }
}


export default Results;