import { useContext } from "react";
import UserContext from "../../ContextFolder/Context";
import ChartItem from "./chartItem";
import { Link } from "react-router-dom";
function Payment() {
  const context = useContext(UserContext);
  let totalPrice = 0;
  let delivery = 0;

  if (context.myStateData.loggedIn) {
    return (
      <div
        className="d-flex justify-content-start px-5 mx-auto my-4"
        style={{ width: "70%" }}
      >
        <div>
          {context.myStateData.chart.length == 0 ? null : (
            <h1>Items : {context.myStateData.chart.length}</h1>
          )}
          {context.myStateData.chart.map((item, index) => {
            totalPrice = totalPrice + item.price;
            if (totalPrice > 30) {
              delivery = 0;
            } else {
              delivery = 4.99;
            }
            return (
              <ChartItem
                key={index}
                artist={item.artist}
                title={item.title}
                price={item.price}
                id={item.id}
                genre={item.genre}
                image={item.image}
              ></ChartItem>
            );
          })}
        </div>
        {context.myStateData.chart.length == 0 ? (
          <h1 className="mx-auto my-auto" style={{ height: "50vh" }}>
            Your box is empty
          </h1>
        ) : (
          <div
            className="checkout bg-dark text-white py-3 pr-4 pl-3 ml-5 mr-5"
            style={{ height: "490px", minWidth: "350px", marginTop: "55px" }}
          >
            <h1 className="mb-3">Summary</h1>
            <div className=" d-flex justify-content-between align-items-center">
              <h4>Subtotal :</h4>
              <h3>{totalPrice.toFixed(2)} €</h3>
            </div>
            <div className=" d-flex justify-content-between align-items-center">
              <div>
                <h4 className="mt-4">Delivery :</h4>
                <p>Delivery is free up to 30€</p>
              </div>

              <h3>{delivery.toFixed(2)} €</h3>
            </div>
            <div className="mt-5 d-flex justify-content-between align-items-center">
              <h1>Total:</h1>
              <h3>{(totalPrice + delivery).toFixed(2)} €</h3>
            </div>
            <div className="d-flex justify-content-between mx-auto flex-column mt-3 h-25 w-100 px-2">
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
                  background: "white",
                  padding: "5px 7px",
                  fontWeight: "bolder",
                  color: "black",
                  margin: "3px 0",
                  fontStyle: "italic",
                }}
              >
                <span style={{ color: "blue", fontSize: "1.2rem" }}>P</span>ay
                <span style={{ color: "blue", fontSize: "1.2rem" }}>P</span>al
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
        )}
      </div>
    );
  } else {
    return (
      <div
        className="d-flex justify-content-around align-items-center flex-column"
        style={{ height: "30vh" }}
      >
        <h1>Please, Log in for shopping</h1>
        <Link to="/">
          <button className="btn-dark">Go to the Home</button>
        </Link>
      </div>
    );
  }
}

export default Payment;
