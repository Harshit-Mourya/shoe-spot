import "./Dashboard.css";
import { useContext } from "react";
import { OrderContext } from "../../context/ordersContext";
export default function Order({ order }) {
  console.log(order);
  const { orders, clearOrders } = useContext(OrderContext);

  //   const handleRemoveItemClick = (item) => {
  //     if (item.quantity > 1) {
  //       removeFromCart(item.productId);
  //     }
  //   };
  return (
    <>
      <div className="Order ">
        <img src={order.productId.imgSrc} alt={order.productId.title} />
        <div className="order-info d-flex flex-column justify-content-center">
          <h5>{order.productId.title}</h5>
          <p>${order.price}</p>
        </div>
        <div className="quantity d-flex flex-column justify-content-center   align-items-center">
          <div>
            <h6>Quantity</h6>
          </div>
          <div className="edit-qty d-flex justify-content-center align-items-center">
            {/* <div onClick={() => handleRemoveItemClick(item)}>-</div> */}
            <div className="mx-1">{order.quantity}</div>
            {/* <div onClick={() => addToCart(item.productId)}>+</div> */}
          </div>
        </div>
        <div className="sub-total d-flex flex-column justify-content-center align-items-center">
          <h6>Subtotal</h6>
          <h5>${order.quantity * order.price}</h5>
        </div>
        {/* <div className="remove-from-cart d-flex justify-content-center align-items-center">
          <button onClick={() => deleteFromCart(item.productId)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div> */}
      </div>
    </>
  );
}
