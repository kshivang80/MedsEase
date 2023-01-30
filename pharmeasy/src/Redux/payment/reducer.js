import { membership } from "./actionType"

const initialState = {
    price:0,
    isMemberShip: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case membership: return { ...state, price: action.payload, isMemberShip: true };
    default : return state
    }
    
}