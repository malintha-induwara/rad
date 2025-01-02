import { FormEvent } from "react";

interface ModelProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
  setAddress: (value: string) => void;
  handleCustomerSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isUpdate?: boolean;
}

function CustomerModel({
  name,
  email,
  phone,
  address,
  setName,
  setEmail,
  setPhone,
  setAddress,
  handleCustomerSubmit,
  isUpdate = false,
}: ModelProps) {
  return (
    <form onSubmit={handleCustomerSubmit}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          className={`default-input-styles ${
            isUpdate ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly={isUpdate}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          className="default-input-styles"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          className="default-input-styles"
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <input
          className="default-input-styles"
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button
        className="w-full rounded-md border bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        type="submit"
      >
        {isUpdate ? "Update Customer" : "Add Customer"}
      </button>
    </form>
  );
}

export default CustomerModel;
