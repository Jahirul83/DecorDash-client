import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "./ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Home/Products/Products";
import Cart from "../Pages/Home/Products/Cart/Cart";


const Router =createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      // errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('/products.json')
        },
        {
            path:"/products",
            element: <Products></Products>,
            loader: () => fetch('/products.json')
        },
        {
            path:"/cart",
            element: <Cart></Cart>,
        },
    ]
    },
  ]);

export default Router;