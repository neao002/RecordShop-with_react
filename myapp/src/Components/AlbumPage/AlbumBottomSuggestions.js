import { useContext } from "react";
import UserContext from "../../ContextFolder/Context";
import Thumbnail from './ThumbnailAlbum.js'
const AlbumBottomSuggestions = (props) => {
  const genre = props.albumGenre;
  const context = useContext(UserContext);
  const sameGenre = context.myStateData.albums.filter(album => album.genre === genre )
  return (
    <div>
      <h1>Test</h1>
      {sameGenre.map(album => {
        return(
          <Thumbnail
            key={album.id}
            id={album.id}
            title={album.title}
            artist={album.artist}
            releasedYear={album.releaseYear}
            price={album.price}
          />

        )
      })}
    </div>
  );
};

export default AlbumBottomSuggestions;


