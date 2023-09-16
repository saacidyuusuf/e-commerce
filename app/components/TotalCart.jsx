import React from "react";
import { useContext } from "react";
import { GlobalContextcreated } from "../context/GlobalContext";
import getStripe from "../utilist/getStripe";

const TotalCart = () => {
  const { products, dharbadan } = useContext(GlobalContextcreated);

  const checkout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products }),
    });
    if (!response.ok) {
      console.error("Checkout request failed:", response);
      return;
    }
    try {
      const data = await response.json();
      console.log("data", data);
      toast.loading("Redirecting...");
      stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error("Failed to parse response as JSON:", error);
    }
  };
  const addedToCart = products.filter((item) =>
    dharbadan.some((addedItem) => addedItem.id === item.id)
  );

  const total = addedToCart
    .reduce((acc, item) => acc + Number(item.price), 0)
    .toFixed(2);

  

  return (
    <div className="total">
      <span>
        Total <h1 className="price">${total}</h1>
      </span>
      <button className="btncheck" onClick={checkout}>
        checkout
      </button>
    </div>
  );
};

export default TotalCart;
