import { useContext } from "react";
import ThumbNail from "./albums/ThumbnailAlbum";
import UserContext from "../ContextFolder/Context";
function mainAlbumContainer() {
  const context = useContext(UserContext);
  return (
    <div className="mx-auto" style={{ width: "80%" }}>
      <h1 className="bg-dark mx-4 py-2 px-4 mb-4" style={{ color: "#ff7700" }}>
        Latest
      </h1>
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
