import { useContext } from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { AuthContext } from "../../../Providers/AuthProvider";


const NavBar = () => {
    const navOptions = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/products"}>Products</Link></li>
        <li><Link to={"/cart"}>Cart</Link></li>
    </>
    const { cart, setCart } = useContext(AuthContext);

    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-15 bg-black text-white bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
                            {navOptions}
                            <div>
                                <p className="flex items-center p-2 rounded-xl bg-blue-600 text-white border"><TiShoppingCart className="text-xl mr-2" /><span className="bg-pink-500 p-1 rounded-full">{cart?.length}</span></p>
                            </div>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Decor<span className="text-blue-400">Dash</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-blue-600">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/cart'}>
                        <div className="hidden lg:flex mr-2">
                            <p className="flex items-center p-2 rounded-xl bg-blue-600 text-white border"><TiShoppingCart className="text-xl mr-2" /><span className="bg-pink-500 p-1 rounded-full">{cart?.length}</span></p>
                        </div>
                    </Link>
                    <a className="btn">Login</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;