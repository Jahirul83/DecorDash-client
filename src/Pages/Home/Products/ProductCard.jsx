import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

import PropTypes from 'prop-types';


const ProductCard = ({ product, showAddToCartButton }) => {
    const { cart, setCart, user } = useContext(AuthContext);
    const { _id, name, description, price, imageUrl } = product;
    // const userId = 2;
    // console.log(user.email);
    // console.log("cart", cart);

    const handleAddToCart = (data) => {
        const { _id, ...productData } = data; 
        setCart([...cart, { ...productData, userEmail: user.email }]);
    }
    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item._id !== itemId));
    };

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imageUrl} alt="Shoes" className="rounded-xl w-80 h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price:$ {price}</p>
                    {
                        showAddToCartButton && <div className="card-actions">
                            {
                                cart.find(item => item._id === _id) ? (
                                    <button onClick={() => removeFromCart(_id)} className="btn btn-secondary">
                                        Remove from cart
                                    </button>
                                ) : (
                                    <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
                                        Add to cart
                                    </button>
                                )
                            }

                        </div>}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    card: PropTypes.object
}