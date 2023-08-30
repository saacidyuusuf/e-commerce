import Image from 'next/image';
import { image1, image2, 
image3, image4, image5 }
 from "../images/index";
 import { motion } from "framer-motion";
import { slideIn} from "../utilist/motion";

const Collection = () => {
  return (
    <div>
      <h1 className="collectionTitle">Collection</h1>
      <div className="collectionHaye">
        <div className="collections">
          <div className="collection-haye">
            <div className="collection">
              <Image src={image5} className='collectionImg' alt="" />
              <h3>Xamar Wayne</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, vitae?
              </p>
            </div>
            <div className="collection">
              <Image src={image1} alt="" className='collectionImg' />
              <h3>Xamar Wayne</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, vitae?
              </p>
            </div>
            <div className="collection">
              <Image src={image2} alt="" className='collectionImg' />
              <h3>Xamar Wayne</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, vitae?
              </p>
            </div>
            <div className="collection">
              <Image src={image3} alt=""  className='collectionImg'/>
              <h3>Xamar Wayne</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, vitae?
              </p>
            </div>
          </div>
          <div 
           variants={slideIn(("left", "tween", 0.12, 0.5))}
           initial="hidden"
           whileInView="show"
          className="imgGees" data-aos="slide-left">
            <Image src={image4} alt=""  className='imgGeesImg'/>
            <div className="imgGeesText">
              <h3>Xamar Wayne</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Quibusdam, vitae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
