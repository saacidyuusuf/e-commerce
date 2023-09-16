import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    <div className="Contact">
      <div className="info">
        <h1>Contact</h1>
        <p>BxarStore</p>
        <p>Address: Muqdisho</p>
      </div>
      <div className="formHaye">
        <form action="">
          <div className="inputGroup">
         
          <input id="name" type="text" placeholder="name" />
          <input id="email" type="email"  placeholder="Email"/>
          <input id="phone" type="tel" placeholder="Phone"/>
          <textarea cols="40" rows="10" placeholder="Comment"></textarea>
          </div>
          <br />
          <button className="conBtn">Submit</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
