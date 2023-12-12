import React from "react";

import Image from "next/image";

const hospitalData = [
  { index: 0, image: "london-bridge-hospital-white" },
  { index: 1, image: "imperial-private-healthcare-white" },
  { index: 2, image: "portland-hospital-white" },
  { index: 3, image: "moorfields-private-eye-hospital-white" },
];

const serviceData = [
  {
    index: 0,
    image: "cart-icon",
    title: "Strong follow-up service capabilities",
  },
  { index: 1, image: "global-search-icon", title: "Arrange Medical" },
  {
    index: 0,
    image: "email-icon",
    title: "Believe in Evidence-Based Medicine",
  },
];
function AdsPoster() {
  return (
    <div className="md:py-5 px-5">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <Image
            src="/images/services/cheer-up-poster.png"
            height="624"
            width="1111"
            alt="cheer-up-poster"
          />
          <div className="flex flex-col gap-2 mb-6 lg:mb-2 font-Nunito">
            <div className="p-8 md:p-5 lg:p-10 border md:absolute top-1/2 left-28 md:left-5 lg:left-28 border-[#E6E6E9] md:top-52 lg:top-1/2 backdrop-blur-6 bg-white rounded-xl shadow-btn-shadow">
              <div className="flex text-[#004A42] flex-col gap-4  justify-center items-center">
                <h3 className="sm:text-[20px] md:text-[28px] font-bold">Suitable is the best</h3>
                <Image
                  src="/images/services/calendar-icon.svg"
                  height="49"
                  width="52"
                  alt="calendar"
                  className="h-[35px] w-[35px] sm:h-[49px] sm:w-[52px]"
                />
                <span className="font-medium text-sm md:text-base">5-7 business days to report</span>
              </div>
            </div>
            <div className="p-10 md:p-5 lg:p-10 border md:absolute top-[15%] right-28 md:-right-3 lg:right-28 border-[#E6E6E9] backdrop-blur-6 bg-white rounded-xl flex flex-col gap-8 shadow-btn-shadow">
              {serviceData.map((item, index) => {
                const { image, title } = item;
                return (
                  <div
                    key={index}
                    className="flex text-[#3A7065] md:max-w-[250px] gap-4 justify-start items-center"
                  >
                    <Image
                      src={`/images/services/${image ?? ""}.svg`}
                      height="40"
                      width="40"
                      alt={image}
                      className="hover:animate-pulse cursor-pointer"
                    />
                    <span className="font-bold text-base tracking-[0.2px]">
                      {title ?? ""}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative  container text-white max-w-[970px] bg-gradient-to-b from-[#419886] to-[#004A42] p-8 xs:p-10 sm:p-14 md:p-16 rounded-2xl flex flex-col justify-center items-center shadow-btn-shadow -translate-y-2">
          <h2 className="text-lg xs:text-xl sm:text3xl md:text-4xl font-bold max-w-[600px] text-center md:leading-[54px] font-Nunito">
            We work with best private hospitals in the UK
          </h2>
          <div className="flex flex-col items-center justify-between w-full gap-7 xs:gap-7 sm:gap-8 md:gap-8 md:flex-row md:px-16 pt-8 md:pt-11 md:flex-wrap lg:flex-nowrap">
            {hospitalData.map((imageItem, index) => {
              return (
                <Image
                  key={index}
                  src={`/images/icons/hospital-names/${imageItem.image}.svg`}
                  height="100"
                  width="100"
                  alt="medii-logo"
                  className="w-1/2 sm:w-1/3 md:h-auto md:w-auto"
                />
              );
            })}
          </div>
          <div className="bg-gradient-to-b from-[#C3996B] to-[#EAE2B6] h-3 rounded-b-[20px] w-full absolute left-0 bottom-0"></div>
        </div>
      </div>
    </div>
  );
}

export default AdsPoster;
