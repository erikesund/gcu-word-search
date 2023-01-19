import React from "react";

function Definition({definition}) {
  return (
    <div id="definition-panel">
      <p id="definition-text">{definition.definition}</p>
      <p id="example-text">{definition.example}</p>
    </div>
  )
}

export default Definition;
