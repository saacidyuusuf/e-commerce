import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../utilist/motion";
import { suit, isisar, shirt } from "../assets/images/index";
import { FaShoppingCart } from "react-icons/fa";
import { GlobalContextcreated } from "../context/GlobalContext";
import { useContext } from "react";

const Product = ({ name, id, img, desc, price }) => {
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
 

  return (
    <div>
      <div className="collectionhaye">
        <motion.div
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
          className="collection" >

          </motion.div>
        <div className="collection">
          <div className="collectionImgHaye">
            <h3 className="Price">{price}</h3>
            <Image src={img} alt="h"  width={350}
            height={300}  className="collectionImg" />
            <FaShoppingCart onClick={handleAddToCart} className="cartTop" />
          </div>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Product;
