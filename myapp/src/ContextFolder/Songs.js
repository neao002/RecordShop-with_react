import { useState, useEffect } from "react";
import Player from "../Components/Songsartist/Players";

import Dreams from "../assets/img/songs/fleetwood.mp3";

function App() {
  const [songs] = useState([
    {
      title: "Dreams",
      artist: "FleetWoodMac",
      src: Dreams,
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

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

export default App;
