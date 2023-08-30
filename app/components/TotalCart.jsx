import React from "react";
import { useContext } from "react";
import { GlobalContextcreated } from "../context/GlobalContext";

const TotalCart = () => {
  const { dharbadan } = useContext(GlobalContextcreated);

  const amount = dharbadan.map((dharka) => dharka.price);

  const total = amount.reduce((kow, labo) => kow + labo, 0).toFixed(2);

  return (
    <div className="total">
      <span>
        Total <h1 className="price">${total}</h1>
      </span>
      <button className="btncheck">checkout</button>
    </div>
  );
};

export default TotalCart;
