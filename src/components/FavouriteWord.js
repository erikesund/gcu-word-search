import React from "react";

function FavouriteWord({favouritedWords}) {
  const favouritedNodes = favouritedWords.map((word) => {
    return <p id="favourited-words" key={word.word}><b>{word.word}</b>: <em>{word.definition}</em></p>
  });

  return (
    <div>
      <hr/>
      <h3>Favourite Words</h3>
      {favouritedNodes}
      </div>
  )
};

export default FavouriteWord;
