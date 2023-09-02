import Image from "next/image";
import { image13, image4, image6 } from "../assets/images/index";

const HeroBottom = () => {
  return (
    <div className="heroBottoms">
      <div className="heroBottom">
        <Image className="herobottomImg" src={image13} />
        <h3>Name</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nobis
          exercitationem consectetur dignissimos dolorem voluptatem nisi ullam
          rem, doloribus sunt.
        </p>
      </div>
      <div className="heroBottom">
        <Image className="herobottomImg" src={image4} />
        <h3>Name</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nobis
          exercitationem consectetur dignissimos dolorem voluptatem nisi ullam
          rem, doloribus sunt.
        </p>
      </div>
      <div className="heroBottom">
        <Image className="herobottomImg" src={image6} />
        <h3>Name</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nobis
          exercitationem consectetur dignissimos dolorem voluptatem nisi ullam
          rem, doloribus sunt.
        </p>
      </div>
    </div>
  );
};

export default HeroBottom;
