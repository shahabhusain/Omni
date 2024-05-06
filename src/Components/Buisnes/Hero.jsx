import React from "react";
import main from "../../assets/main.png";
import FreeShiping from "./FreeShiping";
const Hero = () => {
  return (
     <div className="back">
      <div className=" flex gap-16 pt-16 w-full">
        <div className=" pt-16 ml-24 flex flex-col w-[40%] gap-4">
          <h1 className=" text-[56px]  font-bold text-white leading-[4.5rem]">
            BEAUTY <span className=" font-normal">And</span> WELLNESS{" "}
            <span className=" font-normal">Business</span>
          </h1>
          <p className=" text-[19px] text-white">
            Necessary ye contented newspaper zealously breakfast he prevailed.
            Melancholy middletons yet understood decisively boy law she. 
          </p>
          <div className=" flex  gap-5 mt-5">
            <button className=" text-[#EF6A1F] py-3 px-6 rounded-full bg-white font-bold">
              Register your bussiness
            </button>
            <button className=" py-3 px-6 rounded-full text-white font-bold">
              Log In
            </button>
          </div>
          <p className=" text-[22px] font-medium text-white mt-5">Trusted by +1400 happy users</p>
        </div>
        <div className=" bg-[#d86928a4] py-5 rounded-2xl pr-12 pl-6 w-1/2">
        <img className="" src={main} alt="" />
        </div>
      </div>
      <div className=" mt-[5rem]">
      <FreeShiping />
      </div>
    </div>
  );
};

export default Hero;
