import React from "react";
import Definition from "./Definition";

function Meaning({meaning}) {

  const definitionNodes = meaning.definitions.map((definition, index) => {
    return <Definition definition={definition} key={index}/>
  });

  return(
    <div id="meaning-panel"><em>{meaning.partOfSpeech}</em> {definitionNodes}</div>
  )
};

export default Meaning;
