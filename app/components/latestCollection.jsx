import Image from "next/image";
import { latest1, latest2, latest3, latest4 } from "../assets/images/index";
import { FaShoppingCart } from "react-icons/fa";
import { GlobalContextcreated } from "../context/GlobalContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const CollectionLatest = ({ id, name, price, img, desc }) => {
  const { addClothes, dharbadan, removeClothes } =
    useContext(GlobalContextcreated);
    const router = useRouter()
    const clickHandler =() =>{
        router.push('/store')
      }

  const isItemAdded = dharbadan.some((item) => item.id === id);

  const handleAddToCart = () => {
    if (isItemAdded) {
      removeClothes(id);
    } else {
      addClothes({ id, name, price, img, desc });
    }
  };

  return (
    <div className="latest">
      <h1>Latest Collection</h1>
      <div className="latestInfo">
        <Image className="latestInfoImg" src={latest1} />
        <div className="latestText">
          <span>Info about This collection</span>
          <h2>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            earum ipsum delectus quo dignissimos. Odit sapiente sit adipisci
            fuga quibusdam! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ea, vero.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
      <div className="latestColl">
        <div className="latestImgHaye">
          <Image className="latestImg" src={latest2} />
          <FaShoppingCart onClick={clickHandler} className="cartTop" />
        </div>
        <div className="latestImgHaye">
          <Image className="latestImg" src={latest3} />
          <FaShoppingCart onClick={clickHandler}  className="cartTop" />
{/*           {isItemAdded ? "Already Added" : "Add to Cart"}
 */}        </div>
        <div className="latestImgHaye">
          <Image className="latestImg" src={latest4} />
          <FaShoppingCart onClick={clickHandler} className="cartTop" />
        </div>
      </div>
    </div>
  );
};

export default CollectionLatest;
