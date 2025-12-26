import { createContext, useState } from "react";

// Cart Context
export const CartContext = createContext();

// cart Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // main function to update the shopping cart
  const updateCart = (newItem) => {
    setCartItems((prevItems) => {
      // the cart index to search for the product
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      );
      // Remove product product
      if (newItem.quantity === 0 || newItem.quantity === null) {
        return prevItems.filter((item) => item.id !== newItem.id);
      }

      if (existingItemIndex > -1) {
        // update product
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          ...newItem /* update price */,
        };
        return updatedItems;
      } else {
        // Add new product
        return [...prevItems, newItem];
      }
    });
  };

  // for fast search and geting product
  const getItemInCart = (productId) => {
    return cartItems.find((item) => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCart, getItemInCart }}>
      {children}
    </CartContext.Provider>
  );
};
