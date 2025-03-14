import React from "react";
import Container from "./Container";

const Plans = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="py-10  flex flex-col items-center gap-4 ">
          <div className="flex items-center flex-col gap-2">
            <h2 className="text-xl md:text-2xl text-black font-bold leading-tight">
              Choose your plan
            </h2>
            <p className="text-center text-sm lg:text-base">
              1month unlimited free trial. No contract or credit card required
            </p>
          </div>
          <div className="flex flex-col md:px-20 w-full md:flex md:flex-col lg:flex-row justify-between gap-4 md:gap-8">
            <div className="border shadow-md w-full bg-blue-950  text-white rounded-md">
              <div className="flex mb-8 p-6 flex-col gap-8">
                <div>
                  <h3 className="text-base leading-tight"> Premium</h3>
                  <p className="text-sm text-gray-50">
                    Best Practice you can trust
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <h2 className="text-5xl font-medium">$10</h2>
                  <span className="font-medium">Per Month</span>
                </div>

                <div>
                  <div className="bg-gray-50 p-3 rounded-md cursor-pointer hover:opacity-70">
                    <h3 className="text-center text-blue-950 font-medium">
                      Basic Premium Price
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/checked.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Exclusive Features</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/checked.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Increased Storage</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/checked.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Advanced Automation</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/checked.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Multi-User Access</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/checked.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Advanced Analytics</h3>
                  </div>
                </div>
              </div>
              <div className="text-center border rounded-b-md bg-gray-50 ">
                <h3 className="text-blue-950 font-medium py-2">PREMIUM</h3>
              </div>
            </div>
            <div className="border shadow-md w-full bg-white-950  text-blue-950 rounded-md">
              <div className="flex mb-8 p-6 flex-col gap-8">
                <div>
                  <h3 className="text-base leading-tight font-semibold">
                    {" "}
                    Platinum
                  </h3>
                  <p className="text-sm ">Best Practice you can trust</p>
                </div>
                <div className="flex items-center gap-1">
                  <h2 className="text-5xl font-medium">$25</h2>
                  <span className="font-medium">Per Month</span>
                </div>

                <div>
                  <div className="bg-blue-950 p-3 rounded-md cursor-pointer hover:opacity-70">
                    <h3 className="text-center text-white font-medium">
                      Basic Premium Price
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/check.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">All Premium Features</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/check.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Custom Onboarding</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/check.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Increased Storage</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/check.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Account Manager</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/check.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Advanced Integration</h3>
                  </div>
                </div>
              </div>
              <div className="text-center  bg-blue-950 border rounded-b-md">
                <h3 className="text-gray-50 font-medium py-2">PLATINUM</h3>
              </div>
            </div>
            <div className="border shadow-md w-full bg-white  text-blue-950 rounded-md">
              <div className="flex mb-8 p-6 flex-col gap-8">
                <div>
                  <h3 className="text-base leading-tight font-semibold">
                    {" "}
                    Freemium
                  </h3>
                  <p className="text-sm ">Best Practice you can trust</p>
                </div>
                <div className="flex items-center gap-1">
                  <h2 className="text-5xl font-medium">$0</h2>
                  <span className="font-medium">Per Month</span>
                </div>

                <div>
                  <div className="bg-blue-950 p-3 rounded-md cursor-pointer hover:opacity-70">
                    <h3 className="text-center text-white font-medium">
                      Basic Premium Price
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/check.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Limited Storage</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/check.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Single User Access</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/check.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Full Service</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/check.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Limited Customization:</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/check.png"
                      height={16}
                      width={16}
                      alt=""
                    />
                    <h3 className="text-base">Basic Analytics:</h3>
                  </div>
                </div>
              </div>
              <div className="border  text-center bg-blue-950 rounded-b-md">
                <h3 className="text-gray-50 font-medium py-2">FREEMIUM</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Plans;
