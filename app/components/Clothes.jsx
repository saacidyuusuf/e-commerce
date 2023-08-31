import { dharbadan } from "../collection/dhar";
import Dharlist from "./Dharlist";
import {navVariants} from '../utilist/motion'
import {motion} from 'framer-motion'

const Page = () => {
  return (
    <>
      <motion.h1 
       variants={navVariants}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}
      className="product">Products</motion.h1>
      <div className="store">
        {dharbadan.map((dharka) => (
          <Dharlist
            id={dharka.id}
            image={dharka.img}
            price={dharka.price}
            name={dharka.name}
            desc={dharka.description}
            category={dharka.category}
            key={dharka.id}
            dharka={dharka}
          />
        ))}
      </div>
    </>
  );
};

export default Page;
