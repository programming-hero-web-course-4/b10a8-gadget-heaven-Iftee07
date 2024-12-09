import { Link } from "react-router-dom";

const Card = ({ gadget }) => {
  const { product_title, price, description, product_id } = gadget;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-80 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>{description}</p>
          <p>Price: {price}$</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${product_id}`}>
              <button className="btn btn-primary bg-white text-black rounded-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
