import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { CustomerProductReducer } from "./Products/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";

const rootReducers=combineReducers({
    auth:authReducer,
    product:CustomerProductReducer,
    cart:cartReducer,
    order:orderReducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))