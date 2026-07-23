import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

const initialState = {
    products: [],
    product: null,
    isLoading: false,
    error: null
}

export const CustomerProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return { ...state, isLoading: true, error: null }

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, products: action.payload, error: null }

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, isLoading: false, product: action.payload, error: null }

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        default:
            return state;
    }
}