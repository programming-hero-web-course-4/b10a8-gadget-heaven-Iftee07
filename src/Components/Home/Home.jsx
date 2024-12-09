import { Outlet, useLoaderData } from "react-router-dom";

import Categories from "../Categories/Categories";
import "./home.css";
import Banner from "../Banner/Banner";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-4xl font-bold text-center py-10">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid_structure gap-5">
        <div className="px-10 bg-white p-10 rounded-2xl border-white border-3">
          <Categories categories={categories}></Categories>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
