"use client";
import { dharbadan } from "../dhar";
import { useRouter } from "next/router";
import Image from "next/image";

const DharDetails = () => {
  const router = useRouter();
  const {id} = router.query;

  const selectedDhar = dharbadan.find((dhar) => dhar.id === id);

  if (!selectedDhar) {
    return <div>Loading...</div>; // Add a loading state while the data is being fetched
  }
  return (
    <section className="dharDetails">
      <div className="dharInfo" key={selectedDhar.id}>
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
  );
};

export default DharDetails;
