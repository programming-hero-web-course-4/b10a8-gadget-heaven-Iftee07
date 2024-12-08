const Card = ({ gadget }) => {
  const { product_title, price, description } = gadget;
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
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
