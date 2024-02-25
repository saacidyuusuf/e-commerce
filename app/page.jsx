"use client";
import Hero from "./components/Hero";
import Product from "./components/products";
import Sliders from "./components/Sliders";
import Testimonial from "./components/Testimonial";
import Emailband from "./components/Emailband";
import Footer from "./components/Footer";
import CollectionLatest from "./components/latestCollection";
import Header from "./components/Header";
import CoupleProducts from "./store/CoupleProducts";

const HomePage = () => {
  return (
    <>
      <section className="heroHomePage">
        <Hero />
        <Header />
      </section>
      <section className="center">
        <CoupleProducts />
        <CollectionLatest />
        <Testimonial />
        <Emailband />
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
