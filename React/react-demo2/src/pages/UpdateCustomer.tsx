import {FormEvent, useContext, useState} from "react";
import {CustomerContext} from "./CustomerProvider.tsx";

export function UpdateCustomer() {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    const [, setCustomers] = useContext(CustomerContext);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setCustomers((prevCustomers) =>
            prevCustomers.map((customer) =>
                customer.email === email
                    ? { ...customer, name, phone, address }
                    : customer
            )
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            <button type="submit">Update Customer</button>
        </form>
    );
}