import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
    const data = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
            {
                data.map(card => <ProductCard
                    key={card._id}
                    product = {card}
                ></ProductCard>)
}
        </div >
    );
};

export default Products;