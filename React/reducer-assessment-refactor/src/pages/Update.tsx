import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { update as updateCustomer } from "../reducers/CustomerSlice";
import { update as updateItem } from "../reducers/ItemSlice";
import Customer from "../models/Customer";
import Item from "../models/Item";
import CustomerModel from "../components/CustomerModel";
import ItemModel from "../components/ItemModel";

function UpdateCustomer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customers = useSelector((state: any) => state.customer);
  const items = useSelector((state: any) => state.item);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [id, setId] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");

  function handleCustomerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const updatedCustomer = new Customer(name, email, phone, address);
    dispatch(updateCustomer(updatedCustomer));
    navigate("/");
  }

  function handleItemSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const updatedItem = new Item(id, itemName, Number(price), Number(quantity));
    dispatch(updateItem(updatedItem));
    navigate("/");
  }

  // Rest of the component stays the same
  const handleCustomerEmailSelect = (email: string) => {
    const selectedCustomer = customers.find(
      (customer: Customer) => customer.email === email
    );
    if (selectedCustomer) {
      setEmail(email);
      setName(selectedCustomer.name);
      setPhone(selectedCustomer.phone);
      setAddress(selectedCustomer.address);
    } else {
      setEmail("");
      setName("");
      setPhone("");
      setAddress("");
    }
  };

  const handleItemIdSelect = (id: string) => {
    const selectedItem = items.find((item: Item) => item.id === id);
    if (selectedItem) {
      setId(id);
      setItemName(selectedItem.itemName);
      setPrice(String(selectedItem.price));
      setQuantity(String(selectedItem.quantity));
    } else {
      setId("");
      setItemName("");
      setPrice("");
      setQuantity("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-10 flex justify-between ">
      <div className="w-[350px]">
        <h2 className="text-2xl font-bold mb-4">Update Customer</h2>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Select Customer
          </label>
          <select
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400"
            onChange={(e) => handleCustomerEmailSelect(e.target.value)}
          >
            <option value="">Select a customer</option>
            {customers.map((customer: Customer) => (
              <option key={customer.email} value={customer.email}>
                {customer.name} ({customer.email})
              </option>
            ))}
          </select>
        </div>
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
          isUpdate={true}
        />
      </div>

      <div className="w-[350px]">
        <h2 className="text-2xl font-bold mb-4">Update Item</h2>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Select Item
          </label>
          <select
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400"
            onChange={(e) => handleItemIdSelect(e.target.value)}
          >
            <option value="">Select an item</option>
            {items.map((item: Item) => (
              <option key={item.id} value={item.id}>
                {item.id} ({item.itemName})
              </option>
            ))}
          </select>
        </div>
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
          isUpdate={true}
        />
      </div>
    </div>
  );
}

export default UpdateCustomer;