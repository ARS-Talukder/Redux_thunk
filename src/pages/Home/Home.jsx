import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Products from "../Shared/Products";
import { toggleBrand, toggleStock } from "../../redux/actionCreators/filterActions";
import fetchProducts from "../../redux/thunk/products/fetchProducts";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    const state = useSelector((state) => state);
    const products = state.product.products;
    const { brands, stock } = state.filter.filters;
    // const products=[]
    const obj = { x: 1, y: 2, z: 3 }; const { x, ...rest } = obj; console.log( rest);

    let content;
    if (products == undefined) {
        return content = "LOADING..."
    }
    if (products.length) {
        content = products.map(product => <Products key={product._id} product={product}></Products>)
    }
    if (products.length && (stock || brands.length)) {
        content = products
            .filter(product => {
                if (stock) {
                    return product.status === true;
                }
                return product;
            })
            .filter(product => {
                if (brands.length) {
                    return brands.includes(product.brand)
                }
                return product;
            })
            .map(product => <Products key={product._id} product={product}></Products>)
    }


    const activeClass = "bg-indigo-500 text-white";

    return (
        <div>
            <div className="flex justify-end mb-2">
                <div className="mx-4">
                    <button className={`btn-sm rounded-lg font-bold ${stock ? activeClass : "bg-gray-300"}`}
                        onClick={() => dispatch(toggleStock())}>
                        In Stock
                    </button>
                </div>
                <div className="mx-4">
                    <button className={`btn-sm rounded-lg font-bold ${brands.includes("amd") ? activeClass : "bg-gray-300"}`}
                        onClick={() => dispatch(toggleBrand("amd"))}>
                        AMD
                    </button>
                </div>
                <div className="mx-4">
                    <button className={`btn-sm rounded-lg font-bold ${brands.includes("intel") ? activeClass : "bg-gray-300"}`}
                        onClick={() => dispatch(toggleBrand("intel"))}>
                        Intel
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {
                    content
                }
            </div>
        </div>
    );
};

export default Home;