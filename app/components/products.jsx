import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../utilist/motion";
import { useRouter } from "next/navigation";
import { suit, isisar, shirt } from "../assets/images/index";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContextcreated } from "../context/GlobalContext";

const Product = ({ name, id, img, desc, price }) => {
  const router = useRouter();
  const { addClothes, dharbadan, removeClothes } =
    useContext(GlobalContextcreated);
  const isItemAdded = dharbadan.some((item) => item.id === id);

  const handleAddToCart = () => {
    if (isItemAdded) {
      removeClothes(id);
    } else {
      addClothes({ id, name, price, img, desc });
    }
  };
  const clickHandler = () => {
    router.push("/store");
  };

  return (
    <div>
      <h1 className="collectionTitle">Products</h1>
      <div className="collectionhaye">
        <motion.div
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
          className="collection"
        ></motion.div>
        <div className="collection">
          <div className="collectionImgHaye">
            <h3 className="Price">{price}</h3>
            <Image src={img} alt="h"  className="collectionImg" />
            <FaShoppingCart onClick={clickHandler} className="cartTop" />
          </div>
          <h4>{name}</h4>
        </div>
      </div>
      <div className="allP">
        <button onClick={clickHandler}>All Products</button>
      </div>
    </div>
  );
};

export default Product;
