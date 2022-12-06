import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSclice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSclice.reducer,
        ui: uiSlice.reducer
    },
});

export default store;