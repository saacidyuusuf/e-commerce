import { motion } from "framer-motion";
import {
  heroOne,
  image2,
  image6,
  image7,
  image8,
  image9,
} from "../assets/images/index";
import { textVariant, slideIn, staggerContainer } from "../utilist/motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroHaye">
        <motion.div
          className="textHero"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h1 variants={textVariant(1.1)}>BAXAR STORE</motion.h1>
          <motion.p variants={textVariant(1.4)}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio et
            sint <br /> vitae porro quibusdam id.
          </motion.p>
          <motion.button variants={textVariant(1.6)}
           className="learnmore">
            Learn More
          </motion.button>
          <motion.div
            variants={slideIn("left", "tween", 0.12, 1)}
            initial="hidden"
            whileInView="show"
            className="youngImgs"
          >
            <Image loading="lazy" src={image2} />
            <Image loading="lazy"  src={image6} />
            <Image loading="lazy" src={image7} />
            <Image loading="lazy"  src={image9} />
          </motion.div>
        </motion.div>
        <div className="imgHero">
          <Image
            variants={slideIn("left", "tween", 0.12, 0.5)}
            initial="hidden"
            whileInView="show"
            className="heroIMG"
            src={heroOne}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
