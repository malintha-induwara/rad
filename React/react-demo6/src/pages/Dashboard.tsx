import {useSelector} from "react-redux";
import {Customer} from "../models/Customer";
import {RootState} from "@reduxjs/toolkit/query";


export function Dashboard() {

    const customers = useSelector((state) => state.customer);

    console.log(customers);
    return (
        <>
            Dashboard
            {customers.map((customer: Customer) => (
                <div key={customer.email}>{customer.name + ' ' + customer.email + ' ' + customer.phone}</div>))}
        </>
    );
}