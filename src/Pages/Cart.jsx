import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../Feature/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-200 border border-cyan-300 rounded-lg shadow"
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>price:${item.price * item.quantity}</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              {/* increase decrease btns */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg"
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg"
                >
                  +
                </button>
              </div>

              {/* delete btn */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="px-1 py-1 bg-red-700 text-white rounded-sm"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>

              <img
                className="w-16 h-16 object-cover"
                src={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      )}
      {/* Total Amount Display */}
      <div className="mt-4 font-bold">
        Total Amount: ${calculateTotalAmount()}
      </div>
    </div>
  );
};

export default Cart;
