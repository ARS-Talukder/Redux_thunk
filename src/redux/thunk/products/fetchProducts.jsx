import { loadProducts } from "../../actionCreators/productActions";

const fetchProducts = () => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();

        if (data.length) {
            dispatch(loadProducts(data));
        }
    }
}

export default fetchProducts;