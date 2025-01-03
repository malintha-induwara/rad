import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const [customerInput, setCustomerInput] = useState("");
    const [itemInput, setItemInput] = useState("");

    const customerName = useSelector(state => state.customer.name);
    const itemName = useSelector(state => state.item.name);

    const dispatch = useDispatch();

    const handleCustomerSubmit = () => {
        dispatch({
            type: "SET_NAME",
            payload: { name: customerInput }
        });
        setCustomerInput("");
    };

    const handleItemSubmit = () => {
        dispatch({
            type: "SET_ITEM",
            payload: { name: itemInput }
        });
        setItemInput("");
    };

    return (
        <div>
            <div>
                <div>
                    <input
                        type="text"
                        value={customerInput}
                        onChange={(e) => setCustomerInput(e.target.value)}
                        placeholder="Enter customer name"
                    />
                    <button onClick={handleCustomerSubmit}>
                        Add Customer
                    </button>
                    {customerName && (
                        <p>Customer Name: {customerName}</p>
                    )}
                </div>

                <div>
                    <input
                        type="text"
                        value={itemInput}
                        onChange={(e) => setItemInput(e.target.value)}
                        placeholder="Enter item name"
                    />
                    <button onClick={handleItemSubmit}>
                        Add Item
                    </button>
                    {itemName && (
                        <p>Item Name: {itemName}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;