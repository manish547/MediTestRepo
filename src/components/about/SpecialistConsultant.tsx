import React from "react";

import ConsaltantCard from "./ConsaltantCard";

const consultantData = [
  {
    index: 0,
    title: "Oncology",
    description: "In clinic/ Remote",
    icon: "oncology-icon",
  },
  {
    index: 1,
    title: "Gastroenterology",
    description: "In clinic/ Remote",
    icon: "gastroenterology-icon",
  },
  {
    index: 2,
    title: "Orthopeadics",
    description: "In clinic",
    icon: "orthopeadics-icon",
  },
  {
    index: 3,
    title: "Obstetrics & Gynae",
    description: "In clinic/ Remote",
    icon: "obstetrics-icon",
  },
  {
    index: 4,
    title: "Obstetrics & Gynae",
    description: "In clinic/ Remote",
    icon: "obstetrics-icon",
  },
  {
    index: 5,
    title: "Dermatology",
    description: "In clinic/ Remote",
    icon: "dermatology-icon",
  },
  {
    index: 6,
    title: "Dermatology",
    description: "In clinic/ Remote",
    icon: "dermatology-icon",
  },
  {
    index: 7,
    title: "MORE",
    description: "In clinic/ Remote",
    icon: "more-icon",
  },
];
function SpecialistConsultant() {
  return (
    <div className="md:py-8 px-5 font-Nunito ">
      <div className="z-50 flex flex-col items-center font-Nunito  justify-center w-full sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px]  font-bold text-primary text-center md:text-start">
          Specialist Medical Consultant
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 pt-8 pb-8 md:pt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {consultantData.map((dataItem, index) => {
          const { title, description, icon } = dataItem;
          return (
            <ConsaltantCard
              key={index}
              icon={icon}
              title={title}
              description={description}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center gap-7 font-Nunito ">
        <span className="text-base font-bold text-[#70798B] max-w-[800px] block text-center">
          With extended reach to more than 3000 consultants in the UK, MEDii is
          able to make multi-disciplinary referrals to help your medical needs:
          big or small, simple or complicated.
        </span>
        <span className="text-base font-bold text-cente text-[#70798B] max-w-[800px] block text-center">
          *The above is an inclusive but not an exhaustive list of medical
          consultants MEDii works with.
        </span>
      </div>
    </div>
  );
}

export default SpecialistConsultant;
