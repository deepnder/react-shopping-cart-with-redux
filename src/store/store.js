import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const store = configureStore({
    reducer:{
        cart : cartReducer,
        // products
    }
})
export default store 