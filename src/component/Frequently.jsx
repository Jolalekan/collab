import Container from './Container';
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { frequently } from '../data/menu';

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    if (openIndex === index) {
      // Close the current item
      gsap.to(contentRefs.current[index], {
        height: 0,
        duration: 0.3,
        onComplete: () => setOpenIndex(null),
      });
    } else {
      // Open the clicked item
      if (openIndex !== null) {
        // Close the previously open item
        gsap.to(contentRefs.current[openIndex], { height: 0, duration: 0.3 });
      }
      setOpenIndex(index);
      gsap.fromTo(
        contentRefs.current[index],
        { height: 0 },
        { height: "auto", duration: 0.3 }
      );
    }
  };

  return (
    <Container>
      <div className="flex flex-col py-2 md:py-6">
        <div className="md:flex">
          <div className="flex-1 flex flex-col items-center justify-center pt-20">
            <h3 className="text-xl leading-tight text-gray-600 font-medium">
              Here are some
            </h3>
            <h2 className="text-3xl leading-tight font-bold">
              Frequently Asked <br /> Question
            </h2>
          </div>
          <div className="flex-1 w-full py-20">
            <div className="flex flex-col gap-2">
              <div className="bg-gray-100 rounded-md p-4">
                <h3 className="text-sm font-medium">How about us</h3>
                <p className="text-gray-500 text-sm">
                Streamline workflow and boost productivity with our platform's task management, collaboration, and tracking tools. Customizable, secure, and 24/7 supported for individuals and businesses.
                </p>
              </div>

              {/* Accordion Items */}
              {frequently.map((item, index) => (
                <div key={index}>
                  <div
                    className="shadow-md border flex justify-between py-4 px-4 border-gray-500 rounded-md cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleAccordion(index)} // Pass `index` to the handler
                  >
                    <h3 className="text-sm leading-tight font-semibold">
                     {item.FAQ}
                    </h3>
                    <img
                      src="/assets/chevronblack.png"
                      width={12}
                      height={12}
                      alt=""
                      className={`cursor-pointer hover:opacity-90 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Accordion Content */}
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="overflow-hidden"
                    style={{ height: 0 }}
                  >
                    <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md">
                      <p className="text-sm text-gray-600">
                      {item.desc}                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-950 md:flex py-4 md:py-0 rounded-lg">
          <div className="hidden md:flex">
            <img src="/assets/women.png" height={400} width={400} alt="" />
          </div>
          <div className="md:p-16 p-4 gap-2 flex flex-col items-center">
            <h2 className="text-3xl leading-tight text-center text-white">
              Centralize your account <br /> in modern way
            </h2>
            <button className="border py-2 px-4 text-white font-medium rounded-md">
              Click here
            </button>
          </div>
          <div>
            <div className="flex items-center justify-center h-full">
              <img src="/assets/history.png" width={200} height={200} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Frequently;