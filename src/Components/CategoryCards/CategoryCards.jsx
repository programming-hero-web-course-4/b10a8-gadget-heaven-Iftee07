import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const CategoryCards = () => {
  const { category_name } = useParams();
  const products = useLoaderData();
  console.log(products);
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    const filtered = [...products].filter(
      (gadget) => gadget.category === category_name
    );
    setGadgets(filtered);
  }, [category_name, products]);

  return (
    <div className="grid grid-cols-4">
      {gadgets.map((gadget) => (
        <Card gadget={gadget}></Card>
      ))}
    </div>
  );
};

export default CategoryCards;
