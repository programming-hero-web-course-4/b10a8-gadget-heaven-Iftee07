import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import CategoryCards from "../Components/CategoryCards/CategoryCards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/category/:category_name",
            element: <CategoryCards></CategoryCards>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
    ],
  },
]);

export default routes;
