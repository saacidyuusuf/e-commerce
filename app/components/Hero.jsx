import { motion } from "framer-motion";
import { heroimg} from "../assets/images/index";
import { textVariant, slideIn, staggerContainer} from "../utilist/motion";
import Image from "next/image";
import HeroBottom from "./HeroBottomitems";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroHaye">
        <Image 
        variants={slideIn("left", "tween", 0.12, 0.5)}
        initial="hidden"
        whileInView="show"
        className="heroIMG" src={heroimg} />
        <motion.div
          className="textHero"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}>
          <motion.h1 variants={textVariant(1.1)}>BAXAR STORE</motion.h1>
          <motion.p variants={textVariant(1.5)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            explicabo <br /> autem, reiciendis ullam  similique aperiam.
            Repellendus atque <br /> odit dolorum fuga?
            <button className="btnhero">See More</button>
          </motion.p>
        </motion.div>
      </div>
      <HeroBottom/>
    </section>
  );
};

export default Hero;
