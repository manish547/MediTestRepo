import React, { useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

const healthScreeningData = [
  {
    index: 0,
    name: "Royal Certified 1v1 Service",
    description:
      "Bespoke treatment plans, designed and recommended according to your individual needs.",
    image: "royal-certifieded",
    isDark: true,
    linkTo: "royal-certified",
  },
  {
    index: 1,
    name: "Cooperative With top private hospitals",
    description:
      "Consultations with experts with a click, accessing world-class care, wherever you are",
    image: "cooperative",
    isDark: false,
    linkTo: "private-hospital",
  },
  {
    index: 2,
    name: "Cost-effective services",
    description:
      "Bespoke treatment plans, designed and recommended according to your individual needs.",
    image: "cost-effective",
    isDark: true,
    linkTo: "cost-effective",
  },
  {
    index: 3,
    name: "Customize Health Screening",
    description:
      "Consultations with experts with a click, accessing world-class care, wherever you are",
    image: "customize-health",
    isDark: false,
    linkTo: "health-screening",
  },
  {
    index: 4,
    name: "Distinguished Service",
    description:
      "Consultations with experts with a click, accessing world-class care, wherever you are",
    image: "distinguished-service",
    isDark: true,
    linkTo: "distinguished",
  },
  {
    index: 5,
    name: "Bilingual Medical Reports",
    description:
      "Consultations with experts with a click, accessing world-class care, wherever you are",
    image: "bilingual-medical",
    isDark: false,
    linkTo: "medical-report",
  },
];
function HealthScreening() {
  const router = useRouter();

  const handleServiceClick = (name: string) => {
    router.push(`/services/${name}`);
  };
  return (
    <div className="md:py-8 flex flex-col gap-4 md:gap-16 px-5">
      <div className="z-50 flex flex-col items-center justify-center w-full pt-8 md:pt-7 sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start">
          MEDii Health screening
        </h1>
        <span className="block max-w-md font-medium text-center  text-xs  xs:text-sm md:text-base text-secondary font-Quicksand">
          We deliver quality healthcare service in clinics and at your doorstep
        </span>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 gap-5 pt-8 md:pt-0 md:py-0 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {healthScreeningData.map((item, index) => {
            const { name, description, image, isDark, linkTo } = item;
            return (
              <button
                onClick={() => handleServiceClick(`${linkTo}`)}
                key={index}
                className={`hover:scale-105 transition-all duration-300 rounded-[20px] p-6 bg-gradient-to-b h-full md:max-w-[377px] md:max-h-[215px] font-Nunito flex flex-col gap-6 shadow-[-10px_40px_70px_0px_#ABAFC74D] 
             ${isDark
                    ? "from-[#419886] to-[#004A42] text-white"
                    : "from-[#EAE2B6] to-[#C3996B] text-[#3A7065]"
                  }
             `}
              >
                <div className="flex items-start xs:items-center justify-between w-full">
                  <Image
                    src={`/images/icons/health-screening/${image}.svg`}
                    height="50"
                    width="50"
                    alt="medii-logo"
                  />

                  <span className="block xs:max-w-[80%] lg:w-full md:max-w-full text-sm xs:text-lg  md:text-base lg:text-xl font-bold text-end">
                    {name ?? ""}
                  </span>
                </div>
                <div
                  /* #3A7065 */
                  className={`text-xs xs:text-sm sm:text-base lg:text-sm font-medium lg:text-end h-full`}
                >
                  {description ?? ""}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HealthScreening;
