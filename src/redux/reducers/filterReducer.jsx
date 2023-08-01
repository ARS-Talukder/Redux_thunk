import { actionTypes } from "../actionTypes/actionTypes"

const initialState = {
    filters: {
        brands: [],
        stock: false,
    },
    keyword: "",
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_BRAND:
            if (!state.filters.brands.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        brands: [...state.filters.brands, action.payload]
                    }
                }

            }
            else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        brands: state.filters.brands.filter((brand) => brand !== action.payload)
                    }

                }
            }

        case actionTypes.TOGGLE_STOCK:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    stock: !state.filters.stock
                }

            };

        default:
            return state
    }

}