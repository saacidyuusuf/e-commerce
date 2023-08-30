/* eslint-disable */
import Image from 'next/image';
import { useState} from "react";
import { TestiData } from "./TestiData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Corousel = () => {
  const [slide, setslide] = useState(0);

  const nextSlide = () => {
    setslide(slide === TestiData.length - 1 ? 0 : slide + 1  );
  };
  const prevSlide = () => {
    setslide(slide === 0 ? TestiData.length - 1 : slide - 1 );
  };

  return (
    <section className="testimonial">
      <h1 className='testiTitle'>Testimonial</h1>
    <div className="flex">
      <FaAngleLeft className="left" onClick={prevSlide}/>
      {TestiData.map((data, index) => {
        return (
          <div
            key={index}
            className={slide === index ? "haye" : "haye haye-hidden"}
          >
            <Image className="image" src={data.img} alt="" />
            <h1>{data.name}</h1>
            <p>{data.desc}</p>
          </div>
        );
      })}
      <FaAngleRight className="right" onClick={nextSlide} />
      <span className="indicators">
        {TestiData.map((_, index) => {
          return (
            <button
              onClick={() => setslide(index)}
              key={index}
              className={slide === index ? "indicator" : "indicator-inactive"}
            ></button>
          );
        })}
      </span>
    </div>
    </section>
  );
};

export default Corousel;