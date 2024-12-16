import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import "./Cart.css";

export default function AddToCartBtn({ product }) {
  const { addToCart } = useContext(cartContext);
  const handleButtonClick = (product) => {
    console.log("Add To Cart");
    console.log(product);
    addToCart(product);
  };

  return (
    <>
      <button
        onClick={() => handleButtonClick(product)}
        className="btn AddToCartBtn"
      >
        Add to Cart
      </button>
    </>
  );
}
