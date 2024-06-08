import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import ProductCard from "../ProductCard";
import axios from "axios";
import Swal from "sweetalert2";


const Cart = () => {
    const { cart, setCart } = useContext(AuthContext);
    const totalPrice = cart.reduce((sum, card) => sum + card.price, 0);

    const handleConfirmOrder = () => {


        console.log(cart);

        axios.post('http://localhost:5000/carts',  cart )
            .then(function (response) {
                console.log(response);
                Swal.fire({
                    title: "Your Order has been recorded",
                    text: "You clicked the button!",
                    icon: "success"
                  });

                  setCart([]);

            })
            .catch(function (error) {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            });
    }

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
                <div className="text-center">
                    <button
                        className="btn btn-primary"
                        onClick={handleConfirmOrder}
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;