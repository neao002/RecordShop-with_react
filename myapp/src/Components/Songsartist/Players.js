import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setisPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  return (
    <div className="c-player">
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls isPlaying={isPlaying} setIsPlaying={setisPlaying} />
      <audio
        className="c-player--audio"
        src={props.songs[props.currentSongIndex].src}
        ref={audioElement}
        controls
      ></audio>
    </div>
  );
}

export default Player;
