"use client";
import { dharbadan } from "./dhar";
import Dharlist from "../components/Dharlist";

const Page = () => {
  
  return (
    <div className="store">
      {dharbadan.map((dharka) => (
        <Dharlist
        id={dharka.id}
        image={dharka.img}
        price={dharka.price}
        name={dharka.name}
        desc={dharka.description}
        category={dharka.category}
         key={dharka.id} dharka={dharka}/>
      ))}
    </div>
  );
};

export default Page;
