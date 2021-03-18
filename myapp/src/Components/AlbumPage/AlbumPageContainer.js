import React from "react";
import Hero from "./AlbumTemplateHero";
import Carousel from "./AlbumBottomSuggestions";
import { useLocation } from "react-router-dom";
const AlbumPageContainer = () => {
  let location = useLocation();
  console.log(location.state);
  const { artist, title } = location.state.album;
  return (
    <div>
      <p>album page container</p>

      <p>{artist}</p>
      <p>{title}</p>
    </div>
  );
};

export default AlbumPageContainer;
