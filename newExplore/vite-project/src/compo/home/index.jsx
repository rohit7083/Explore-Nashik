import React from "react";
import Header from "./Header";
import SliderFood from "./SliderFood";
import ToursAndTravels from "./ToursAndTravels";
import GallerySection from "./Gallery";
import Footer from "./Footer";
import Reviews from "./Testonomial";
import TopAttractions from "./TopAttractions";
import Slider from "./Slider";

function index() {
  return (
    <div>
      <Header />
      <Slider />
      <TopAttractions />
      <SliderFood />
      <Reviews />
      <ToursAndTravels />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default index;
