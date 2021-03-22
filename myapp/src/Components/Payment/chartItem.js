import { useContext } from "react";
import UserContext from "../../ContextFolder/Context";

function ChartItems(props) {
  const context = useContext(UserContext);
  // console.log(context.myStateData.chart);
  const removeHandler = (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_CHART",
      payload: props.id,
    });
  };
  return (
    <div className="d-flex justify-content-between align-items-center border border-dark px-3 py-4 my-3">
      <div className="w-75 ">
        <h4>Artist: {props.artist}</h4>
        <p>
          <b>Album:</b> {props.title}
        </p>
        <p style={{ marginTop: "-10px" }}>
          <b>Genre:</b> {props.genre}
        </p>
        <h6>
          <b>Price:</b>
          {props.price.toFixed(2)} €
        </h6>
        <button
          className="btn-dark"
          onClick={() => {
            removeHandler(context.myDispatch);
          }}
        >
          Remove Item
        </button>
      </div>
      <img src={props.image} className="w-25 h-50"></img>
    </div>
  );
}

export default ChartItems;
