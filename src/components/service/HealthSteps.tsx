import React from "react";

import Image from "next/image";

interface individualStepData {
  index: number;
  title: string;
  height: number;
  width: number;
  image: string;
}
const stepData = [
  {
    index: 0,
    title: "Expressing medical need",
    height: 138,
    width: 149,
    image: "step-1-icons",
  },

  {
    index: 1,
    title: "Online Booking",
    height: 83,
    width: 258,
    image: "step-2-icons",
  },
  {
    index: 2,
    height: 129,
    width: 139,
    title: "Examniation and Tests",
    image: "step-3-icons",
  },

  {
    index: 3,
    title: "Bilingual Reports",
    height: 129,
    width: 137,
    image: "step-4-icons",
  },

  {
    index: 4,
    title: "Aftercare ",
    height: 137,
    width: 124,
    image: "step-5-icons",
  },
];
function HealthSteps() {
  return (
    <div className="">
      <div className="z-50 flex flex-col items-center justify-center w-full  sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-[42px] leading-[70px] font-bold text-primary text-center md:text-start font-Nunito ">
          Complete insight into your health in 5 steps.
        </h1>
      </div>
      <div className="relative pt-12 border-r-2 border-[#396E63] md:border-none md:pt-24 flex flex-col md:flex-row gap-8 md:gap-0 justify-around">
        {stepData.map((individualStep: individualStepData, index) => {
          const { title, height, width, image } = individualStep;
          return (
            <div
              key={index}
              className="flex relative   flex-col justify-between items-center gap-11 md:gap-16"
            >
              <div className="h-full flex  justify-center items-center">
                <Image
                  src={`/images/service/steps/${image ?? ""}.png`}
                  height={height}
                  width={width}
                  alt="step-1"
                />
              </div>
              <span className="block text-base font-Nunito font-semibold text-[#525252]">
                {title ?? ""}
              </span>
              <span className="h-8 absolute bottom-24 -right-4 md:right-auto md:bottom-12 z-10 hover:cursor-pointer w-8 bg-[#396E63] rounded-full flex justify-center items-center flex-shrink text-white text-[22px] leading-[30px]">
                {index + 1}
              </span>
            </div>
          );
        })}
        <div className="hidden md:block border border-[#396E63] absolute bottom-[3.5rem] bg-red-400 w-full"></div>
      </div>
    </div>
  );
}

export default HealthSteps;
