import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"


const initialState = {
    cartItems: cartItems,
    amount: 0,      // amount of an item
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: state => {
            state.cartItems = []
        },

        removeItem: (state, action) => {
            const itemId = action.payload;

            state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        }
    }
})

export default cartSlice.reducer;
export const {clearCart, removeItem} = cartSlice.actions;