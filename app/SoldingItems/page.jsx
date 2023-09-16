"use client";
import { useContext } from "react";
import Image from "next/image";
import TotalCart from "../components/TotalCart";
import { GlobalContextcreated } from "../context/GlobalContext";

const CartPage = () => {
  const { dharbadan, totalclothes, removeClothes, products } =
    useContext(GlobalContextcreated);
    
  return (
    <>
      <div className="cartPage">
        <h1>Shopping Cart</h1>
        <p>{totalclothes} Item in cart</p>
        {dharbadan.length === 0 ? (
          <p className="noItem">no item found</p>
        ) : (
          <>
            {dharbadan.map((dhar) => (
              <>
                <hr />
                <div className="cartHaye" key={dhar.id}>
                  <Image src={dhar.img} width={250} height={200}  className="cartImg" alt="deqo" />
                  <div className="cartInfo">
                    <h3>{dhar.name}</h3>
                    <p>${dhar.price}</p>
                    <button onClick={() => removeClothes(dhar.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      <TotalCart products={products}/>
      </div>
    </>
  );
};

export default CartPage;
