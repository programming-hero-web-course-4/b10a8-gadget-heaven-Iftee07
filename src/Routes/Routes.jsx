import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import CategoryCards from "../Components/CategoryCards/CategoryCards";
import GadgetDetailsPage from "../Components/GadgetDetailsPage/GadgetDetailsPage";
import ErrorPage from "../Components/Error/ErrorPage";
import Dashboard from "../Components/Dashboard/Dashboard";
import Card from "../Components/Card/Card";
import Cart from "../Components/Cart/Cart";
import Wishlist from "../Components/Wishlist/Wishlist";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: "/",
            element: <CategoryCards></CategoryCards>,
            loader: () => fetch("../products.json"),
            errorElement: <ErrorPage></ErrorPage>,
          },
          {
            path: "/category/:category_name",
            element: <CategoryCards></CategoryCards>,
            loader: () => fetch("../products.json"),
            errorElement: <ErrorPage></ErrorPage>,
          },
        ],
      },
    ],
  },
  {
    path: "/product/:id",
    element: <GadgetDetailsPage></GadgetDetailsPage>,
    loader: () => fetch("../products.json"),
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
]);

export default routes;
