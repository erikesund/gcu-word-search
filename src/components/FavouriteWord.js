import React from "react";

function FavouriteWord({favouritedWords}) {
  const favouritedNodes = favouritedWords.map((word) => {
    return <p key={word}>{word}</p>
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
