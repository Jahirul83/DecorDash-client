import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "./ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Home/Products/Products";
import Cart from "../Pages/Home/Products/Cart/Cart";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";


const Router =createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      // errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/products')
        },
        {
            path:"/products",
            element: <Products></Products>,
            loader: () => fetch('http://localhost:5000/products')
        },
        {
            path:"/cart",
            element: <Cart></Cart>,
        },
        {
            path:"/login",
            element:<Login></Login> ,
        },
        {
            path:"/register",
            element:<Register></Register> ,
        },
    ]
    },
  ]);

export default Router;