import { Outlet } from "react-router-dom";
import DashNav from "../../DashNav/DashNav";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar classic={"bg-white text-black"}></Navbar>
      <div className="bg-purple-600 py-12 space-y-5 ">
        <h1 className="text-4xl text-center text-white font-bold">Dashboard</h1>
        <p className="text-xl text-center text-white ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <DashNav></DashNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
