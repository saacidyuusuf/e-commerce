'use client'
import Hero from "./components/Hero";
import Clothes from "./components/Clothes";
import Sliders from "./components/Sliders";
import Testimonial from './components/Testimonial'
import Emailband from "./components/Emailband";
import Footer from "./components/Footer";

const HomePage = () => {

  return (
    <>
    <section className="heroHomePage">
      <Hero/>
    </section>
    <Clothes/>
    <Sliders/>
    <Testimonial/>
    <Emailband/>
    <Footer/>
    </>
  );
};

export default HomePage;
