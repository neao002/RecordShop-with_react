import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../ContextFolder/Context";
function ThumbnailAlbum(props) {
  // const context = useContext(UserContext);
  // const addToChart = (dispatch) => {
  //   dispatch({
  //     type: "ADD_CHART",
  //     payload: props.id,
  //   });
  // };
  return (
    <div
      className="px-1 pt-3 mx-auto d-flex flex-column justify-content-center align-items-center mb-5"
      style={{
        // border: "1px solid grey",

        //I add the style directly to the Link element in => MainAlbumContainer

        // width: "30%",
        // height: "250px",
        borderRadius: "15px",
       
      }}
    >

      <div style={{ width: "50%", height: '200px' }}>
        {/* <Link to="/"> */}
        <img
          className="mt-2"
          src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8eW91dHViZSUyMHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          style={{ width: "100%", height: "80%", borderRadius: "5px" }}
        ></img>
        {/* </Link> */}
      </div>
      <div
        // className="d-flex justify-content-between flex-column my-auto px-1"
        className="d-flex justify-content-between flex-column  px-1"
        style={{ width: "50%", height: "150px" }}
      >
        <p className="text-secondary">{props.releasedYear}</p>
        <div className="d-flex justify-content-center flex-column">
          <h3>{props.title}</h3>
          <p>{props.artist}</p>

          <p>Price:{props.price} €</p>
          {/* <button
            className="btn-primary w-75 h-25"
            onClick={() => {
              addToChart(context.myDispatch);
            }}
          >
            Add to the chart
          </button> */}
          <p className="text-secondary">{props.genre}</p>
        </div>
      </div>
    </div>
  );
}

export default ThumbnailAlbum;
