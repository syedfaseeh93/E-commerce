import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./Actiontype"

const jwt = localStorage.getItem("jwt")
export const getcartitems = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })
    try {
        const response = await api.get(`/api/cart/`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
        const cart=response.data
        dispatch({ type: GET_CART_SUCCESS, payload: cart })
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}

export const addcartitem = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {
        const res = await api.put(`/api/cart/add`, reqData)
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: res })
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}

export const removecartitem = (cartItemid) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST })    
    try {
        const res = await api.delete(`/api/cartitems/delete/${cartItemid}`)
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemid })
        dispatch(getcartitems())
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
    }
}

export const updatecartitem = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST })
    try {
        const res = await api.put(`/api/cartitems/${reqData.cartItemId}/update`,{ quantity: reqData.quantity })
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: res.data })
        dispatch(getcartitems())
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
    }
}