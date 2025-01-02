import { FormEvent } from "react";

interface ModelProps {
  id: string;
  itemName: string;
  price: string;
  quantity: string;
  setId: (value: string) => void;
  setItemName: (value: string) => void;
  setPrice: (value: string) => void;
  setQuantity: (value: string) => void;
  handleItemSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isUpdate?: boolean;
}

function ItemModel({
  id,
  itemName,
  price,
  quantity,
  setId,
  setItemName,
  setPrice,
  setQuantity,
  handleItemSubmit,
  isUpdate,
}: ModelProps) {
  return (
    <form onSubmit={handleItemSubmit}>
      <div className="mb-5">
        <label htmlFor="id" className="block text-sm font-medium text-gray-700">
          ID
        </label>
        <input
          className={`default-input-styles ${
            isUpdate ? "bg-gray-100 cursor-not-allowed" : ""
          } `}
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          readOnly={isUpdate}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="itemName"
          className="block text-sm font-medium text-gray-700"
        >
          Item Name
        </label>
        <input
          className="default-input-styles"
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <input
          className="default-input-styles"
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700"
        >
          Quantity
        </label>
        <input
          className="default-input-styles"
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button
        className="w-full rounded-md border bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        type="submit"
      >
        {isUpdate ? "Update Item" : "Add Item"} 
      </button>
    </form>
  );
}

export default ItemModel;
