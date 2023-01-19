import React from "react";
import FavouriteWord from "../components/FavouriteWord";
import Result from "../components/Result";
import Search from "../components/Search";

function MainContainer () {
  return (
    <div id="main-panel">
      <div id="left-panel">
        <Search/>
        <FavouriteWord/>
      </div>
      <div id="right-panel">
        <Result/>
      </div>
    </div>
  )
}

export default MainContainer;