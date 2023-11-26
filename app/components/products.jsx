import Image from "next/image";
import { image1, image2, image3, image4, image5 } from "../images/index";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../utilist/motion";
import { girl, image11, image12 } from "../assets/images";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const Collection = () => {
  const router = useRouter();

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
          >
            <div className="collectionImgHaye">
            <h3 className="Price">9$</h3>
            <Image src={image5} alt="" className="collectionImg" />
            <FaShoppingCart onClick={clickHandler} className="cartTop" />
            </div>
          </motion.div>
          <div className="collection">
          <div className="collectionImgHaye">
          <h3 className="Price">14$</h3>
            <Image src={image1} alt="" className="collectionImg" />
            <FaShoppingCart onClick={clickHandler} className="cartTop"/>
         </div>
          </div>
          <div className="collection">
            <div className="collectionImgHaye">
            <h3 className="Price">11$</h3>
            <Image src={image2} alt="" className="collectionImg" />
            <FaShoppingCart onClick={clickHandler} className="cartTop" />
            </div>
          </div>
          <div className="collection">
            <div className="collectionImgHaye">
            <h3 className="Price">7$</h3>
            <Image src={image12} alt="" className="collectionImg" />
            <FaShoppingCart onClick={clickHandler} className="cartTop" />
            </div>
          </div>
          <div className="collection">
            <div className="collectionImgHaye">
              <h3 className="Price">22$</h3>
            <Image src={image11} alt="" className="collectionImg" />
            <FaShoppingCart onClick={clickHandler} className="cartTop" />
            </div>
          </div>
          <div className="collection">
            <div className="collectionImgHaye">
            <h3 className="Price">5$</h3>
            <Image src={image4} alt="" className="collectionImg" />
            <FaShoppingCart onClick={clickHandler} className="cartTop" />
            </div>
          </div>
      </div>
      <div className="allP" >
      <button onClick={clickHandler}>All Products</button>
      </div>
    </div>
  );
};

export default Collection;
