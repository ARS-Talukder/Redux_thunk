import { deleteProduct } from "../../actionCreators/productActions";

const deleteProductData = (id) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await res.json();
        // console.log(data);
        if (data.acknowledged == true) {
            dispatch(deleteProduct(id))
        }
    }
}
export default deleteProductData;
