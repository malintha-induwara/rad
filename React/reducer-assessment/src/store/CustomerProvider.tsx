import { createContext, useReducer, ReactNode, Dispatch } from "react";
import CustomerReducer, { CustomerAction, initialState } from "../reducers/CustomerReducer";
import Customer from "../models/Customer";

type CustomerContextType = [Customer[], Dispatch<CustomerAction>];

export const CustomerContext = createContext<CustomerContextType>([[], () => {}]);

interface CustomerProviderProps {
  children: ReactNode;
}

function CustomerProvider({ children }: CustomerProviderProps) {
  const [customers, dispatch] = useReducer(CustomerReducer, initialState);
  return (
    <CustomerContext.Provider value={[customers, dispatch]}>
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerProvider