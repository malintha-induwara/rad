import {useNavigate} from "react-router";
import { useState} from "react";
import {Customer} from "../models/Customer";
import {Modal} from "../components/Modal";
import {useDispatch} from "react-redux";
import {add} from "../reducers/CustomerSlice";

export function AddCustomer() {

    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        dispatch(add(newCustomer));
        navigate('/');
    }

    return (
        <>
            <header><h2>Add Customer</h2></header>
            <br/>

            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone} >Add Customer</Modal>
        </>
    );
}