import { useState } from "react";
import { dharbadan } from "../collection/dhar";
import Dharlist from "./Dharlist";
import { navVariants } from "../utilist/motion";
import { motion } from "framer-motion";
import SearchClothes from "./SearchClothes";

const Page = () => {
  const [query, setquery] = useState("");

  const filtered = dharbadan.filter((dhar) => {
    return dhar.name.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <>
      <motion.h1
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="product"
      >
        Products
      </motion.h1>
      <SearchClothes query={query} setquery={setquery} />
      <div className="btncloths">
        <button>Dumar</button>
        <button>Rag</button>
        <button>Caruur</button>
      </div>
      <div className="store">
        {filtered.map((dharka) => (
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
