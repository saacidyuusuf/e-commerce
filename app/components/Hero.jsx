import { motion } from "framer-motion";
import { textVariant, staggerContainer } from "../utilist/motion";

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
        <motion.h1 variants={textVariant(1.1)}>
          BAXAR STORE
        </motion.h1>
        <motion.p variants={textVariant(1.5)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          explicabo autem, <br /> reiciendis ullam similique aperiam.
          Repellendus atque odit dolorum fuga?
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
