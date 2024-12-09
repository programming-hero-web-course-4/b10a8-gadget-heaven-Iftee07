import { NavLink } from "react-router-dom";

import "./Categories.css";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col space-y-5">
      {categories.map((category) => (
        <NavLink
          className="btn rounded-2xl "
          to={`/category/${category.category_name}`}
        >
          {category.category_name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
