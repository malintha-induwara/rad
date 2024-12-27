import Customer from "../models/Customer";

export enum CustomerActionType {
  ADD,
  UPDATE,
  DELETE,
}

export interface CustomerAction {
  type: CustomerActionType;
  payload: Customer;
}

export const initialState: Customer[] = [];

function CustomerReducer(
  state: Customer[] = initialState,
  action: CustomerAction
) {
  switch (action.type) {
    case CustomerActionType.ADD:
      return [...state, action.payload];
    case CustomerActionType.UPDATE:
      return state.map((customer: Customer) =>
        customer.email === action.payload.email
          ? {
              ...customer,
              name: action.payload.name,
              phone: action.payload.phone,
              address:action.payload.address
            }
          : customer
      );
    case CustomerActionType.DELETE:
      return state.filter((customer: Customer) => {
        return customer.email !== action.payload.email;
      });

    default:
      return state;
  }
}

export default CustomerReducer;
