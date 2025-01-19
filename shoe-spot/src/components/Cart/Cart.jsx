import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { OrderContext } from "../../context/ordersContext";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading.jsx";

import "./Cart.css";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import BackButton from "../BackButton";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(cartContext);
  const { addUpdateOrder, cartLoading } = useContext(OrderContext);
  const navigate = useNavigate();

  // console.log(cartItems);

  const handleClearCartClick = () => {
    // console.log("Cart Cleared");
    clearCart();
  };

  const handleConfirmOrder = async () => {
    const items = cartItems;

    try {
      // Call addUpdateOrder to either create a new order or update an existing one
      await addUpdateOrder(items);

      // Clear the cart after confirming the order
      await clearCart();
      navigate("/dashboard");
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  if (cartLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="myCart pb-5 pt-5 text-center">
        <BackButton />

        <h1 className="m-0">Your Shopping Cart</h1>
        <div className="CartItems mx-auto">
          {cartItems.length === 0 ? <EmptyCart /> : null}
          {cartItems.map((item) => (
            <CartItem item={item} key={item.productId._id} />
          ))}
        </div>
        <div className="cartEnd d-flex justify-content-around align-items-center mx-auto w-75">
          <h5 className="m-0">Total: ${getCartTotal()}</h5>
          <button
            onClick={() => handleConfirmOrder()}
            className="btn confirmOrderBtn"
            disabled={cartItems.length === 0}
          >
            Confirm Order
          </button>
          <button
            onClick={() => handleClearCartClick()}
            className="btn clearCartBtn"
            disabled={cartItems.length === 0}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
}
