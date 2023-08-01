import { actionTypes } from "../actionTypes/actionTypes"

export const toggleBrand = (brandName) => {
    return {
        type: actionTypes.TOGGLE_BRAND,
        payload: brandName,

    }
}

export const toggleStock = () => {
    return {
        type:actionTypes.TOGGLE_STOCK,
}
}