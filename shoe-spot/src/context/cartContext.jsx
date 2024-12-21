import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      // Check if the item is already in the cart
      const isItemInCart = prevCartItems.find(
        (cartItem) => cartItem._id === item._id
      );

      if (isItemInCart) {
        // If the item is already in the cart, increase its quantity
        return prevCartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item is not in the cart, add it with quantity 1
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);

    // Ensure that the item was found before checking its quantity
    if (isItemInCart) {
      if (isItemInCart.quantity === 1) {
        // If quantity is 1, remove the item from the cart entirely
        setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
      } else {
        // If quantity is greater than 1, decrease the quantity of the item by 1
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      }
    }
  };

  const deleteFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);
    if (isItemInCart) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    }
  };

  const clearCart = () => {
    setCartItems([]); // set the cart items to an empty array
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ); // calculate the total price of the items in the cart
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <cartContext.Provider
      value={{
        cartItems,
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
