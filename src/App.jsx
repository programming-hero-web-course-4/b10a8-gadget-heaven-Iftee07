import { Outlet } from "react-router-dom";
import Footer from "./Components/NavBar/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <div className="px-[100px] mx-auto bg-slate-50 pt-12 ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
