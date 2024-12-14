import {Customer} from "../model/Customer.ts";
import {useContext, useState} from "react";
import {CustomerContext} from "./CustomerProvider.tsx";

export function AddCustomer() {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [customers, setCustomers]= useContext(CustomerContext);

    function handleSubmit(){
        const newCustomer = new Customer(name,email,phone,address);
        setCustomers((customers)=>[...customers, newCustomer]);
    }

    return (
        <>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
            <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
            <button onClick={handleSubmit}> Add Customer</button>
        </>
    )
}