import {FormEvent, useContext, useState} from "react";
import {CustomerContext} from "./CustomerProvider.tsx";

export function DeleteCustomer() {
    const [email, setEmail] = useState<string>("");

    const [, setCustomers] = useContext(CustomerContext);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setCustomers((prevCustomers) =>
            prevCustomers.filter((customer) => customer.email !== email)
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
            <button type="submit">Delete Customer</button>
        </form>
    );
}
