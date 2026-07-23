import { useNavigate } from "react-router-dom"
import { api } from "../../config/apiConfig"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./Actiontype"

export const createOrder = (address,navigate) => async (dispatch) => {

    dispatch({ type: CREATE_ORDER_REQUEST })
    try {
        const res = await api.post(`api/orders/`, address)
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: res })
        console.log("ORDER DATA : ",res.data)

            navigate({ search: `step=2&order_id=${res.data.orderId}` })
        
        
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message })
    }

}

export const getOrderById = (orderId) => async (dispatch) => {

    dispatch({ type: GET_ORDER_BY_ID_REQUEST })

    try {
        const res = await api.get(`api/orders/${orderId}`)
        dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: res.data })
        console.log("GET ORDER BY ID:",res.data)
    } catch (error) {
        dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message })
    }

}