"use client";
import Hero from "./components/Hero";
import Clothes from "./components/Collection";
import Sliders from "./components/Sliders";
import Testimonial from "./components/Testimonial";
import Emailband from "./components/Emailband";
import Footer from "./components/Footer";
import Header from "./components/Header";

const HomePage = () => {
  return (
    <>
      <section className="heroHomePage">
        <Hero />
      </section>
      <Clothes />
      <Sliders />
      <Testimonial />
      <Emailband />
      <Footer />
    </>
  );
};

export default HomePage;
