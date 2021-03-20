import React from "react";
import Hero from "./AlbumTemplateHero";
import Suggestions from "./AlbumBottomSuggestions";
import { useLocation } from "react-router-dom";

const AlbumPageContainer = () => {
  let location = useLocation();
  console.log(location);
  const { genre } = location.state.album;
  return (
    <div>
      <Hero albumData={location.state.album}/>
      <Suggestions albumGenre={genre}/>
    
    </div>
  );
};

export default AlbumPageContainer;
