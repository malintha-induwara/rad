import {useContext} from "react";
import {CustomerContext} from "./CustomerProvider.tsx";

export function Dashboard() {
    const [customers] = useContext(CustomerContext);
    return (
        <>
            <h1> Dashboard </h1>
            {customers.map(customer => (
                <div key={customer.email}> {customer.name} {customer.address} {customer.email} {customer.phone}   </div>
            ))
            }
        </>
    )
}