import { useContext } from "react";
import UserContext from "../../ContextFolder/Context";

function Payment() {
  const context = useContext(UserContext);
  console.log(context.myStateData.chart);
  //! remove handler has to be fixed
  const removeHandler = (index, dispatch) => {
    dispatch({
      type: "REMOVE_FROM_CHART",
      payload: index,
    });
  };
  let totalPrice = 0;
  let delivery = 0;
  //? minimum limit for delivery 30€
  if (totalPrice < 30) {
    delivery = 4.99;
  } else {
    delivery = 0;
  }
  return (
    <div
      className="d-flex justify-content-start px-5 mx-auto my-4"
      style={{ width: "80%" }}
    >
      <div>
        <h1>Items:</h1>
        {context.myStateData.chart.map((item, index, a) => {
          totalPrice = totalPrice + item.price;
          // console.log(index);
          return (
            <div
              key={index}
              style={{
                width: "100%",
                height: "190px",
                border: "1px solid black",
              }}
              className="d-flex justify-content-between align-items-center px-3 mb-2"
            >
              <div className="w-75 ">
                <h4>Artist: {item.artist}</h4>
                <p>
                  <b>Album:</b> {item.title}
                </p>
                <p style={{ marginTop: "-20px" }}>
                  <b>Genre:</b> {item.genre}
                </p>
                <h6>
                  <b>Price:</b>
                  {item.price.toFixed(2)} €
                </h6>
                <button
                  className="btn-dark"
                  onClick={() => {
                    removeHandler(index, context.myDispatch);
                  }}
                >
                  Remove Item
                </button>
              </div>
              <img src={item.image} className="w-25 h-75"></img>
            </div>
          );
        })}
      </div>
      <div
        className="bg-dark text-white py-3 pr-4 pl-3 ml-3 mr-5"
        style={{ height: "500px", width: "55%", marginTop: "55px" }}
      >
        <h1 className="mb-3">Summary</h1>
        <div className=" d-flex justify-content-between align-items-center">
          <h4>Subtotal:</h4>
          <h3>{totalPrice}</h3>
        </div>
        <div className=" d-flex justify-content-between align-items-center">
          <h4>Delivery:</h4>
          <h3>{delivery}</h3>
        </div>
        <div className="mt-5 d-flex justify-content-between align-items-center">
          <h1>Total:</h1>
          <h3>{totalPrice + delivery} €</h3>
        </div>
        <div className="d-flex justify-content-between mx-auto flex-column mt-3 h-25 w-100 px-4">
          <button
            style={{
              background: "#ff7700",
              padding: "5px 7px",
              fontWeight: "bolder",
              color: "white",
              margin: "3px 0",
            }}
          >
            Credit Card
          </button>
          <button
            style={{
              background: "#ff7700",
              padding: "5px 7px",
              fontWeight: "bolder",
              color: "white",
              margin: "3px 0",
            }}
          >
            PayPal
          </button>
          <button
            style={{
              background: "#ff7700",
              padding: "5px 7px",
              fontWeight: "bolder",
              color: "white",
              margin: "3px 0",
            }}
          >
            Money Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
