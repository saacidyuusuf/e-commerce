"use client";
import { useContext } from "react";
import Image from "next/image";
import { image1 } from "../images";
import TotalCart from "../components/TotalCart";
import { GlobalContextcreated } from "../context/GlobalContext";

const CartPage = () => {
  const { dharbadan, totalclothes, removeClothes } =
    useContext(GlobalContextcreated);

    
    
  return (
    <>
      <div className="cartPage">
        <h1>Shopping Cart</h1>
        <p>{totalclothes} Course in cart</p>
        {dharbadan.length === 0 ? (
          <p className="noItem">no item found</p>
        ) : (
          <>
            {dharbadan.map((dhar) => (
              <>
                <hr />
                <div className="cartHaye" key={dhar.id}>
                  <Image src={dhar.img} className="cartImg" alt="deqo" />
                  <div className="cartInfo">
                    <h3>{dhar.name}</h3>
                    <p>${dhar.price}</p>
                    <button onClick={() => removeClothes(dhar.id)}>
                      Remove
                    </button>
                  </div>
                  {/*  <div className="cartpriceInfo">
                <button>Remove</button>
              </div> */}
                </div>
              </>
            ))}
          </>
        )}
      </div>
      <TotalCart />
    </>
  );
};

export default CartPage;
