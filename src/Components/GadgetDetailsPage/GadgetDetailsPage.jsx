import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import GadgetDetails from "../GadgetDetails/GadgetDetails";
import { useEffect, useState } from "react";

const GadgetDetailsPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [gadget, setGadget] = useState({});

  useEffect(() => {
    const singleitem = data.find((item) => item.product_id == id);
    setGadget(singleitem);
  }, [data, id]);

  return (
    <div>
      <Navbar classic={"bg-white text-black px-12"}></Navbar>
      <div className="bg-purple-600 py-12 space-y-5 pb-[300px]">
        <h1 className="text-4xl text-center text-white font-bold">
          Product Details
        </h1>
        <p className="text-xl text-center text-white ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="relative top-[-300px]">
        <GadgetDetails gadget={gadget}></GadgetDetails>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GadgetDetailsPage;
