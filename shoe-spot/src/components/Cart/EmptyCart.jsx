import "./Cart.css";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <>
      <div className="EmptyCart">
        <h2>Your cart is empty!</h2>
        <h4>
          <Link to="/" className="redirectBtn">
            Click here
          </Link>
          &nbsp;to start shopping.
        </h4>
      </div>
    </>
  );
}
