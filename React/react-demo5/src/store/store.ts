import {configureStore} from "@reduxjs/toolkit";
import CounterReducer from "../reducers/CounterSlice.ts";


const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
});

export default store;