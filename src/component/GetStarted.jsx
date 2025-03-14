import React from "react";
import Container from "./Container";

const GetStarted = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-6  py-10">
        <h2 className="text-blue-950 font-bold text-xl border bg-gray-50 px-2 py-2 rounded-lg">
          HOW IT WORKS
        </h2>

        <h3 className="text-base md:text-2xl from-black leading-tight text-center">
          Get Started with this simple steps
        </h3>

        <div className="w-full">
          <div className=" flex flex-col w-full md:flex md:flex-col lg:flex-row justify-between gap-4 md:gap-8 ">
            <div className="shadow-md p-6 flex items-center  flex-col bg-gray-100 rounded-md">
              <div className="relative w-72 h-72 ">
                <img src="/assets/regis.png" className="object-cover h-full w-full" alt="" />
              </div>
              <div className="flex items-center flex-col">
                <h3 className="text-base font-semibold">Sign-up & Customise</h3>
                <p className="text-sm text-gray-500">
                Sign up easily with email or social media <br /> accounts  and start using our platform in minutes, for free!
                </p>
              </div>
            </div>
            <div className="shadow-md p-6 flex items-center  flex-col bg-gray-100 rounded-md">
              <div className="relative w-72 h-72 ">
                <img src="/assets/account.png" className="object-cover h-full w-full" alt="" />
              </div>
              <div className="">
                <h3 className="text-base font-semibold">Automate</h3>
                <p className="text-sm text-gray-500">
                Automate repetitive tasks, workflows, and processes  <br />  with our  intuitive tools,saving time and increasing productivity instantly!
                </p>
              </div>
            </div>
            <div className="shadow-md p-6 flex items-center  flex-col bg-gray-100 rounded-md">
              <div className="relative w-72 h-72 ">
                <img src="/assets/history.png" className="object-cover h-full w-full" alt="" />
              </div>
              <div className="">
                <h3 className="text-base font-semibold">Account History</h3>
                <p className="text-sm text-gray-500">
                View and manage your account history,  <br />  including past activity, payments, and subscriptions, all in one secure place.
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GetStarted;
