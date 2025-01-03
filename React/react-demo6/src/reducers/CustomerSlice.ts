import {Customer} from "../models/Customer";
import {createSlice} from "@reduxjs/toolkit";

const initialState:Customer[] =[];

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        update: (state,action) => {
            const index = state.findIndex(customer => customer.email === action.payload.email);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        remove: (state,action) => {
            return state.filter(customer => customer.email !== action.payload);
        }
    }
})

export const {add, update,remove} = customerSlice.actions;

export default customerSlice.reducer;

