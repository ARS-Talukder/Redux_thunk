import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import deleteProductData from "../../redux/thunk/products/deleteProductData";

const Product = ({ product, index }) => {
    const { _id, model, brand, price, status, } = product;
    const dispatch = useDispatch();
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{model}</td>
            <td>{brand}</td>
            <td>
                {status === true ? <span className="text-green-400">Available</span> : <span className="text-red-400">Stock out</span>}
            </td>
            <td>{price}</td>
            <td><button onClick={() => dispatch(deleteProductData(_id))}><AiFillDelete className="text-xl text-red-500"></AiFillDelete></button></td>
        </tr>
    );
};

export default Product;