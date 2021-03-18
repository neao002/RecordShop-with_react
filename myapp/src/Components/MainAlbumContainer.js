import { useContext } from "react";
import ThumbNail from "./albums/ThumbnailAlbum";
import UserContext from "../Context/Context";
import { Link } from 'react-router-dom'
function MainAlbumContainer(props) {
  const context = useContext(UserContext);
  const addToChart = (dispatch, albumId) => {
    console.log(albumId)
    dispatch({
      type: "ADD_CHART",
      payload: albumId,
    });
  };
  return (
    <div className="mx-auto" style={{ width: "80%" }}>
      <div className="d-flex flex-wrap justify-content-start">
        {context.myStateData.albums.map((album) => {
          return (
            //here the link to take care of
            <div style={{ width: '32%', height: '260px' }}>
              <Link to={{ pathname: '/album', state: { album: album } }} >
                <ThumbNail
                  key={album.id}
                  id={album.id}
                  title={album.title}
                  artist={album.artist}
                  releasedYear={album.releaseYear}
                  price={album.price}
                ></ThumbNail>
              </Link>
              <button
                className="btn-primary w-75 h-25 "
                onClick={() => {
                  addToChart(context.myDispatch, album.id);
                }}
              >
                Add to the chart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainAlbumContainer;
