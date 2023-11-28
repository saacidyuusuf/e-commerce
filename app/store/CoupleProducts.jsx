"use client";
import { useState, useEffect, useContext } from "react";
import { dharbadan } from "./dhar";
import Dharlist from "../components/Dharlist";
import { navVariants } from "../utilist/motion";
import { motion } from "framer-motion";
import supabase from "../components/supebase";
import SearchClothes from "../components/SearchClothes";
import Product from "../components/products";
import { useRouter } from "next/navigation";
import { GlobalContextcreated } from "../context/GlobalContext";


const CoupleProducts = () => {
  const router = useRouter();
  const { products, setProducts } = useContext(GlobalContextcreated);
  const [error, setError] = useState(null);

  const clickHandler = () => {
    router.push("/store");
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("Product")
          .select("id, price, desc, name ,img")
          .limit(3);
        if (error) {
          setError(error);
          setProducts(null);
        } else {
          setProducts(data);
          setError(null);
          console.log(data);
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
      <h1 className="collectionTitle">Products</h1>
      <div className="collectionhaye">
        {products && products.length > 0 ? (
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
         <div className="allP">
        <button onClick={clickHandler}>All Products</button>
      </div>
    </>
  );
};

export default CoupleProducts;
