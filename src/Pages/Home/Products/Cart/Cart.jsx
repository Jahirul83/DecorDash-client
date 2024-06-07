import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import ProductCard from "../ProductCard";


const Cart = () => {
    const { cart, setCart } = useContext(AuthContext);
    const totalPrice = cart.reduce((sum, card) => sum + card.price, 0);

    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Your Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                {
                    cart.map(card => <ProductCard
                        key={card._id}
                        product={card}
                        showAddToCartButton={true}
                    ></ProductCard>)
                }
            </div >
            <div className="mt-4 bg-base-300 border-t-4 border-zinc-700">
                <h2 className="text-2xl text-center font-semibold py-10">Total Price: ${totalPrice.toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default Cart;