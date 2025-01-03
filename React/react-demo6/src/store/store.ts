import CustomerSlice from "../reducers/CustomerSlice";
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        customer: CustomerSlice
    }
});
export default store;