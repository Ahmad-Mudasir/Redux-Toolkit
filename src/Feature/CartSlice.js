import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.some(
        (item) => item.id === action.payload.id
      );

      if (itemExists) {
        // Display an alert or toast if the item is already in the cart
        toast.error("Item already added to cart");
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        toast.success("Item added to cart");
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      toast.success("Item removed from cart");
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
// Selector to get the total item count
export const selectCartCount = (state) => state.cart.items.length;
export default cartSlice.reducer;
