import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import images from "./images";
import Image from "next/image";
import { slideIn, navVariants, textVariant } from "../utilist/motion";

const Sliders = () => {
  const [width, setwidth] = useState(0);
  const slide = useRef();

  useEffect(() => {
    console.log(slide.current.scrollWidth, slide.current.offsetWidth);
    setwidth(slide.current.scrollWidth - slide.current.offsetWidth);
  }, []);

  return (
    <div className="sliders">
      <motion.h1
      >Latest Collection</motion.h1>
      <motion.div
        ref={slide}
        className="slider"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.12, 0.5)}
          initial="hidden"
          whileInView="show"
          drag="x" //x is left and right
          dragConstraints={{ right: 0, left: -width }}
          className="inerslider"
        >
          {images.map((image, index) => {
            return (
              <motion.div 
              variants={navVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              key={index} className="item">
                <Image src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sliders;

