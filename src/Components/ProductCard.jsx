import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Feature/CartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg p-4 bg-slate-200 border border-blue-300">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">${product.price}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-full mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
