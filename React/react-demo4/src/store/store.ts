import {combineReducers, createStore} from "redux";
import {CustomerReducer} from "../reducers/CustomerReducer.ts";
import {ItemReducer} from "../reducers/ItemReducer.ts";


const rootReducers = combineReducers({
    customer:CustomerReducer,
    item:ItemReducer
})

const store = createStore(rootReducers);

export default store;