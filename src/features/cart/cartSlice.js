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
        },

        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find(i => i.id === payload);

            cartItem.amount += 1;
        },

        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find(i => i.id === payload);

            if(cartItem.amount > 0) cartItem.amount -= 1;
        },

        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;

            // recorro cáda item su precio y su cantidad seleccionada
            state.cartItems.forEach(item => {
                amount += item.amount;              // voy incrementando la cantidad
                total += item.amount * item.price   // es obvio
            });

            // asigno todo al estado
            state.amount = amount;
            state.total = total;
        }
    }
})

export default cartSlice.reducer;
export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;