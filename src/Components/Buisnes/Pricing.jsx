import React, { useState } from "react";
import Check from "../../assets/Check.svg";
import { Arrow } from "../../assets";

const Pricing = () => {
  const [type, setType] = useState(0);
  const [duration, setDuration] = useState(3); 
  const [isHovered, setIsHovered] = useState([false, false, false]); 

  const handleMouseEnter = (index) => {
    setIsHovered((prev) => {
      const newHoverState = [...prev];
      newHoverState[index] = true;
      return newHoverState;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prev) => {
      const newHoverState = [...prev];
      newHoverState[index] = false;
      return newHoverState;
    });
  };

  return (
    <div className="w-[80%] mx-auto mt-24 mb-12">
      <h1 className="text-[33px] font-bold text-center">Our Pricing</h1>
      {/* Buttons for selecting type and duration */}
      <div className="flex gap-5 items-center justify-center">
        {/* Individual Button */}
        <button
          onClick={() => setType(0)}
          className={`${
            type === 0
              ? "border-b-[2px] border-b-[#EF6A1F] text-[#EF6A1F] font-medium"
              : "text-[#949494]"
          }`}
        >
          Individual
        </button>
        {/* Business Button */}
        <button
          onClick={() => setType(1)}
          className={`${
            type === 1
              ? "border-b-[2px] border-[#EF6A1F] text-[#EF6A1F] font-medium"
              : "text-[#949494]"
          }`}
        >
          Business
        </button>
      </div>
      {/* Duration Buttons */}
      <div className="flex items-center justify-center gap-4">
        <div className="bg-[#f8f8f8] py-2 px-6  rounded-full mt-6">
          <button
            onClick={() => setDuration(3)}
            className={`${
              duration === 3
                ? "bg-[#EF6A1F] py-2 px-6 text-white rounded-full"
                : "bg-[#fff] py-2 px-6 text-[#949494] rounded-full"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setDuration(4)}
            className={`${
              duration === 4
                ? "bg-[#EF6A1F] py-2 px-6 text-white rounded-full"
                : "bg-[#fff] py-2 px-6 text-[#949494] rounded-full"
            }`}
          >
            6 Monthly
          </button>
          <button
            onClick={() => setDuration(5)}
            className={`${
              duration === 5
                ? "bg-[#EF6A1F] py-2 px-6 text-white rounded-full"
                : "bg-[#fff] py-2 px-6 text-[#949494] rounded-full"
            }`}
          >
            12 Monthly
          </button>
        </div>
      </div>
      {/* Pricing Boxes */}
      <div className="grid grid-cols-3 gap-7 mt-7">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`bg-white border-[2px] flex flex-col gap-2 rounded-md py-6 px-6 border-[#f2f2f2] transition-all duration-300 ease-in-out ${
              isHovered[index] ? "hover:scale-[1.1] hover:shadow-md" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <h2 className={`text-[18px] font-semibold text-center ${
              isHovered[index] ? "text-[#EF6A1F]" : "text-[#949494]"
            }`}>
              6 Months
            </h2>
            <h1 className="text-[33px] font-bold text-center">$135.99</h1>
            {/* Features */}
            <div className="flex flex-col gap-5 mt-5">
              {[1, 2, 3].map((featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-4">
                  <img src={Check} alt="" />
                  <h1 className="text-[#949494]">booking system</h1>
                </div>
              ))}
            </div>
            <button className="hover:bg-[#EF6A1F] mt-4 border-[#EF6A1F] transition-all duration-300 ease-in-out border-[2px] py-3 px-6 hover:text-white rounded-md">
              Start Now
            </button>
            {isHovered[index] && (
              <h1 className="text-[#EF6A1F] mt-4 flex items-center gap-2 cursor-pointer">
                start 30 days free trail <img src={Arrow} alt="" />
              </h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
