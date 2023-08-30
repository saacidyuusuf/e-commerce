import Image from "next/image";
import { useContext } from 'react';
import Link from "next/link";
import { GlobalContextcreated } from "../context/GlobalContext";

const Dharlist = ({dharka}) => {
  const addedclothes = useContext(GlobalContextcreated)
  
  const itemadded = addedclothes.isadded(dharka.id)

  

  return (
    <div className="dharHaye">
    <Link href="/clothes/dhardetails">
      <Image src={dharka.img} className="clothImg" alt={dharka.name} />
    </Link>
    <div className="priceName">
      <p>${dharka.price}</p>
      <button onClick={() => toggle()}>Add to chart</button>
      <h3>{dharka.name}</h3>
    </div>
  </div>
  )
}

export default Dharlist