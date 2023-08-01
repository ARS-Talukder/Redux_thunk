import { actionTypes } from "../actionTypes/actionTypes"

export const loadProducts = (data) => {
    return {
        type: actionTypes.LOAD_PRODUCTS,
        payload: data
    }
}

export const addToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
}
export const removeFromCart = (product) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: product
    }
}