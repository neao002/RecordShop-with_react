import { useContext } from "react";
import ThumbNail from "./albums/thumbnailAlbum";
import UserContext from "../Context/context";
function mainAlbumContainer() {
  const context = useContext(UserContext);
  return (
    <div className="mx-auto" style={{ width: "80%" }}>
      <div className="d-flex flex-wrap justify-content-start">
        {context.myStateData.albums.map((album) => {
          return (
            <ThumbNail
              key={album.id}
              id={album.id}
              title={album.title}
              artist={album.artist}
              releasedYear={album.releaseYear}
              price={album.price}
            ></ThumbNail>
          );
        })}
      </div>
    </div>
  );
}

export default mainAlbumContainer;
