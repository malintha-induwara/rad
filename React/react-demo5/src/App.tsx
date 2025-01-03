import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, showNumber} from "./reducers/CounterSlice.ts";

function App() {
    const count = useSelector(state => state.counter.count);
    const show = useSelector(state => state.counter.show);
    const dispatch = useDispatch();
    return (
        <>
             <h1> { show &&count}</h1>
            <br/>
            <button onClick={() => dispatch(increment())} >Increment</button>
            <button onClick={() => dispatch(decrement())} >Decrement</button>
            <button onClick={() => dispatch(showNumber())} >Show</button>
        </>
    )
}

export default App
