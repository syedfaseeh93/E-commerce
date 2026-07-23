import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./Actiontype"

const initialstate = {
    cart: null,
    cartItems: [],
    isLoading: false,
    error: null,
}

export const cartReducer = (state = initialstate, action) => {

    switch (action.type) {
        case ADD_ITEM_TO_CART_REQUEST:
            return { ...state, isLoading: true, error: null }
        case ADD_ITEM_TO_CART_SUCCESS:
            return { ...state, isLoading: false, cartItems: [...state.cartItems, action.payload.cartItems] }
        case ADD_ITEM_TO_CART_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        case GET_CART_REQUEST:
            return { ...state, isLoading: true, error: null }
        case GET_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                cart: action.payload,
                isLoading: false,
                error: null
            }
        case GET_CART_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        case REMOVE_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            return { ...state, isLoading: true, error: null }
        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                removeCartItems: action.payload,
                isLoading: false,
                error:null
            }
        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                updateCartItems: action.payload,
                isLoading: false,
                error: null
            }
        case REMOVE_CART_ITEM_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}