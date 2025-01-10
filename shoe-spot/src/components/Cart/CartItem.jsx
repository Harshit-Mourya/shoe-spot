import "./Cart.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

export default function CartItem({ item }) {
  // console.log(item);
  const { addToCart, removeFromCart, deleteFromCart } = useContext(cartContext);
  const handleRemoveItemClick = (item) => {
    if (item.quantity > 1) {
      removeFromCart(item.productId);
    }
  };
  return (
    <>
      <div className="CartItem ">
        <img src={item.productId.imgSrc} alt={item.productId.title} />
        <div className="item-info d-flex flex-column justify-content-center">
          <h5>{item.productId.title}</h5>
          <p>${item.productId.price}</p>
        </div>
        <div className="quantity d-flex flex-column justify-content-center   align-items-center">
          <div>
            <h6>Quantity</h6>
          </div>
          <div className="edit-qty d-flex justify-content-center align-items-center">
            <div onClick={() => handleRemoveItemClick(item)}>-</div>
            <div className="mx-1">{item.quantity}</div>
            <div onClick={() => addToCart(item.productId)}>+</div>
          </div>
        </div>
        <div className="sub-total d-flex flex-column justify-content-center align-items-center">
          <h6>Subtotal</h6>
          <h5>${item.quantity * item.productId.price}</h5>
        </div>
        <div className="remove-from-cart d-flex justify-content-center align-items-center">
          <button onClick={() => deleteFromCart(item.productId)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </>
  );
}
