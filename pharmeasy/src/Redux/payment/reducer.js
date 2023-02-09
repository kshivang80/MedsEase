import { membership } from "./actionType"

const initialState = {
    price:0,
    isMemberShip: false,
    memberPlus:false
}

export const Payreducer = (state = initialState, action) => {
    switch (action.type) {
    case membership: return { ...state, price: action.payload, isMemberShip: true };
    case "pay": return { ...state, memberPlus:true};
    case "reset": return { ...state, price: 0, isMemberShip: false };
    default : return state
    }
    
}