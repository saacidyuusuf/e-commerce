import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../utilist/motion";
import { GlobalContextcreated } from "../context/GlobalContext";

const Dharlist = ({ dharka }) => {
  const { addClothes, isadded } = useContext(GlobalContextcreated);
  const isItemAdded = isadded(dharka.id);

  const handleAddToCart = () => {
    addClothes(dharka);
  };

  return (
    <>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        className="dharHaye"
      >
        <Link href="/store/dhardetails">
          <Image src={dharka.img} className="clothImg" alt={dharka.name} />
        </Link>
        <div className="priceName">
          <p>${dharka.price}</p>
          {isItemAdded ? (
            <button disabled>added to cart</button>
          ) : (
            <button onClick={handleAddToCart}>Add to chart</button>
          )}
          <h3>{dharka.name}</h3>
        </div>
      </motion.div>
    </>
  );
};

export default Dharlist;
