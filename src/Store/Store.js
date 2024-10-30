import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../Feature/CartSlice";

export const store = configureStore(
    {
        reducer:{
           cart: cartReducer,
        }
    }
)