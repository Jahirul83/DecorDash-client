import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import ProductCard from "../ProductCard";


const Cart = () => {
    const { cart, setCart } = useContext(AuthContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
            {
                cart.map(card => <ProductCard
                    key={card.id}
                    product = {card}
                ></ProductCard>)
}
        </div >
    );
};

export default Cart;