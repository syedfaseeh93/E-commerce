import { api } from "../../config/apiConfig"
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

// GET  PRODUCTS BY FILTERS

const getproductsrequest = () => ({ type: FIND_PRODUCTS_REQUEST })
const getproductssuccess = (data) => ({ type: FIND_PRODUCTS_SUCCESS, payload: data })
const getproductsfailure = (error) => ({ type: FIND_PRODUCTS_FAILURE, payload: error })

export const findProducts = (reqData) => async (dispatch) => {

    dispatch(getproductsrequest())

    const { colors, sizes, category, minPrice, maxPrice, minDiscount, stock, sort, pageNumber, pageSize } = reqData;
    try {
        const { data } =
            await api.get(`/api/products?colors=${colors}&sizes=${sizes}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

        console.log("Product DATA:", data);

        dispatch(getproductssuccess(data));
    } catch (error) {
        dispatch(getproductsfailure(error.message))
    }
}

// Find Product By ProductID
const findproductrequest = () => ({ type: FIND_PRODUCT_BY_ID_REQUEST })
const findproductsuccess = (data) => ({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
const findproductfailure = (error) => ({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error })

export const findProductById = (productId) => async (dispatch) => {

    dispatch(findproductrequest())
    try {
        const { data } = await api.get(`/api/products/id/${productId}`)
        dispatch(findproductsuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(findproductfailure(error.message))
    }
}