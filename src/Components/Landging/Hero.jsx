import React from "react";
import { Arrow, Buisness, Career, Partner, Product, SampleSvg } from "../../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
   <div className="bg-[#ecbb3f0e] pb-12 shadow-sm">
     <div className=" w-[80%] mx-auto">
      <div className=" w-[70%] mx-auto">
        <h1 className=" text-[44px] font-bold text-center pt-12">
          <span className=" text-[#EF6A1F]">Elevate Your Business</span>: Manage
          Shops & Unlock Premium{" "}
          <span className="text-[#EF6A1F]">
            Beauty, Barber, and More Services!
          </span>
        </h1>
        <p className=" text-center">
          Revolutionize Shop Management: Seamlessly Serve Customers while
          Accessing Premium Beauty, Barber, and More Services!"
        </p>
      </div>
      {/* Links-Boxes */}
      <div className=" grid grid-cols-5 gap-4 mt-6">
        <div className=" bg-[#fff] py-12 px-4 flex flex-col items-center gap-4 shadow-sm rounded-md">
          <img className=" w-[70px]" src={Buisness} alt="" />
          <p className=" text-center">Maximize profitability of your beauty and wellness business?</p>
          <Link to='/buisnes' className=" text-[#EF6A1F] btn flex items-center gap-2">Explore More <img src={Arrow} alt="" /></Link>
        </div>
        <div className=" bg-[#fff] py-12 px-4 flex flex-col items-center gap-4 shadow-sm rounded-md">
          <img className=" w-[70px]" src={Career} alt="" />
          <p className=" text-center">Maximize profitability of your beauty and wellness business?</p>
          <Link to='/career' className=" text-[#EF6A1F] btn flex items-center gap-2">Explore More <img src={Arrow} alt="" /></Link>
        </div>
        <div className=" bg-[#fff] py-12 px-4 flex flex-col items-center gap-4 shadow-sm rounded-md">
          <img className=" w-[70px]" src={SampleSvg} alt="" />
          <p className=" text-center">Maximize profitability of your beauty and wellness business?</p>
          <Link to='/looking' className=" text-[#EF6A1F] btn flex items-center gap-2">Explore More <img src={Arrow} alt="" /></Link>
        </div>
        <div className=" bg-[#fff] py-12 px-4 flex flex-col items-center gap-4 shadow-sm rounded-md">
          <img className=" w-[70px]" src={Partner} alt="" />
          <p className=" text-center">Maximize profitability of your beauty and wellness business?</p>
          <Link to="/partner" className=" text-[#EF6A1F] btn flex items-center gap-2">Explore More <img src={Arrow} alt="" /></Link>
        </div>
        <div className=" bg-[#fff] py-12 px-4 flex flex-col items-center gap-4 shadow-sm rounded-md">
          <img className=" w-[70px]" src={Product} alt="" />
          <p className=" text-center">Maximize profitability of your beauty and wellness business?</p>
          <Link to='/product' className=" text-[#EF6A1F] btn flex items-center gap-2">Explore More <img src={Arrow} alt="" /></Link>
        </div>
      </div>
      {/* Links_Boxes */}
    </div>
   </div>
  );
};

export default Hero;
