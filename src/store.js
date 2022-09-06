import {configureStore} from "@reduxjs/toolkit";
import cart from "./features/cart/cartSlice";
import modal from "./features/modal/modalSlice";

const store = configureStore({
    reducer: {
        cart,
        modal
    }
});

export default store;