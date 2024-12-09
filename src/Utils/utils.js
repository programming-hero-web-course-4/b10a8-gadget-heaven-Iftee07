import toast from "react-hot-toast";

const getFavs = () => {
  const all = localStorage.getItem("favs");
  if (all) {
    const items = JSON.parse(all);

    return items;
  } else {
    return [];
  }
};

const addFavourite = (gadget) => {
  console.log(gadget);
  const favs = getFavs();
  const exists = favs.find((item) => item.product_id == gadget.product_id);

  if (exists) {
    return toast.error("Item Already Exists!");
  }
  favs.push(gadget);
  localStorage.setItem("favs", JSON.stringify(favs));
  toast.success("Successfully Added!");
};
export { addFavourite, getFavs };
