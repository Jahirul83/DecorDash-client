import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "./ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Home/Products/Products";
import Cart from "../Pages/Home/Products/Cart/Cart";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Order from "../Pages/Order/Order";
import Profile from "../Pages/Profile/Profile";
import About from "../Pages/About/About";
import FAQ from "../Pages/FAQ/FAQ";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/products",
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/order",
                element: <PrivateRoute><Order></Order></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/carts')
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/faq",
                element:<FAQ></FAQ>
            },
        ]
    },
]);

export default Router;