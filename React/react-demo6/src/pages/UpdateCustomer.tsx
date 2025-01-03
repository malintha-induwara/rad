import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {Modal} from "../components/Modal";
import {Customer} from "../models/Customer";
import {useDispatch} from "react-redux";
import {update} from "../reducers/CustomerSlice";

export function UpdateCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const updatedCustomer = new Customer(name, email, phone);
        dispatch(update(updatedCustomer));
        navigate('/');
    }

    return (
        <>
            <header><h2>Update Customer</h2></header>
            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Update Customer</Modal>
        </>
    );
}