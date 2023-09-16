"use client";
import { useState, useEffect, useContext } from "react";
import { dharbadan } from "./dhar";
import Dharlist from "../components/Dharlist";
import { navVariants } from "../utilist/motion";
import { motion } from "framer-motion";
import supabase from "../components/supebase";
import SearchClothes from "../components/SearchClothes";
import { GlobalContextcreated } from "../context/GlobalContext";

const Page = () => {
  const [query, setquery] = useState("");
  const { products ,setProducts } = useContext(GlobalContextcreated);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("Product").select("*");
        if (error) {
          setError(error);
          setProducts(null);
        } else {
          setProducts(data);
          setError(null);
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
        setProducts(null);
      }
    }
    fetchData();
  }, []);

  const filtered = products ? products.filter((dhar) => {
    return dhar.name.toLowerCase().includes(query.toLowerCase());
  }) : [];
  

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
        {filtered.length > 0 ? (
          filtered.map((dharka) => (
            <Dharlist
              id={dharka.id}
              img={dharka.img}
              price={dharka.price}
              name={dharka.name}
              desc={dharka.desc}
              key={dharka.id}
            />
          ))
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </>
  );
};

export default Page;
