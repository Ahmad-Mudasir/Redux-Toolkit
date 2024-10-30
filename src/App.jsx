// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductListing from './Pages/ProductListing';
import Cart from './Pages/Cart';
import { selectCartCount } from './Feature/CartSlice';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <Router>
      <div className="p-6">
        <Toaster position="top-right" reverseOrder={false} />
        <nav className="flex bg-black gap-10 justify-center mb-6">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `text-lg font-bold ${isActive ? 'text-yellow-500' : 'text-blue-500'} hover:text-yellow-300`
            }
          >
            Products
          </NavLink>
          
          <NavLink 
            to="/cart" 
            className={({ isActive }) =>
              `relative text-lg font-bold ${isActive ? 'text-yellow-500' : 'text-blue-500'} hover:text-yellow-300`
            }
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>
        </nav>
        
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
