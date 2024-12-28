import { useContext, useState, FormEvent } from "react";
import { CustomerContext } from "../store/CustomerProvider";
import { useNavigate } from "react-router";
import Customer from "../models/Customer";
import { CustomerActionType } from "../reducers/CustomerReducer";
import { ItemActionType } from "../reducers/ItemReducer";
import { ItemContext } from "../store/ItemProvider";
import Item from "../models/Item";

function UpdateCustomer() {
  const navigate = useNavigate();
  const [customers, customerDispatch] = useContext(CustomerContext);
  const [items, itemDispatch] = useContext(ItemContext);

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
    const updatedCustomer = new Customer(name,email,phone,address);
    customerDispatch({ type: CustomerActionType.UPDATE, payload: updatedCustomer });
    navigate("/");
  }

  function handleItemSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const updatedItem  = new Item(id,itemName,Number(price),Number(quantity))
    itemDispatch({ type: ItemActionType.UPDATE, payload: updatedItem });
    navigate("/");
  }

  function handleCustomerEmailSelect(email: string) {
    const selectedCustomer = customers.find(
      (customer) => customer.email === email
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
  }

  function handleItemIdSelect(id: string) {
   
    const selectedItem = items.find((item)=>item.id ===id)


    if (selectedItem) {
      setId(id);
      setItemName(selectedItem.itemName);
      setPrice( String(selectedItem.price));
      setQuantity(String(selectedItem.quantity));
    } else {
      setId("");
      setItemName("");
      setPrice("");
      setQuantity("");
    }
  }

  return (
    <div className="max-w-4xl mx-auto pt-10 flex justify-between">
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
            {customers.map((customer) => (
              <option key={customer.email} value={customer.email}>
                {customer.name} ({customer.email})
              </option>
            ))}
          </select>
        </div>
        <form onSubmit={handleCustomerSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 bg-gray-100 cursor-not-allowed focus:outline-none"
              type="text"
              placeholder="Email"
              value={email}
              readOnly
            />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400"
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            className="w-full rounded-md border bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            type="submit"
          >
            Update Customer
          </button>
        </form>
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
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.id} ({item.itemName})
              </option>
            ))}
          </select>
        </div>
        <form onSubmit={handleItemSubmit}>
          <div className="mb-5">
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">
              ID
            </label>
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 bg-gray-100 cursor-not-allowed focus:outline-none"
              type="text"
              placeholder="ID"
              value={id}
              readOnly
            />
          </div>
          <div className="mb-5">
            <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
              Item Name
            </label>
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400"
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400"
              type="number"
              step="0.01"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400"
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button
            className="w-full rounded-md border bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            type="submit"
          >
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCustomer;
