import React, {useState} from "react";
import FavouriteWord from "../components/FavouriteWord";
import Results from "../components/Results";
import Search from "../components/Search";

function MainContainer () {

  const[searchTerm, setSearchTerm] = useState("");
  const[result, setResult] = useState(null);
  const[favoritedWords, setFavouritedWord] = useState([]);

  async function getDefinition(){
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchTerm;
    const response = await fetch(url);
    const data = await response.json();
    setResult(data)
  }

  return (
    <div id="main-panel">
      <div id="left-panel">
        <Search setSearchTerm={setSearchTerm} onClick={getDefinition}/>
        <FavouriteWord/>
      </div>
      <div id="right-panel">
        <Results result={result}/>
      </div>
    </div>
  )
}

export default MainContainer;