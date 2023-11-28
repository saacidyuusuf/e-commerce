"use client";
import { useState, useEffect, useContext } from "react";
import { dharbadan } from "./dhar";
import Dharlist from "../components/Dharlist";
import { navVariants } from "../utilist/motion";
import { motion } from "framer-motion";
import supabase from "../components/supebase";
import SearchClothes from "../components/SearchClothes";
import { GlobalContextcreated } from "../context/GlobalContext";
import Product from '../components/products'

const CoupleProducts = () => {
  const { products ,setProducts } = useContext(GlobalContextcreated);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("Product")
        .select("id, price, desc, name ,img")
        .limit(3);
        if (error) {
          setError(error);
          setProducts(null);
        } else {
          setProducts(data);
          setError(null);
          console.log(data)
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
        setProducts(null);
      }
    }
    fetchData();
  }, []);
 
  return (
    <>
      <div className="store">
        {products.length > 0 ? (
          products.map((dharka) => (
            <Product
              id={dharka.id}
              img={dharka.img}
              price={dharka.price}
              name={dharka.name}
              desc={dharka.desc}
              key={dharka.id}/>
          ))
          ) : (
            <p className="loading">Loading...</p>
            )}
      </div>
    </>
  );
};
console.log(products)

export default CoupleProducts;