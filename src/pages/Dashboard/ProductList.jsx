import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../redux/thunk/products/fetchProducts";
import Product from "./Product";

const ProductList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);
    const state = useSelector((state) => state);
    const products = state.product.products;
    let content;
    if (products === undefined) {
        content = "LOADING..."
    }
    else if (products.length) {
        content = products?.map((product, index) => <Product key={product._id} index={index} product={product}></Product>)
    }
    // console.log(products);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Brand</th>
                            <th>In Stock</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            content
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;