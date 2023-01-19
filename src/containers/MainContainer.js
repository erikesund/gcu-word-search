import React, {useEffect, useState} from "react";
import FavouriteWord from "../components/FavouriteWord";
import Results from "../components/Results";
import Search from "../components/Search";

function MainContainer () {

  const[searchTerm, setSearchTerm] = useState("");
  const[results, setResults] = useState(null);
  const[favouritedWords, setFavouritedWord] = useState(() => {
    const savedWords = localStorage.getItem("favouritedWords");
    const initialValue = JSON.parse(savedWords);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("favouritedWords", JSON.stringify(favouritedWords))
  }, [favouritedWords])

  async function getDefinition(){
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchTerm;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data)
  }

  function addFavourite() {
    let favouritedWordsCopy = [...favouritedWords];
    const isDuplicate = favouritedWords.includes(results[0].word)
    if(!isDuplicate) {
      favouritedWordsCopy.push(results[0].word)
      setFavouritedWord(favouritedWordsCopy)
    }
  }

  return (
    <div id="main-panel">
      <div id="left-panel">
        <Search setSearchTerm={setSearchTerm} onClick={getDefinition}/>
        <FavouriteWord favouritedWords={favouritedWords}/>
      </div>
      <div id="right-panel">
        <Results results={results} addFavourite={addFavourite}/>
      </div>
    </div>
  )
}

export default MainContainer;