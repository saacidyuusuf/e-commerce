"use client";
import Hero from "./components/Hero";
import Product from "./components/products";
import Sliders from "./components/Sliders";
import Testimonial from "./components/Testimonial";
import Emailband from "./components/Emailband";
import Footer from "./components/Footer";
import CollectionLatest from "./components/latestCollection";
import Header from "./components/Header";
const HomePage = () => {
  return (
    <>
      <section className="heroHomePage">
        <Hero />
        <Header/>
      </section>
      <Product/>
      <CollectionLatest/>
      <Testimonial />
      <Emailband />
      <Footer />
    </>
  );
};

export default HomePage;
