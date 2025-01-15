import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { remove as removeCustomer } from "../reducers/CustomerSlice";
import { remove as removeItem } from "../reducers/ItemSlice";
import Customer from "../models/Customer";
import Item from "../models/Item";

function DeleteCustomer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customers = useSelector((state: any) => state.customer);
  const items = useSelector((state: any) => state.item);

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  function handleEmailSelect(email: string) {
    const selectedCustomer = customers.find(
      (customer: Customer) => customer.email === email
    );
    setSelectedCustomer(selectedCustomer || null);
  }

  function handleIdSelect(id: string) {
    const selectedItem = items.find((item: Item) => item.id === id);
    setSelectedItem(selectedItem || null);
  }

  function deleteItem() {
    if (selectedItem) {
      dispatch(removeItem(selectedItem.id));
      navigate("/");
    }
  }

  function deleteCustomer() {
    if (selectedCustomer) {
      dispatch(removeCustomer(selectedCustomer.email));
      navigate("/");
    }
  }

  return (
    <div className="max-w-4xl mx-auto pt-10 flex justify-between">
      <div className="w-[350px]">
        <h2 className="text-2xl font-bold mb-4">Delete Customer</h2>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Select Customer
          </label>
          <select
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400"
            onChange={(e) => handleEmailSelect(e.target.value)}
          >
            <option value="">Select a customer</option>
            {customers.map((customer: Customer) => (
              <option key={customer.email} value={customer.email}>
                {customer.name} ({customer.email})
              </option>
            ))}
          </select>
        </div>
        <button
          className="w-full rounded-md border bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-red-200"
          onClick={deleteCustomer}
          disabled={!selectedCustomer}
        >
          Delete Customer
        </button>
      </div>
      <div className="w-[350px]">
        <h2 className="text-2xl font-bold mb-4">Delete Item</h2>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Select Item
          </label>
          <select
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400"
            onChange={(e) => handleIdSelect(e.target.value)}
          >
            <option value="">Select a Item</option>
            {items.map((item: Item) => (
              <option key={item.id} value={item.id}>
                {item.itemName} ({item.id})
              </option>
            ))}
          </select>
        </div>
        <button
          className="w-full rounded-md border bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-red-200"
          onClick={deleteItem}
          disabled={!selectedItem}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default DeleteCustomer;