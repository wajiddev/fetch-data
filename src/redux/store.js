import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./Slice";


export  const store = configureStore({
    reducer:{
    cart:cartReducers,
    }
})   