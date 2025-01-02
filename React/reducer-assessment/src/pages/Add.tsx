import { useContext, useState, FormEvent } from "react";
import { CustomerContext } from "../store/CustomerProvider";
import { ItemContext } from "../store/ItemProvider";
import { CustomerActionType } from "../reducers/CustomerReducer";
import { useNavigate } from "react-router";
import { ItemActionType } from "../reducers/ItemReducer";
import Customer from "../models/Customer";
import Item from "../models/Item";
import CustomerModel from "../components/CustomerModel";
import ItemModel from "../components/ItemModel";

function Add() {
  const navigate = useNavigate();
  const [, customerDispatch] = useContext(CustomerContext);
  const [, itemDispatch] = useContext(ItemContext);

  // State for customer fields
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  // State for item fields
  const [id, setId] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");

  function handleCustomerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newCustomer = new Customer(name, email, phone, address);
    customerDispatch({ type: CustomerActionType.ADD, payload: newCustomer });
    navigate("/");
  }

  function handleItemSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const newItem = { id, itemName, price: Number(price), quantity:Number(quantity) };
    const newItem = new Item(id, itemName, Number(price), Number(quantity));
    itemDispatch({ type: ItemActionType.ADD, payload: newItem });
    navigate("/");
  }

  return (
    <div className="max-w-4xl mx-auto pt-10 flex justify-between">
      <div className="w-[350px]">
        <h2 className="text-2xl font-bold mb-4">Add New Customer</h2>
        <CustomerModel
          name={name}
          email={email}
          phone={phone}
          address={address}
          setName={setName}
          setAddress={setAddress}
          setEmail={setEmail}
          setPhone={setPhone}
          handleCustomerSubmit={handleCustomerSubmit}
        />
      </div>

      <div className="w-[350px]">
        <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
        <ItemModel
          id={id}
          itemName={itemName}
          price={price}
          quantity={quantity}
          setId={setId}
          setItemName={setItemName}
          setPrice={setPrice}
          setQuantity={setQuantity}
          handleItemSubmit={handleItemSubmit}
        />
      </div>
    </div>
  );
}

export default Add;
