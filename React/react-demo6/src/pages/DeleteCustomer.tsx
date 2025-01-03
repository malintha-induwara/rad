import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {Customer} from "../models/Customer";
import {Modal} from "../components/Modal";
import {useDispatch} from "react-redux";
import {remove} from "../reducers/CustomerSlice";

export function DeleteCustomer() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    function handleSubmit() {
        const deleteCustomer = new Customer(name,email,phone);
        dispatch(remove(deleteCustomer));
        navigate('/');
    }

    return (
        <>
            <header><h2>Delete Customer</h2></header>
            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Delete Customer</Modal>
        </>
    );
}