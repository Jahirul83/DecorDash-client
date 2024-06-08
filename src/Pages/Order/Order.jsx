import { useLoaderData } from "react-router-dom";
import OrderItems from "./OrderItems";



const Order = () => {
    const order = useLoaderData();
    
    return (
        <div>
            <h1>your Order</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-cols-3 gap-5">
                {
                    order.map(item => <OrderItems
                        key={item._id}
                        items={item}
                    ></OrderItems>)
                }
            </div>
        </div>
    );
};

export default Order;