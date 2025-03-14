import React from "react";
import { FaDatabase, FaDollarSign, FaEnvelope, FaLock } from "react-icons/fa";
import { MdCode, MdFlashOn } from "react-icons/md";

const Hero = () => {
  return (
    <div className="content ">

    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center pt-60 gap-20 h-screen">
      <div className="px-4 flex flex-col items-center gap-6">
        <h1 className="text-center text-2xl lg:text-5xl text-white from-black font-bold leading-tight ">
         Collab Software Solutions for Enterprenuer Growth
        </h1>
        <p className="text-gray-200 text-center font-medium leading-tight">
        Leading software company providing innovative solutions and services globally.
        </p>

        <div className="relative cursor-pointer group">
  {/* Outer border layer */}
  <div className="absolute inset-0 bg-blue-300 rounded-full -m-1"></div>
  
  {/* Middle border layer */}
  <div className="absolute inset-0 bg-blue-500 rounded-full -m-0.5"></div>
  
  {/* Inner content with white background */}
  <div className="relative bg-white px-4 py-2 rounded-full font-bold hover:opacity-85 transition-all duration-200">
    <div className="flex items-center gap-1">
      <h3 className="text-blue-950">
        Get Started
      </h3>
      <span>
        <img src="/assets/arrowRight.png" alt="" height={12} width={12} />
      </span>
    </div>
  </div>
</div>
      </div>
      
      <div className="pt-4  w-full">
        <div className="flex justify-between  px-4">
        <div className="flex gap-1 items-center text-sm text-white font-semibold leading-tight tracking-tight border-2 rounded-full py-1 px-2 ">
          <span className="hidden md:block"><MdFlashOn /></span>
          Product
          </div>
        <div className="flex items-center gap-1 text-sm text-white font-semibold leading-tight tracking-tight border-2 rounded-full py-1 px-2">
        <span className="hidden md:block">

        <FaDatabase />
        </span>
          Resources
          </div>
        <div className="flex items-center gap-1  text-sm text-white font-semibold leading-tight tracking-tight border-2 rounded-full py-1 px-2">
        <span className="hidden md:block">

        <FaDollarSign />
        </span>
          Pricing
          </div>
        <div className="flex items-center gap-1 text-sm text-white font-semibold leading-tight tracking-tight border-2 rounded-full py-1 px-2">
        <span className="hidden md:block">

        <FaLock />
        </span>
          Security
          </div>
       
        </div>
   
      <div className="w-full rounded-3xl border bg-yellow-100 opacity-10 h-60 flex-grow mt-2">
      </div>
      </div>
    </div>
</div>
  );
};

export default Hero;
