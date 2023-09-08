import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
};

const productReducer = (state = initialState, action) => {
    // We are checking the product user clicked add to cart button that already in the cart or not
    const selectedProduct = state.cart.find(product => product._id === action.payload._id);

    switch (action.type) {
        case actionTypes.LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case actionTypes.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product._id != action.payload)
            }

        case actionTypes.ADD_TO_CART:
            // If anyone select 1 product again then the quantity will be increased
            if (selectedProduct) {
                // First we remove the same product entered before. Because We have to enter this product with quantity update in return.
                const newCart = state.cart.filter((product) => product._id !== selectedProduct._id);
                selectedProduct.quantity = selectedProduct.quantity + 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            // If anyone select a product once then this logic will work
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };

        case actionTypes.REMOVE_FROM_CART:
            if (selectedProduct) {
                const newCart = state.cart.filter((product) => product._id !== selectedProduct._id);
                selectedProduct.quantity = selectedProduct.quantity - 1;
                if (selectedProduct.quantity > 0) {
                    return {
                        ...state,
                        cart: [...newCart, selectedProduct]
                    }
                }
                return {
                    ...state,
                    cart: [...newCart]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload._id)
            }

        default:
            return state;
    }
}

export default productReducer;