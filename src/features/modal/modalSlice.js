import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showModal: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalTo: (state, {payload}) => {
            state.showModal = payload
        }
    }
})

export default modalSlice.reducer;
export const {setModalTo} = modalSlice.actions;