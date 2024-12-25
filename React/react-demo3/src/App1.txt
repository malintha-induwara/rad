import './App.css'
import {customReducer} from "./reducer/CustomerReducer.tsx";
import {useReducer, useState} from "react";
import { TYPE } from "./reducer/CustomerReducer.tsx"


function App() {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const initialState = {
        firstName: 'No Value',
        lastName: 'No Value',
    }

    const [count, dispatch] = useReducer(customReducer,initialState)

    return (
        <>
            <h1> {count.firstName}</h1>
            <h1> {count.lastName}</h1>

            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <button onClick={()=>{ dispatch({type:TYPE.UPDATE,payload:{firstName:firstName,lastName:lastName}})}} > Submit </button>
        </>
    )
}

export default App
