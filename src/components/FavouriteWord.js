import React from "react";

function FavouriteWord({favouritedWords}) {
  const favouritedNodes = favouritedWords.map((word) => {
    return <p>{word}</p>
  })

  return (
    <div>
      <h3>Favourite Words</h3>
      {favouritedNodes}
      </div>
  )
}

export default FavouriteWord;

