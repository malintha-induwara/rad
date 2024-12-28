import Item from "../models/Item";

export enum ItemActionType {
  ADD,
  UPDATE,
  DELETE,
}

export interface ItemAction {
  type: ItemActionType;
  payload: Item;
}

export const initialState: Item[] = [];

function ItemReducer(state: Item[] = initialState, action: ItemAction) {
  switch (action.type) {
    case ItemActionType.ADD:
      return [...state, action.payload];
    case ItemActionType.UPDATE:
      return state.map((item: Item) =>
        item.id === action.payload.id
          ? {
              ...item,
              itemName: action.payload.itemName,
              price: action.payload.price,
              quantity: action.payload.quantity,
            }
          : item
      );
    case ItemActionType.DELETE:
        return state.filter((item:Item)=>
            item.id !== action.payload.id
        )
    default:
        return state;
  }
}


export default ItemReducer