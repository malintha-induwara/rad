import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import {Customer} from "../model/Customer.ts";

type CustomerContextType = [Customer[], Dispatch<SetStateAction<Customer[]>>];

export const CustomerContext = createContext<CustomerContextType>([[], () => {}]);

interface CustomerProviderProps {
    children: ReactNode;
}

export function CustomerProvider({children}:CustomerProviderProps) {
    const [customer, setCustomer] = useState<Customer[]>([]);
    return (
        <>
            <CustomerContext.Provider value={[customer, setCustomer]}>
                {children}
            </CustomerContext.Provider>
        </>
    )
}