import {createSlice} from "@reduxjs/toolkit";

const initialState = {count: 0,show:true};

const counterSlice = createSlice({
    name: 'counter',
    initialState, reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        showNumber: (state) => {
            state.show = !state.show;
        }
    }
})

export const {increment, decrement,showNumber} = counterSlice.actions;

export default counterSlice.reducer;