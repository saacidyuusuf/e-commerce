import React from "react";
import { dele, image10 } from "../assets/images/index";
import Image from "next/image";

const Emailband = () => {
  return (
    <>
      <div className="email">
        <div className="emailhaye">
          <div className="emailContent">
            <h1>Our Email</h1>
            <h2>
              Messege Us We Are <br /> Always Here
            </h2>
            <form action="">
              <label htmlFor="">Email</label>
              <input type="Email" placeholder="Email Us" />
              <br />
              <button className="shopNow">Submit</button>
            </form>
          </div>
          <div className="imghaye">
            <Image className="emailimg" src={dele} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Emailband;
