import React from "react";

import MediiPackageCard from "./MediiPackageCard";

function WhyChooseMedii() {
  return (
    <div className="md:py-9 px-5 ">
      <div className="flex justify-between flex-col-reverse gap-6 md:gap-10 lg:flex-row">
        <div className="flex-grow  flex-col lg:flex-row flex px-10 md:px-0 items-center pt-4 md:pt-20">
          <div className="flex flex-col  items-center md:flex-row gap-4 w-full md:w-auto ">
            <div className="flex w-full h-full flex-col items-center justify-center md:pt-20">
              <MediiPackageCard
                title="Access to 3000+ UK medical consultants"
                isDark={true}
              />
            </div>
            <div className="flex flex-col gap-4">
              <MediiPackageCard
                title="Bilingual medical advisory teams ensuring highest standards at the core"
                isDark={true}
              />
              <MediiPackageCard
                title="An experienced triage and services team"
                isDark={false}
              />
            </div>
            <div className="flex flex-col gap-4 md:-translate-y-20">
              <MediiPackageCard
                title="Accredited and approved by premium hospitals and clinics"
                isDark={false}
              />
              <MediiPackageCard
                title="Visiting services which improve efficiency and offer a personalised experience"
                isDark={true}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-[41%] ">
          <span className="block w-full text-sm font-bold text-center lg:text-start md:w-auto text-yellow_light font-Quicksand">
            Our Advantages
          </span>
          <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] text-primary text-center lg:text-start font-Nunito">
            Why choose the MEDii?
          </h1>
          <span className="block w-full text-xs font-medium text-center xs:text-sm md:text-base lg:max-w-md text-secondary lg:text-start font-Quicksand">
            The UK is a world leader in the healthcare, life sciences and
            bio-economy cluster, finding solutions to the world’s biggest
            challenges. The UK offers:
          </span>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseMedii;
