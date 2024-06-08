import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ProductCard from "../Products/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import About from "../../About/About";
import FAQ from "../../FAQ/FAQ";
import Contact from "../../Contact/Contact";


const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div>
                <div>
                    <h2 className="text-3xl text-center font-bold">Products</h2>
                    <p className="mb-4 text-gray-600 text-center font-bold">Browse through our products</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                        {
                            data?.slice(0, 3)?.map(card => (
                                <ProductCard
                                    key={card._id}
                                    product={card}
                                    showAddToCartButton={false}
                                ></ProductCard>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="text-center mb-2">
                <Link to='/products'><button className="btn bg-blue-600 text-white">Show ALL <FaArrowRightLong /></button></Link>
            </div>
            <About></About>
            <FAQ></FAQ>
            <Contact></Contact>
        </div >
    );
};

export default Home;