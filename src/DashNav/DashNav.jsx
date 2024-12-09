import { NavLink } from "react-router-dom";
import "./dashnav.css";
const DashNav = () => {
  return (
    <div className="bg-purple-600 flex justify-center py-5 space-x-5">
      <NavLink to="/dashboard/cart" className="btn bg-purple-600 text-white ">
        Cart
      </NavLink>
      <NavLink
        to="/dashboard/wishlist"
        className="btn bg-purple-600 text-white"
      >
        Wishlist
      </NavLink>
    </div>
  );
};

export default DashNav;
