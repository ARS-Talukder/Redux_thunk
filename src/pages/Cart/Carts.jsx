import { useSelector } from "react-redux";
import Products from "../Shared/Products";

const Carts = () => {
    const state = useSelector((state) => state);
    const carts = state.product.cart;
    console.log(carts);
    return (
        <div className="grid grid-cols-4 gap-4">
            {/* when we remove the quantity of products in cart the removing product is going at the end. That is so disturbing for UI. That's why we use sort. So, the sort is used only for the sequence maintain of products so that the UI disturb doesn't happen. */}
            {carts
                .sort((a, b) => a.cartPosition - b.cartPosition)
                .map(product => <Products key={product._id} product={product}></Products>)}
        </div>
    );
};

export default Carts;