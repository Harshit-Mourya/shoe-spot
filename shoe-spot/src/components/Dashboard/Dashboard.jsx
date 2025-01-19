import "./Dashboard.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { OrderContext } from "../../context/ordersContext";
import Loading from "../Loading.jsx";

import BackButton from "../BackButton";
import NoOrders from "./NoOrders";
import Order from "./Order";

export default function Dashboard() {
  const { user, loading, authToken } = useContext(UserContext);
  const { orders, clearOrders, orderLoading, fetchOrders } =
    useContext(OrderContext);
  console.log("user ", user, " orders ", orders);

  useEffect(() => {
    if (user && authToken) {
      fetchOrders(); // Call fetchOrders function to fetch orders when Dashboard is loaded
    }
  }, [user, authToken]);

  const handleCancelOrder = () => {
    // Show a confirmation dialog before proceeding
    const isConfirmed = window.confirm(
      "Are you sure you want to cancel the order?"
    );

    if (isConfirmed) {
      clearOrders(); // Proceed with clearing the orders if user confirms
    } else {
      console.log("Order cancellation was canceled");
    }
  };

  if (loading || orderLoading) {
    return <Loading />;
  }
  // Check if the user is null before rendering the user's name
  if (!user) {
    return <Loading />;
  }

  return (
    <>
      <div className="myDashboard pb-5 pt-5 text-center">
        <BackButton />

        <h1 className="m-0">Welcome {user.name}</h1>
        <div className="Orders mx-auto">
          {JSON.stringify(orders) === "{}" ? <NoOrders /> : null}
          {orders &&
            orders.items &&
            orders.items.map((order) => (
              <Order order={order} key={order._id} />
            ))}
        </div>
        <div className="dashboardEnd d-flex justify-content-around align-items-center mx-auto w-75">
          <h5 className="m-0">Total: ${orders.totalPrice ?? 0}</h5>
          <button
            onClick={() => handleCancelOrder()}
            className="btn cancelOrderBtn"
            disabled={JSON.stringify(orders) === "{}"}
          >
            Cancel Order
          </button>
          {/* <button
                onClick={() => handleClearCartClick()}
                className="btn clearCartBtn"
                disabled={cartItems.length === 0}
              >
                Clear Cart
              </button> */}
        </div>
      </div>
    </>
  );
}
