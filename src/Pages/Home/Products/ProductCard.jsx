import PropTypes from 'prop-types';
const ProductCard = ({ card }) => {
    const { name, description, price, imageUrl } = card
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imageUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price:$ {price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    card: PropTypes.object
}