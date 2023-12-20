"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useContext } from "react";
import { GlobalContextcreated } from "@/app/context/GlobalContext";
import ContextProvider from "@/app/context/GlobalContext";
const DharDetails = () => {
  const { products } = useContext(GlobalContextcreated);
  const router = useRouter();
  const { id } = router.query || {};
  const [selectedDhar, setSelectedDhar] = useState(products);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("usefffect");
    console.log(products);
    console.log(id);
    if (products && id) {
      const foundDhar = products.find((dhar) => dhar.id === parseInt(id));
      setSelectedDhar(foundDhar);
    }
    setIsLoading(false);
  }, [products, id]);

  if (!id) {
    console.log("no id");
  }
  if (isLoading || !selectedDhar) {
    return <div>Loading...</div>;
  }

  return (
    <ContextProvider>
      <section className="dharDetails">
        <div className="dharInfo">
          <div className="dharText">
            <h1>{selectedDhar.name}</h1>
            <p>{selectedDhar.desc}</p>
          </div>
          <div className="dharImg">
            <Image src={selectedDhar.img} alt={selectedDhar.name} />
            <div className="dharImgText">
              <h3>{selectedDhar.name}</h3>
              <h4>
                Price:<span>${selectedDhar.price}</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </ContextProvider>
  );
};

export default DharDetails;
