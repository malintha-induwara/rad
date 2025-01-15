import Item from "../models/Item";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Item[] = [];

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        update: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { add, update, remove } = itemSlice.actions;
export default itemSlice.reducer;