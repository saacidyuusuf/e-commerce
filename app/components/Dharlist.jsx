import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../utilist/motion";
import { supabase } from "./supebase";
import { useRouter } from "next/navigation";
import { GlobalContextcreated } from "../context/GlobalContext";

const Dharlist = ({id,name, price, img, desc}) => {
  
  const { addClothes, dharbadan, removeClothes } =
    useContext(GlobalContextcreated);

  const isItemAdded = dharbadan.some((item) => item.id === id);

  const handleAddToCart = () => {
    if (isItemAdded) {
      removeClothes(id);
    } else {
      addClothes({id, name, price, img, desc});
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
        <Link href={`/store/dhardetails${id}`} as={`/store/dhardetails/${id}`} passHref>
          <Image width={300} height={300} src={img} className="clothImg" alt={name} />
        </Link>
        <div className="priceName">
          <p>${price}</p>
          <button onClick={handleAddToCart}>
            {isItemAdded ? "Already Added" : "Add to Cart"}
          </button>
          <h3>{name}</h3>
        </div>
      </motion.div>
    </>
  );
};

export default Dharlist;
