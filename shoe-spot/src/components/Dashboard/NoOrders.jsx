import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../../context/productsContext";

export default function NoOrders() {
  console.log("in noorders");
  const { setShoeCategory, filterProductsByCategory } =
    useContext(productsContext);
  const handleClick = () => {
    // console.log("To Home Button");

    setShoeCategory("all");
    filterProductsByCategory();
  };
  return (
    <>
      <div className="NoOrders">
        <h2>No orders are due!</h2>
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
