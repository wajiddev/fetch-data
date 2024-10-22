import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: "Cart",
    initialState: [], 
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state) => {
            state.pop();
            console.log(state);
            
        }
    }
});

export const { addItem, removeItem } = Cartslice.actions;
export const cartReducers = Cartslice.reducer;
