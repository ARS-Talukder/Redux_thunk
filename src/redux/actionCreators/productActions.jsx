import { actionTypes } from "../actionTypes/actionTypes"

export const loadProducts = (data) => {
    return {
        type: actionTypes.LOAD_PRODUCTS,
        payload: data
    }
}
export const addProduct = (data) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: data
    }
}
export const deleteProduct = (id) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: id
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