import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./Redux-Product/reducer";
import { Payreducer } from "./payment/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({ reducer, AuthReducer, Payreducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
