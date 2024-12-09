import { useEffect, useState } from "react";
import { addFavourite, getFavs } from "../../Utils/utils";

const GadgetDetails = ({ gadget }) => {
  const {
    product_title,
    product_id,
    price,
    description,
    Specification,
    rating,
    availability,
  } = gadget;
  const [isfavourite, setFavourite] = useState(false);
  const handleFav = (gadget) => {
    addFavourite(gadget);
    setFavourite(true);
  };

  useEffect(() => {
    const allFavs = getFavs();
    const exists = allFavs.find((item) => item.product_id == product_id);
    if (exists) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  }, [gadget, product_id]);

  return (
    <div className="flex w-[1000px] mx-auto gap-5 my-10 bg-white p-5 rounded-2xl">
      <div className="bg-slate-300 w-[400px] h-[500px] rounded-3xl">
        <img src="" alt="" srcset="" />
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-2xl">{product_title}</h1>
        <p className="text-xl">Price: $ {price}</p>
        <p>
          {availability ? (
            <button className="btn bg-green-200 text-green-700">
              In Stock
            </button>
          ) : (
            <button className="btn bg-red-200 text-red-700">
              Out of Stock
            </button>
          )}
        </p>
        <p>{description}</p>
        <p className="font-bold">Specification</p>
        <ol className="list-decimal pl-5">
          {Specification?.map((prod) => {
            return <li>{prod}</li>;
          })}
        </ol>
        <p>Rating: {rating}</p>
        <button
          disabled={isfavourite}
          className="btn bg-purple-600 text-white rounded-full"
          onClick={() => handleFav(gadget)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GadgetDetails;
