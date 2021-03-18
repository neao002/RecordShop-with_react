import { useContext } from "react";
import ThumbNail from "./ThumbnailAlbum";
import UserContext from "../../ContextFolder/Context";
import { Link } from "react-router-dom";
import { Col, Row } from 'react-bootstrap'
function MainAlbumContainer() {
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
      <h1 className="bg-dark mx-4 py-2 px-4 mb-4" style={{ color: "#ff7700" }}>
        Latest
      </h1>
      <div className="d-flex flex-wrap justify-content-start">
        {context.myStateData.albums.map((album) => {
          return (
            //! when we put all container in link,the button(add to chart) gets disabled,we need to find a solution for it
            //! i kept inside div for now
            // <Link to="/album" style={{ width: "32%", height: "260px" }}>
            <div style={{ width: "25%", border: '1px solid black'}} className='d-flex flex-column mb-5 justify-content-center '>

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
                className="btn-primary mb-5 "
                style = {{width:'30%', alignSelf:'center'}}
                onClick={() => {
                  addToChart(context.myDispatch, album.id);
                }}
              >  Add
            </button>


            </div>

          );
        })}
      </div>
    </div>
  );
}

export default MainAlbumContainer;
