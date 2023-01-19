import React from "react";
import Defintion from "./Definition";

function Meaning({meaning}) {

  const definitionNodes = meaning.definitions.map((definition) => {
    return <Defintion definition={definition}/>
  })

  return(
    <div>{meaning.partOfSpeech} {definitionNodes}</div>
  )
}

export default Meaning