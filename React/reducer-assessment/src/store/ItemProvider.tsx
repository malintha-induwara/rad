import { createContext, Dispatch, ReactNode, useReducer } from "react";
import ItemReducer,{initialState,ItemAction} from "../reducers/ItemReducer";
import Item from "../models/Item";

type ItemContextType = [Item[],Dispatch<ItemAction>];

export const ItemContext = createContext<ItemContextType> ([[],()=>{}])

interface ItemProviderProps{
    children:ReactNode;
}

function ItemProvider({children}:ItemProviderProps){
    const [items,dispatch] = useReducer(ItemReducer,initialState);
    return(
        <ItemContext.Provider value={[items,dispatch]}>
        {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider;