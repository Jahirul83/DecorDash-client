
const OrderItems = ({ items }) => {
    const {  name, description, price, imageUrl, userEmail } = items;
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
                    <p>email: {userEmail}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderItems;