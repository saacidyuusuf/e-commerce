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
       <motion.div
          className="textHero"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h1 variants={textVariant(1.1)}>BAXAR Store</motion.h1>
        <motion.p variants={textVariant(1.4)}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio et
            sint <br /> vitae porro quibusdam id.
          </motion.p>
          <motion.button variants={textVariant(1.6)}
           className="learnmore">
            Learn More
          </motion.button>
        </motion.div>
    </section>
  );
};

export default Hero;
