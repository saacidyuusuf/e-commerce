import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import images from "./images";
import Image from 'next/image';

const Sliders = () => {
  const [width, setwidth] = useState(0);

  const slide = useRef();

  useEffect(() => {
    console.log(slide.current.scrollWidth, slide.current.offsetWidth);
    setwidth(slide.current.scrollWidth - slide.current.offsetWidth);
  }, []);

  return (
    <div className="sliders">
      <h1>Latest Collection</h1>
      <motion.div ref={slide} className="slider" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"//x is left and right
          dragConstraints={{ right: 0, left: -width }}
          className="inerslider"
        >
          {images.map((image, index) => {
            return (
              <motion.div key={index} className="item">
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