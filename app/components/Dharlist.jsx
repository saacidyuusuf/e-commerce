import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../utilist/motion";
import { GlobalContextcreated } from "../context/GlobalContext";

const Dharlist = ({ dharka }) => {
  const { addClothes, dharbadan, removeClothes } = useContext(GlobalContextcreated);

  const isItemAdded = dharbadan.some((item) => item.id === dharka.id);

  const handleAddToCart = () => {
    if (isItemAdded) {
      removeClothes(dharka.id);
    } else {
      addClothes(dharka);
    }
  };

  return (
    <>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        className="dharHaye"
      >
        <Link href={`/store/dhardetails?id=${dharka.id}`} passHref>
          <Image src={dharka.img} className="clothImg" alt={dharka.name} />
        </Link>
        <div className="priceName">
          <p>${dharka.price}</p>
          <button  onClick={handleAddToCart}>
            {isItemAdded ? "Already Added" : "Add to Cart"}
          </button>
          <h3>{dharka.name}</h3>
        </div>
      </motion.div>
    </>
  );
};

export default Dharlist;
