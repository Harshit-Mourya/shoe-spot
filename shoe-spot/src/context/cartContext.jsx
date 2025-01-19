import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./userContext";
import axios from "axios";
axios.defaults.baseURL = "https://shoe-spot-backend.onrender.com";
export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(true); // Track orderLoading state

  const { authToken } = useContext(UserContext);

  const userId = localStorage.getItem("userId");

  const handleResponseData = (responseData) => {
    console.log(responseData);
    const items = responseData.map((item) => ({
      ...item, // Spread the properties of the original item
      productId: item.productId,
      quantity: item.quantity,
    }));
    return items;
  };

  useEffect(() => {
    if (!userId) {
      console.log("UserId not found!");
      return;
    }
    const fetchCart = async () => {
      try {
        console.log("userId : ", userId, "authToken ", authToken);
        const response = await axios.get(`/cart/${userId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`, // Add Bearer token here
          },
        });
        console.log("Cart data got : ", response.data.items);
        const items = handleResponseData(response.data.items);
        console.log("Items ", items);
        setCartItems(items || []);
        setCartLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setCartLoading(false);
      }
    };
    fetchCart();
  }, [userId]);

  const addToCart = async (item) => {
    // setCartItems((prevCartItems) => {
    // Check if the item is already in the cart
    // const isItemInCart = prevCartItems.find(
    // (cartItem) => cartItem._id === item._id
    // );

    // if (isItemInCart) {
    // If the item is already in the cart, increase its quantity
    // return prevCartItems.map((cartItem) =>
    // cartItem._id === item._id
    // ? { ...cartItem, quantity: cartItem.quantity + 1 }
    // : cartItem
    // );
    // } else {
    // If the item is not in the cart, add it with quantity 1
    // return [...prevCartItems, { ...item, quantity: 1 }];
    // }
    // });

    console.log("In addToCart: ", item);
    try {
      const response = await axios.post(
        `/cart/${userId}`,
        {
          productId: item._id,
          quantity: 1, // default quantity is 1
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Add Bearer token here
          },
        }
      );
      console.log("addToCart: ", response.data.items);
      const items = handleResponseData(response.data.items);
      console.log("Items ", items);
      setCartItems(items || []);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const removeFromCart = async (item) => {
    console.log("item id: ", item._id);

    try {
      // Send a request to the backend to either remove the item completely
      // or decrease the quantity based on the backend logic.
      const response = await axios.post(
        `/cart/${userId}/item`,
        { productId: item._id },
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Add Bearer token here
          },
        }
      );

      console.log("After removal ", response.data);
      // Update the cart items with the response from the server
      // setCartItems(response.data.cart.items || []);
      const items = handleResponseData(response.data.items);
      console.log("Items ", items);
      setCartItems(items || []);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }

    // const isItemInCart = cartItems.find(
    //   (cartItem) => cartItem._id === item._id
    // );

    // // Ensure that the item was found before checking its quantity
    // if (isItemInCart) {
    //   if (isItemInCart.quantity === 1) {
    //     // If quantity is 1, remove the item from the cart entirely
    //     setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    //   } else {
    //     // If quantity is greater than 1, decrease the quantity of the item by 1
    //     setCartItems(
    //       cartItems.map((cartItem) =>
    //         cartItem._id === item._id
    //           ? { ...cartItem, quantity: cartItem.quantity - 1 }
    //           : cartItem
    //       )
    //     );
    //   }
    // }
  };

  const deleteFromCart = async (item) => {
    try {
      // Find the productId from the item to be deleted
      console.log(item);
      // Send DELETE request to backend to remove the item
      const response = await axios.delete(`/cart/${userId}/item`, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Add Bearer token here
        },

        data: { productId: item._id },
      });
      console.log("After deletion ", response.data);

      const items = handleResponseData(response.data.items); // Extract the updated items
      setCartItems(items || []); // Update the state with the new cart items
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  // const deleteFromCart = (item) => {
  //   const isItemInCart = cartItems.find(
  //     (cartItem) => cartItem._id === item._id
  //   );
  //   if (isItemInCart) {
  //     setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
  //   }
  // };

  // const clearCart = () => {
  //   setCartItems([]); // set the cart items to an empty array
  // };

  const getCartTotal = () => {
    // Calculate the total price using product prices and quantities from the cartItems
    const total = cartItems.reduce((total, item) => {
      // Assuming item.productId contains the product details (including price)
      return total + item.productId.price * item.quantity; // Multiply price by quantity
    }, 0);

    return total; // Return the calculated total price

    // return cartItems.reduce(
    //   (total, item) => total + item.price * item.quantity,
    //   0
    // );
  };

  const clearCart = async () => {
    try {
      setCartLoading(true);
      // Send a DELETE request to clear the cart on the backend
      const response = await axios.delete(`/cart/${userId}/cart`, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Add Bearer token here
        },
      });

      // After clearing the cart on the backend, clear the cart in the context
      setCartItems(response.data.cart.items || []); // Clear cartItems state (frontend)
      setCartLoading(false);
      console.log("Cart cleared successfully:", response.data.cart.items);
    } catch (error) {
      console.error("Error clearing the cart:", error);
    }
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        cartLoading,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

// commit message 26.12.24
// Fix: Implement login functionality and cart management with backend API integration

// - Added logic to store token and user data in localStorage and state after login.
// - Accessed and logged userId from userData during login, ensuring consistent handling of user data throughout the login flow.
// - Implemented methods to retrieve userId from state and localStorage.
// - Updated CartContext to integrate with backend for fetching, adding, removing, deleting, and clearing items from the cart.
// - Added API calls to the backend for managing cart items (`/cart/:userId` endpoints).
// - Refactored cart functions to update cart state based on the response from the backend.
// - Implemented cart total calculation dynamically based on product prices and quantities.
