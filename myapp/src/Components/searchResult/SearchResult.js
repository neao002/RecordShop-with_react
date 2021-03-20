import { useContext } from "react";
import UserContext from "../../ContextFolder/Context";
import ThumbnailAlbum from "../AlbumPage/ThumbnailAlbum";
import { Link } from "react-router-dom";
function SearchResult() {
  const context = useContext(UserContext);
  console.log(context.myStateData.searchResult);
  return (
    <div>
      {context.myStateData.searchResult.map((album) => {
        console.log(album);
        return (
          <div>
            {/* <Link to={{ pathname: "/album", state: { album: album } }}> */}
            <ThumbnailAlbum
              key={album.id}
              id={album.id}
              title={album.title}
              artist={album.artist}
              // releasedYear={album.releaseYear}
              price={album.price}
            ></ThumbnailAlbum>
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
