import React from "react";
import { dharbadan } from "../dhar";
import Image from 'next/image';
import {image4} from "@/app/assets/images/index";

const DharDetails = () => {
  return (
    <section className="dharDetails">
      <div className="dharInfo">
        <div className="dharText">
          <h1>Waa waray waa najax</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            dolor quo cum. Magnam doloribus iure, minima veritatis doloremque
            ullam ratione dolore, quia debitis, officia quos! Explicabo,
            corporis veritatis. Totam, fugit. Delectus cupiditate cum corrupti
            esse!
          </p>
        </div>
        <div className="dharImg">
        <Image src={image4} alt="" />
        <div className="dharImgText">
          <h3>Haboon</h3>
          <h4>
            Price:<span>$18</span>
          </h4>
        </div>
        </div>
      </div>
    </section>
  );
};

export default DharDetails;

/* 
 {book.map((kali) => {
        return (
          <div className="kali">
            <p>{kali.desc}</p>
            <div className="imgprice">
              {kali.name}
              {kali.price}
              <img src={kali.img} alt="" />
            </div>
          </div>
        );
      })}
 */
