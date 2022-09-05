import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,      // amount of an item
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState
})

export default cartSlice.reducer;