import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const CategoryCards = () => {
  const { category_name } = useParams();
  const products = useLoaderData();
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    if (category_name) {
      const filtered = [...products].filter(
        (gadget) => gadget.category === category_name
      );
      setGadgets(filtered);
    } else {
      setGadgets(products);
    }
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
