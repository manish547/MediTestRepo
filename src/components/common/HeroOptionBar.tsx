import React from "react";

import Image from "next/image";

const optionData = [
  {
    index: 0,
    title: "Pricing From £199",
    icon: "pound-icon",
    isStarVisible: false,
  },
  {
    index: 1,
    title: "5-7 working days",
    icon: "time-icon",
    isStarVisible: false,
  },
  {
    index: 2,
    title: "Patient Feedback",
    icon: "currency-icon",
    isStarVisible: true,
  },
];
interface heroOptionProps {
  isDark: boolean;
}
function HeroOptionBar({ isDark }: heroOptionProps) {
  return (
    <div className={`${isDark ? "bg-[#004A42] " : "bg-[#E4EFE1]"}  h-full`}>
      <div className="flex flex-col items-center justify-center h-full py-3 sm:flex-row md:py-0">
        {optionData.map((option, index) => {
          const { title, icon, isStarVisible } = option;
          return (
            <div
              key={index}
              className={`flex justify-center items-center flex-wrap  w-full h-full py-3 md:my-5 font-Quicksand ${
                index === optionData.length - 1
                  ? ""
                  : "sm:border-r sm:border-[#707070]"
              }
              ${isDark ? "text-white" : "text-[#70798B]"}`}
            >
              <div className="flex flex-col flex-wrap items-center justify-center gap-2 sm:flex-row">
                {/* icon */}
                <Image
                  src={`/images/services/${icon ?? ""}${
                    isDark ? "-dark" : ""
                  }.svg`}
                  height="34"
                  width="34"
                  alt="medii-logo"
                />
                <span className="block font-Quicksand ">{title ?? ""}</span>
                {isStarVisible && (
                  <div className="flex px-2">
                    {Array.from({ length: 5 }, () => null).map((v, i) => {
                      return (
                        <Image
                          key={i}
                          src="/images/home/star.svg"
                          height="25"
                          width="25"
                          alt="medii-logo"
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroOptionBar;
