import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

// create custom Context
export const useCart = () => {
  return useContext(CartContext);
};
