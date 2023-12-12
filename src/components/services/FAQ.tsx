import React, { useState } from "react";
import Image from "next/image";

import CustomTabBar from "../common/CustomTabBar";

const faqData = [
  {
    index: 0,
    title: "How can I book MEDii Health Services?",
    description:
      "All the bookings need to be processed online on our website.Direct Link: https://booking.mediihealth.com We don’t accept walk-in, or payment at the clinic for the testing.",
    isOpen: false,
  },
  {
    index: 1,
    title: "How much in advance shall I book for the covid test?",
    description:
      "All the bookings need to be processed online on our website.Direct Link: https://booking.mediihealth.com We don’t accept walk-in, or payment at the clinic for the testing.",
    isOpen: false,
  },
  {
    index: 2,
    title: "How soon is the test result issued",
    description:
      "All the bookings need to be processed online on our website.Direct Link: https://booking.mediihealth.com We don’t accept walk-in, or payment at the clinic for the testing.",
    isOpen: false,
  },
  {
    index: 3,
    title: "What if my fight is cancelled or changed?",
    description:
      "All the bookings need to be processed online on our website.Direct Link: https://booking.mediihealth.com We don’t accept walk-in, or payment at the clinic for the testing.",
    isOpen: false,
  },
];

const tabData = [
  { label: "All", content: "All" },
  {
    label: "Testing Process",
    content: "Testing Process",
  },
  { label: "Change & Refund", content: "Change & Refund" },
  { label: "Travel to China", content: "Travel to China" },
];
function FAQ() {
  const [allFAQData, setAllFAQData] = useState(faqData);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleAccordionToggle = (selectedIndex: number) => {
    setAllFAQData((prevFAQData) => {
      const updatedFAQData = prevFAQData.map((dataItem) => {
        if (dataItem.index === selectedIndex) {
          return {
            ...dataItem,
            isOpen: !dataItem.isOpen,
          };
        }
        return dataItem;
      });
      return updatedFAQData;
    });
  };
  return (
    <div className="px-5">
      <div className="z-50 flex flex-col items-center justify-center w-full md:pt-4 sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start font-Nunito">
          Frequently asked questions
        </h1>
        <span className="block max-w-md font-medium text-center  text-xs  xs:text-sm md:text-base text-secondary font-Quicksand">
          We deliver quality healthcare service in clinics and at your doorstep
        </span>
      </div>
      <div className="flex flex-col items-center mt-2 justify-center w-full h-full">
        <CustomTabBar
          tabData={tabData}
          selectedTab={activeTab}
          handleTabClick={handleTabClick}
        />
        <div className="w-full flex flex-col gap-4 max-w-[1000px] font-Nunito py-8 md:py-16 mx-auto">
          {allFAQData.map((dataItem, i) => {
            const { title, description, index, isOpen } = dataItem;
            return (
              <button
                key={i}
                type="button"
                className={`flex flex-col justify-between items-start w-full py-4 px-7 rounded-md  text-gray-700  focus:outline-none transition-all duration-150 border-none outline-none ${isOpen ? "bg-[#E4EFE1]" : "bg-[#F8F8F8]"
                  }`}
                onClick={() => handleAccordionToggle(index)}
              >
                <div className="flex justify-between w-full">
                  <span className="block text-start text-sm sm:text-lg font-bold text-[#004A42]">
                    {title ?? ""}
                  </span>
                  {!isOpen ? (
                    <Image
                      src="/images/icons/chevron-right.svg"
                      height="6"
                      width="10"
                      alt="chevron-right"
                      className="flex-shrink h-5 mt-1.5 ml-4"
                    />
                  ) : (
                    <Image
                      src="/images/icons/chevron-right.svg"
                      height="6"
                      width="10"
                      alt="chevron-right"
                      className="rotate-90 h-5 mt-1.5 ml-4"
                    />
                  )}
                </div>
                {/* Accordion content */}
                {isOpen && (
                  <p className="text-sm md:text-base pt-3 text-[#3C3C43D9] block text-start max-w-[90%]  md:max-w-[70%]" style={{ wordBreak: 'break-word' }} >
                    {description ?? ""}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
