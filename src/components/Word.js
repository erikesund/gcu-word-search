import React from "react";
import Meaning from "./Meaning";

function Word({word}) {
  const meaningsNodes = word.meanings.map((meaning) => {
      return <Meaning meaning={meaning}/>
    })

    return (
      <div>{word.word} {meaningsNodes}</div>
      )
    }
      
export default Word;