const Item = ({ gadget }) => {
  const { product_title, price, description } = gadget;
  return (
    <div className="flex ">
      <div className="bg-slate-300 h-[100px] w-[200px]">
        <img src="" alt="" srcset="" />
      </div>
      <div>
        <h1>{product_title}</h1>
        <p>Price: {price} $</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Item;
