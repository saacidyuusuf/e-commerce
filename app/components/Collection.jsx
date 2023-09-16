import Image from "next/image";
import { image1, image2, image3, image4, image5 } from "../images/index";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../utilist/motion";

const Collection = () => {
  return (
    <div>
      <h1 className="collectionTitle">Collection</h1>
      <div className="collectionHaye">
        <div className="collections">
          <div className="collection-haye">
            <motion.div
              variants={textVariant(1.2)}
              initial="hidden"
              whileInView="show"
              className="collection"
            >
              <Image src={image5} className="collectionImg" alt="" />
              <div className="imgGeesText">
                <h3>Xamar Wayne</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Quibusdam, vitae?
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={textVariant(1)}
              initial="hidden"
              whileInView="show"
              className="collection"
            >
              <Image src={image1} alt="" className="collectionImg" />
              <div className="imgGeesText">
                <h3>Xamar Wayne</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Quibusdam, vitae?
                </p>
              </div>
            </motion.div>
            <div className="collection">
              <Image src={image2} alt="" className="collectionImg" />
            </div>
            <div className="collection">
              <Image src={image3} alt="" className="collectionImg" />
            </div>
          </div>
          <motion.div
            variants={textVariant(1)}
            initial="hidden"
            whileInView="show"
            className="imgGees"
          >
            <Image src={image4} alt="" className="imgGeesImg" />
            <div className="imgGeesTextVisible">
              <h3>Xamar Wayne</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Quibusdam, vitae?
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
