'use client'
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Sliders from "./components/Sliders";
import Testimonial from './components/Testimonial'

const HomePage = () => {

  return (
    <>
    <section className="heroHomePage">
      <Hero/>
    </section>
    <Collection/>
    <Sliders/>
    <Testimonial/>
    </>
  );
};

export default HomePage;
