import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ProductCard from "../Products/ProductCard";


const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-3xl text-center font-bold">Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                    {
                        data?.slice(0, 3)?.map(card => (
                            <ProductCard
                                key={card.id}
                                product={card}
                            ></ProductCard>
                        ))
                    }
                </div>
            </div>
            <div className="text-center mb-2">
                <Link to='/products'><button className="btn bg-blue-600 text-white">Show ALL</button></Link>
            </div>
        </div >
    );
};

export default Home;