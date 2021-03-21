import { useContext } from "react";
import UserContext from "../../ContextFolder/Context";

//fontawesome components from react fontawesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCoffee,
  faDesktop,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function CarouselItem(props) {
  const context = useContext(UserContext);
  const addToChart = (dispatch) => {
    dispatch({
      type: "ADD_CHART_CAROUSEL",
      payload: props.id,
    });
  };
  return (
    <div
      className="Jumbotrom Fluid bg-white mr-5  d-flex justify-content-between align-items-center"
      style={{ height: "70vh" }}
    >
      <div className="w-50 d-flex flex-column align align-items-center">
        <div>
          <h1 className="text-secondary">{props.title}</h1>
          <p className="text-left">{props.artist}</p>
          <h5 className="text-left">Price:{props.price} €</h5>
        </div>

        <button
          className="carouselButton w-3 0 mx-5 mt-5"
          onClick={() => {
            addToChart(context.myDispatch);
          }}
        >
          <FontAwesomeIcon
            className=" highlight logocart mr-3 icon"
            icon={faShoppingCart}
            size="1x"
          />
          Add to Cart
        </button>
      </div>
      <img
        style={{ height: "40vh", width: "40%", margin: "0 auto" }}
        src={props.img}
        alt="slide"
      />
    </div>
  );
}

export default CarouselItem;
