import {FormEvent, useContext, useState} from "react";
import {CustomerContext} from "./CustomerProvider.tsx";
import {Customer} from "../model/Customer.ts";

export function AddCustomer() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    const [, setCustomers] = useContext(CustomerContext);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const newCustomer = new Customer(name, email, phone, address);
        setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button type="submit">Add Customer</button>
        </form>
    );
}