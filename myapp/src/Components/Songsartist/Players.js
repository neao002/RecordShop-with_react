import React, { useState, useRef, useEffect } from "react";

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
    <div>
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
