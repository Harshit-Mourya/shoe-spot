import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://shoe-spot-backend.onrender.com";

import { UserContext } from "./userContext";
export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState({}); // Store orders in state
  const [orderLoading, setOrderLoading] = useState(true); // Track orderLoading state
  const [error, setError] = useState(null); // Store errors

  const { user, authToken } = useContext(UserContext);

  const fetchOrders = async () => {
    if (!user || !authToken) {
      setOrderLoading(false); // Stop loading if no user or authToken
      return; // Do not proceed if there is no user or authToken
    }
    console.log("user ", user);
    const userId = user._id;
    try {
      const response = await axios.get(`/orders/${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Add Bearer token here
        },
      });
      console.log("In ordersContext ", response.data);
      setOrders(response.data); // Set orders in state
      setOrderLoading(false); // Stop orderLoading
    } catch (error) {
      setError("Failed to fetch orders"); // Handle errors
      setOrderLoading(false);
    }
  };

  // Fetch orders for the user
  useEffect(() => {
    if (authToken) {
      fetchOrders(); // Fetch orders if authToken is available
    } else {
      setOrderLoading(false); // Stop orderLoading if no authToken
    }
  }, [authToken, user]); // Re-fetch orders when authToken changes

  // Function to add or update order
  const addUpdateOrder = async (items) => {
    console.log(items);
    const sendItems = items.map((item) => {
      return {
        productId: item.productId._id,
        quantity: item.quantity,
        price: item.productId.price,
      };
    });
    console.log(sendItems);

    const userId = user._id; // Get userId from context

    try {
      // Send request to backend to add or update the order
      const response = await axios.post(
        `/orders/${userId}`,
        { sendItems },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("order response ", response.data.orders);

      // Update the order state with the response data (order details)
      setOrders([response.data.orders]); // Set the updated/new order in state
    } catch (error) {
      console.error("Error in adding/updating order:", error);
      setOrderStatus({ message: "Error in processing order", success: false }); // Set error message for failed request
    }
  };

  const clearOrders = async () => {
    setOrderLoading(true);
    const userId = user._id; // Get userId from context
    const orderId = orders._id;
    try {
      // Make DELETE request to remove the order
      const response = await axios.delete(`/orders/${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        data: { orderId },
      });

      // If successful, filter out the deleted order from the state
      setOrders(response.data.orders);
      setOrderLoading(false);
      console.log("Order deleted successfully:", response.data);
    } catch (error) {
      console.error("Error in deleting order:", error);
      setError("Error deleting order");
      setOrderLoading(false);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        orderLoading,
        error,
        addUpdateOrder,
        clearOrders,
        fetchOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
