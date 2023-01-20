import React, {useEffect, useState} from "react";
import FavouriteWord from "../components/FavouriteWord";
import Results from "../components/Results";
import Search from "../components/Search";

function MainContainer () {
  const[searchTerm, setSearchTerm] = useState(""); //passed down to Search
  const[results, setResults] = useState(null); //passed down to Results
  const[favouritedWords, setFavouritedWord] = useState(() => { //retrieves saved words from localstorage, passed down to FavouriteWord
    const savedWords = localStorage.getItem("favouritedWords");
    const initialValue = JSON.parse(savedWords);
    return initialValue || []; // [] prevents crash if local storage is empty
  });

  useEffect(() => {
    localStorage.setItem("favouritedWords", JSON.stringify(favouritedWords))
  }, [favouritedWords]); //saves to local storage whenever favourited words is updated

  async function getDefinition(){ //api call
    try {
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchTerm;
      const response = await fetch(url);
      const data = await response.json();
      setResults(data);
    } catch(err) {
      console.log(err);
    }
  };

  function addFavourite() { //adds favorite word, function passed down to result
    let isDuplicate;
    let favouritedWordsCopy = [...favouritedWords];
    if (favouritedWordsCopy.some(result => result.word === results[0].word)) {
      isDuplicate = true;
    }
    if(!isDuplicate) {
      const favouriteWord = {
        word: results[0].word,
        definition: results[0].meanings[0].definitions[0].definition
      };
      favouritedWordsCopy.push(favouriteWord);
      setFavouritedWord(favouritedWordsCopy);
    };
  };

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
};

export default MainContainer;
