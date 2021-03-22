import { useState } from "react";

import Player from "../Components/Songsartist/Players";

import Dreams from "../assets/img/songs/fleetwood.mp3";
import MichaelSong from "../assets/img/songs/michael.mp3";
import BeatlesSong from "../assets/img/songs/beatles.mp3";
import u2Song from "../assets/img/songs/u2.mp3";
import Nirvana from "../assets/img/songs/nirvana.mp3";

function Music() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songs] = useState([
    {
      title: "Dreams",
      artist: "FleetWoodMac",
      src: Nirvana,
    },
    {
      title: "Michael",
      artist: "Michael",
      src: MichaelSong,
    },
    {
      title: "Beatles",
      artist: "Beatles",
      src: BeatlesSong,
    },
    {
      title: "u2",
      artist: "u2",
      src: u2Song,
    },
    {
      title: "FleetwoodMac",
      artist: "u2",
      src: Dreams,
    },
  ]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default Music;
