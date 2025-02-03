import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import categoryApiReducer from './features/ApiCalling'
export const store = configureStore({
    reducer :{
        cart: cartReducer,
        categoryApi: categoryApiReducer,
        
    }
})