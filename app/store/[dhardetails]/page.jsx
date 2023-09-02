import { dharbadan } from "../dhar";
import Image from 'next/image';

const DharDetails = () => {
  return (
    <section className="dharDetails">
    {dharbadan.map((dhar, index) => {
      return(
      <div className="dharInfo" key={index.id}>
        <div className="dharText">
          <h1>{dhar.name}</h1>
          <p>
           {dhar.desc}
          </p>
        </div>
        <div className="dharImg">
        <Image src={dhar.img} alt={dhar.name} />
        <div className="dharImgText">
          <h3>{dhar.name}</h3>
          <h4>
            Price:<span>${dhar.price}</span>
          </h4>
        </div>
        </div>
      </div>
      )
    })}
    </section>
  );
};

export default DharDetails;


