import "./Cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../../context/productsContext";

export default function EmptyCart() {
  const { setShoeCategory, filterProductsByCategory } =
    useContext(productsContext);
  const handleClick = () => {
    // console.log("To Home Button");

    setShoeCategory("all");
    filterProductsByCategory();
  };
  return (
    <>
      <div className="EmptyCart">
        <h2>Your cart is empty!</h2>
        <h4>
          <Link to="/" className="redirectBtn" onClick={handleClick}>
            Click here
          </Link>
          &nbsp;to start shopping.
        </h4>
      </div>
    </>
  );
}
