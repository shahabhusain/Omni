import React from "react";
import Header from "../Components/Buisnes/Header";
import Hero from "../Components/Buisnes/Hero";
import Connects from "../Components/Buisnes/Connects";
import Features from "../Components/Buisnes/Features";
import Appointment from "../Components/Buisnes/Appointment";
import Order from "../Components/Buisnes/Order";
import Pricing from "../Components/Buisnes/Pricing";
import Footer from "../Components/Buisnes/Footer";
const Buisness = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Connects />
      <div className=" bg-[#F8F8F8] py-14 mt-32">
        <Features />
        <Appointment />
        <Order />
      </div>
      <Pricing />
      <Footer />
    </div>
  );
};

export default Buisness;
