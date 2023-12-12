import React from "react";

const remoteConsultantData = [
  {
    index: 0,
    title: "3000+ UK Hospital",
    description:
      "Hand-picking the most suitable field experts from renowned UK hospitals",
  },
  {
    index: 1,
    title: "Shortlisted Consultant",
    description: "Securing a rapid appointment with the shortlisted consultant",
  },
  {
    index: 2,
    title: "World-leading Medical Experts",
    description:
      "Consulting with world-leading medical experts in the comfort of your home",
  },
  {
    index: 3,
    title: "Professional Medical Translation",
    description:
      "Professional medical translation, optimising the quality of communication",
  },
];
function RemoteConsultant() {
  return (
    <div className="md:py-9 px-10">
      <div className="z-50 flex flex-col items-center justify-center w-full  sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start font-Nunito ">
          Remote medical consultations
        </h1>
        <span className="block max-w-md text-xs font-medium text-center xs:text-sm md:text-base text-secondary font-Quicksand">
          Our Bilingual medical team empowers you with insights of the
          healthcare choices and helps you fully understand your treatment plan
        </span>
      </div>
      <div className="py-16">
        <div className="flex justify-center gap-5 xl:gap-0 md:justify-between flex-wrap">
          {remoteConsultantData.map((item, index) => {
            const { title, description } = item;
            return (
              <div key={index} className="flex flex-col font-Nunito ">
                <span className="bg-gradient-to-b from-[#419886] to-[#004A42] rounded-full -10px_15px_30px_0px_#ABAFC74D] h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] md:h-[52px] md:w-[52px] flex text-lg xs:text-lg sm:text-[24px] md:text-[30px] leading-[41px] font-bold text-white justify-center items-center">
                  {index + 1 ?? 0}
                </span>
                <div className="max-w-[247px]">
                  <span
                    className={`text-base xs:text-lg sm:text-xl md:text-2xl py-3 md:py-6 font-bold text-[#396E63]  block ${title.length < 30 && "max-w-[200px]"
                      }`}
                  >
                    {title ?? ""}
                  </span>
                  <span className="text-xs xs:text-sm sm:text-base font-medium text-[#70798B] block">
                    {description ?? ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RemoteConsultant;
