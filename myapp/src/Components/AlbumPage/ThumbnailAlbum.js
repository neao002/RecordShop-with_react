import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../ContextFolder/Context";

import Music from "../../ContextFolder/Songs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ThumbnailAlbum(props) {
  const context = useContext(UserContext);

  const addToChart = (dispatch) => {
    dispatch({
      type: "ADD_CHART_THUMB",
      payload: props.id,
    });
  };

  return (
    <div
      className="  px-1 pt-3 mx-auto d-flex flex-column justify-content-center align-items-center"
      style={{ borderRadius: "15px" }}
    >
      <div
        style={{ height: "200px" }}
        className="d-flex justify-content-center align-items-center"
      >
        {/* <Link to="/"> */}
        <img
          className="mb-2"
          src={props.image}
          style={{ width: "70%", height: "100%", borderRadius: "5px" }}
        ></img>
        {/* </Link> */}
      </div>
      <div style={{ height: "20px" }} className="mx-1">
        <Music></Music>
      </div>

      <div
        className=" d-flex justify-content-between align-items-center flex-column  px-1"
        style={{ height: "150px" }}
      >
        <p className="text-secondary">{props.releasedYear}</p>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h3>{props.title}</h3>
          <p>{props.artist}</p>

          <p>Price:{props.price} €</p>

          <button
            className=" btn-primary h-25"
            style={{ width: "130px" }}
            onClick={() => {
              addToChart(context.myDispatch);
            }}
          >
            <FontAwesomeIcon
              className=" highlight logocart mr-2 icon"
              icon={faShoppingCart}
              size="md"
            />
            Add to Cart
          </button>

          <p className="text-secondary">{props.genre}</p>
        </div>
      </div>
    </div>
  );
}

export default ThumbnailAlbum;
