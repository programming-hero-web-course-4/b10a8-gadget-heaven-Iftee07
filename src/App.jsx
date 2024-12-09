import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
function App() {
  return (
    <div>
      <div className="px-[100px] mx-auto bg-slate-50 pt-12 ">
        <Navbar classic={"text-white bg-purple-600"}></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
