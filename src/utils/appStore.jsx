import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice"
let appStore=configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default appStore;