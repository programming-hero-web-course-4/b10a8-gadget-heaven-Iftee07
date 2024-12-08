import banner_img from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="pb-[300px]">
      <div className="bg-purple-600 py-10 relative top-[-13px] space-y-10 flex flex-col items-center pb-[300px]">
        <h1 className="text-5xl font-bold text-white text-center">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-white text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div>
          <button className="btn bg-white rounded-full font-bold text-lg text-purple-600">
            Shop Now
          </button>
        </div>
        <div className="p-7 bg-slate-200 bg-opacity-50 rounded-3xl absolute top-[300px] border-white border-2">
          <img
            src={banner_img}
            className="w-[800px] h-[500px] rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
