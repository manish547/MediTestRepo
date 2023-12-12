import React, { useState } from "react";

import CustomTabBar from "../common/CustomTabBar";

const travelData = [
  { index: 0, title: "Medical history collection, review, and summary" },
  { index: 1, title: "Language and cultural support for settling in" },
  { index: 2, title: "Remote consultation for treatment and budget planning" },
  { index: 3, title: "Helping with medical visa application" },
];

const tabData = [
  { label: "Pre departure", content: "Pre departure" },
  {
    label: "Receiving treatment in the UK",
    content: "Receiving treatment in the UK",
  },
  { label: "Aftercare management", content: "Aftercare management" },
];
function MedicalTravelService() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="md:py-8 px-5">
      <div className="z-50 flex flex-col items-center justify-center w-full pt-8 sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start font-Nunito">
          MEDii medical travel service
        </h1>
        <span className="block max-w-md text-xs font-medium text-center xs:text-sm md:text-base text-secondary font-Quicksand">
          We deliver quality healthcare service in clinics and at your doorstep
        </span>
      </div>
      <div className="flex flex-col w-full h-full justify-center items-center">
        <CustomTabBar
          tabData={tabData}
          selectedTab={activeTab}
          handleTabClick={handleTabClick}
        />

        <div className="flex-1 flex gap-5 md:gap-0 flex-col md:flex-row justify-center py-8 md:py-16 items-center md:items-stretch">
          <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-between text-[#3A7065] max-w-md shadow-[0px_4px_40px_0px_#ABAFC74D] rounded-[20px] md:rounded-[0px] md:rounded-l-[20px] flex-1">
            <div className="font-Nunito">
              <h2 className="md:text-[28px] md:text-lg md:leading-[40px] font-bold">
                {tabData[activeTab].content}
              </h2>
              <p className="text-[#004A42] text-sm sm:text-base pt-3">
                What will you do ?
              </p>
              <p className="text-[#004A42] text-sm sm:text-base py-6">
                It is suitable for healthy people to customize routine/special
                examinations. On the basis of the comprehensive package,
                preferred items and targeted screening can be added. More
                precise medical examination items require doctor's advice
              </p>
            </div>
          </div>
          <div className="p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#004A42] to-[#419886] text-white max-w-md shadow-[0px_4px_40px_0px_#ABAFC74D] rounded-[20px] md:rounded-[0px] md:rounded-r-[20px] flex-1 font-Nunito">
            {travelData.map((item, index) => {
              return (
                <div key={index} className="py-2">
                  <div className="flex gap-2">
                    <span className="rounded-full flex h-4 sm:h-6 w-4 sm:w-6 bg-[#E4EFE1] text-[#396E63] justify-center items-center flex-shrink-0 text-xs sm:text-base">
                      {index + 1 ?? 0}
                    </span>
                    <h3 className="text-xs sm:text-sm text-[#E9E9E9] max-w-[221px]">
                      {item.title ?? ""}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalTravelService;
