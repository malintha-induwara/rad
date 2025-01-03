export const initialState = {
    name: ''
}

export function ItemReducer(state=initialState,action){
    switch(action.type){
        case 'SET_ITEM':
            return action.payload;
        default:
            return state;

    }
}