import { useContext } from "react";
import UserContext from "../../ContextFolder/Context";

function Payment() {
  const context = useContext(UserContext);
  console.log(context.myStateData.chart);
  return (
    <div className="d-flex justify-content-center mx-5">
      <div>
        <h1>Items:</h1>
        {/* map of chart */}
      </div>
      <div className="bg-dark">
        <h1>Summary</h1>
        <div>
          <p>Subtotal</p>
        </div>
        <div>
          <p>Delivery</p>
        </div>
        <div>
          <h1>Total</h1>
        </div>

        <button>Credit Card</button>
        <button>PayPal</button>
        <button>Money Transfer</button>
      </div>
    </div>
  );
}

export default Payment;
