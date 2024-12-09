import React from "react";
import { getFavs } from "../../Utils/utils";
import Item from "../Item/Item";

const Cart = () => {
  const items = getFavs();
  return (
    <div>
      <h1 className="text-2xl w-[1000px] mx-auto">Cart</h1>
      <div className="w-[1000px] mx-auto space-y-5">
        {items.map((item) => (
          <Item gadget={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Cart;
