import React from "react";

function Error404({error}) { //handles error based on object sent back by 404 on API call (word not existing).
  if(error) {
    return(
      <div id="error">
        <h3>{error.title}</h3>
        <div className="definition-panel">
          <p><em>{error.message}</em></p>
          <p>{error.resolution}</p>
        </div>
      </div>
    )
  };
};

export default Error404;
