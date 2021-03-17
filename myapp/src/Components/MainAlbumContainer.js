import { useContext } from "react";
import ThumbNail from "./albums/ThumbnailAlbum";
import UserContext from "../Context/Context";
import {Link} from 'react-router-dom'
function MainAlbumContainer() {
  const context = useContext(UserContext);
  return (
    <div className="mx-auto" style={{ width: "80%" }}>
      <div className="d-flex flex-wrap justify-content-start">
        {context.myStateData.albums.map((album) => {
          return (
            <Link to='/album' style={{width:'32%', height:'260px'} }>
            <ThumbNail
              key={album.id}
              id={album.id}
              title={album.title}
              artist={album.artist}
              releasedYear={album.releaseYear}
              price={album.price}
            ></ThumbNail>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MainAlbumContainer;
