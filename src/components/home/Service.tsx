import Image from "next/image";
import React from "react";

import ServiceCard from "./ServiceCard";

const serviceData = [
  { index: 0, name: "Covid-19 Travel Test", image: "covid-test" },
  { index: 1, name: "Health Screening", image: "health-screening" },
  { index: 2, name: "Diagnosic Test", image: "dignosis-test" },
  { index: 3, name: "Doctor’s Appointment", image: "doctors-appointment" },
  { index: 4, name: "Doctor Traning", image: "doctor-training" },
  { index: 5, name: "Treatment Abroad", image: "treatment-abroad" },
  { index: 6, name: "Health & Wellbeing", image: "health" },
  { index: 7, name: "Members Scheme", image: "members-scheme" },
];
function Service() {
  return (
    <div className="relative">
      <div className="z-50 flex flex-col items-center justify-center w-full pt-5 xs:pt-8 sm:pt-10 md:pt-[59px] sm:mt-auto">
        <span className="text-xs font-bold sm:text-sm text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start font-Nunito">
          Our Services
        </h1>
        <span className="block max-w-md text-xs font-medium text-center xs:text-sm md:text-base text-secondary font-Quicksand">
          We deliver quality healthcare service in clinics and at your doorstep
        </span>
      </div>
      <div className="flex justify-center w-full">
        <div className="relative z-50 grid grid-cols-1 gap-6 md:px-5 mt-14 card-data xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mx-auto md:max-w-[1200px]">
          <Image
            src={`/images/home/small-circles.svg`}
            height="100"
            width="100"
            className="absolute -top-10 sm:-top-20 -left-0 h-7 w-6 sm:h-[40px] sm:w-[35px] md:h-[41px] md:w-[27px]"
            alt="circle"
          />
          {serviceData.map((serviceCardDetail, index) => {
            const { name, image } = serviceCardDetail;
            return <ServiceCard key={index} name={name} image={image} />
          })}
        </div>
      </div>
      {/* <div className="absolute top-36 -left-44 "> */}
      <div className="absolute top-36 -left-44 ">
        <Image
          src={`/images/home/service-blob.png`}
          height="100"
          width="100"
          className="w-[20rem] h-[25rem] md:w-[20rem] md:h-[33rem] -z-10"
          alt="health-screening"
        />
      </div>
    </div>
  );
}

export default Service;
