import './App.css'
import {useState} from "react";
import Button from "./components/Button.tsx";

function App() {

    const [count, setCount] = useState(0);

    return (
        <>
            <div>Count: {count}</div>
            <Button count={count} setCount={setCount}>Add</Button>
            <Button count={count} setCount={setCount}>Sub</Button>
        </>
    );
}

export default App;
