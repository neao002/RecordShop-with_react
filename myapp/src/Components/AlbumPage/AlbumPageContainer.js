import React from "react";
import Hero from "./AlbumTemplateHero";
import Suggestions from "./AlbumBottomSuggestions";
import { useLocation } from "react-router-dom";

const AlbumPageContainer = () => {
  let location = useLocation();
  const { genre } = location.state.album;
  return (
    <div>
      <Hero albumData={location.state.album} style={{height:'60vh'}}/>
      <Suggestions albumGenre={genre} style={{height:'20vh'}}/>
    
    </div>
  );
};

export default AlbumPageContainer;
