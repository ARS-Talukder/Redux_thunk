import { addProduct } from "../../actionCreators/productActions";

const addProductData = (product) => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:5000/products", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await res.json();
        // console.log(data)

        if (data.acknowledged == true) {
            dispatch(addProduct({
                _id: data.insertedId,
                ...product
            }))
        }


    }

}
export default addProductData;