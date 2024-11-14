import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import "./Cart.css";

import CartItem from "./CartItem";

import AddToCartBtn from "./AddToCartBtn";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(cartContext);
  console.log(cartItems);
  const handleClearCartClick = () => {
    console.log("Cart Cleared");
    clearCart();
  };

  return (
    <>
      <div className="myCart pb-5 pt-5 text-center">
        <h1 className="m-0">Your Shopping Cart</h1>
        <div className="CartItems mx-auto">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <div className="cartEnd d-flex justify-content-around align-items-center mx-auto w-75">
          <h5 className="m-0">Total: ${getCartTotal()}</h5>
          <button
            onClick={() => handleClearCartClick()}
            className="btn clearCartBtn"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
}
