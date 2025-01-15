import CustomerSlice from "../reducers/CustomerSlice";
import ItemSlice from "../reducers/ItemSlice";
import Customer from "../models/Customer";
import Item from "../models/Item";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        item: ItemSlice
    }
});


export interface RootState {
    customer: Customer[];
    item: Item[];
  }

export default store;