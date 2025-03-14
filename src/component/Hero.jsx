import React from "react";
import { FaDatabase, FaDollarSign, FaEnvelope, FaLock } from "react-icons/fa";
import { MdCode, MdFlashOn } from "react-icons/md";

const Hero = () => {
  return (
    <div className="content ">

    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center pt-60 gap-20 h-screen">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-center text-3xl lg:text-5xl text-white from-black font-semibold leading-tight ">
         Collab SOftware Solutions for Enterprenuer Growth
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
        <div className="flex items-center gap-1 text-sm text-white font-semibold leading-tight tracking-tight border-2 rounded-full py-1 px-2">
        <span className="hidden md:block">
        <FaEnvelope />

        </span>
          Contact
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

//     <div className="relative overflow-hidden" style={{
//         // background: 'rgb(2,0,36)',
//         // background: rgb(34,193,195);
//         // background: rgb(65,177,95);
//         // background: rgb(17,29,29);

//         background: "linear-gradient(0deg, rgba(17,30,31,0.01724439775910369) 0%, rgba(10,14,15,0.7539390756302521) 100%)"
// // background: "linear-gradient(8deg, rgba(65,177,95,1) 0%, rgba(28,45,62,0.3337710084033614) 69%, rgba(0,212,255,1) 100%)"
//         // background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(21,41,50,0.7987570028011204) 100%)"
//         // background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(17,17,134,0.5718662464985995) 67%, rgba(0,212,255,1) 100%)'
//       }}>
//         {/* Hero content */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//             {/* Text content */}
//             <div className="space-y-8">
//               <div>
//                 <h1 className="mt-4 text-4xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
//                   Build Your Latest Technology
//                 </h1>
//                 <p className="mt-6 text-xl text-indigo-100 max-w-lg">
//                   Elevate your technology world.
//                 </p>
//               </div>

//               <div className="flex items-center sm:flex-row gap-4">
//                 <a href="/" className="inline-flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-indigo-800 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg transition duration-150">
//                   Explore More
//                 </a>
//               </div>

//               {/* Featured benefits */}
//               <div className="grid grid-cols-2 gap-4 pt-4">
//                 <div className="flex items-center space-x-2">
//                   <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <span className="text-sm text-white">24/7 Support</span>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                     </svg>
//                   </div>
//                   <span className="text-sm text-white">Consultation</span>
//                 </div>
//               </div>
//             </div>

//             {/* Product image */}
//             <div className="relative">
//               <div className="relative h-64 sm:h-80 md:h-96 lg:h-96 overflow-hidden rounded-xl shadow-2xl">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                 <div className="h-full w-full bg-gray-200 flex items-center justify-center">
//                   {/* Replace with your actual product image */}
//                   <div className="text-gray-500 text-lg">
//                     <img src="/api/placeholder/600/400" alt="hero image" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
