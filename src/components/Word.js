import React from "react";
import Meaning from "./Meaning";

function Word({word}) {
  const meaningsNodes = word.meanings.map((meaning, index) => {
      return <Meaning meaning={meaning} key={index}/>
    })

    return (
        <div id="word-panel">
          <h3 id="word-text">{word.word}</h3> 
          <p>{meaningsNodes}</p>
        </div>
      )
    };
      
export default Word;
