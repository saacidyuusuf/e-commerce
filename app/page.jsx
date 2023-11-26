"use client";
import Hero from "./components/Hero";
import Clothes from "./components/products";
import Sliders from "./components/Sliders";
import Testimonial from "./components/Testimonial";
import Emailband from "./components/Emailband";
import Footer from "./components/Footer";
import CollectionLatest from "./components/latestCollection";
const HomePage = () => {
  return (
    <>
      <section className="heroHomePage">
        <Hero />
      </section>
      <Clothes />
      <CollectionLatest/>
      <Testimonial />
      <Emailband />
      <Footer />
    </>
  );
};

export default HomePage;
