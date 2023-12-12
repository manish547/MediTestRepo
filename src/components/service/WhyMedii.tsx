import React from "react";

import Image from "next/image";

interface whyMediProps {
  title: string;
  description: string,
  isMembershipPage?: boolean
}
function WhyMedii({ title, description, isMembershipPage = false }: whyMediProps) {
  return (
    <div className="md:py-5 px-5 sm:px-0 md:px-5">
      <div className="z-50 flex flex-col items-center justify-center w-full  sm:mt-auto">
        <span className="text-xs md:text-sm font-bold text-yellow_light font-Quicksand">
          {title || ""}
        </span>
        <h1 className="text-[18px] sm:text-[30] md:text-[35px] lg:text-[42px] leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] font-bold text-primary text-center md:text-start font-Nunito ">
          {description || ""}
        </h1>
      </div>
      <div className="flex justify-center font-Nunito w-full h-full">
        <div className="my-7 flex flex-col md:flex-row gap-5 md:gap-0 w-full justify-center items-center max-w-5xl h-full">
          <div className="h-full w-full flex justify-center items-center">
            <Image
              src="/images/why-medii-poster.png"
              height="476"
              width="558"
              alt="medii-logo"
              className="rounded-[30px]"
            />
          </div>
          <div className={`h-full w-full font-Nunito relative md:-translate-x-16 rounded-[40px] pb-2 bg-gradient-to-l from-[#C3996B] to-[#EAE2B6] ${isMembershipPage && "max-w-[480px]"}`}>
            <div
              className="px-6 py-6 xs:py-12 xs:px-9  bg-gradient-to-b from-[#004A42] to-[#419886] text-white rounded-[30px] font-medium text-xl
            "
            >
              <div className="pt-1 pb-6">
                <Image
                  src="/images/icons/quate-dark.svg"
                  height="19"
                  width="22"
                  alt="quate"
                />
              </div>
              <span className={`block ] text-xs xs:text-sm ${isMembershipPage ? "xs:text-base md:text-[22px]" : "xs:text-sm md:text-base"}`} style={{ lineHeight: "30px" }}>
                She hadn’t smoked for 40 years. It came as a shock. Luckily, she
                was able to have an operation in time. And I turned out to have
                a large cyst on my liver. That was dealt with a few years later.
              </span>
              <div className="py-6">
                {
                  <div className="flex ">
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
                }
              </div>
              <span className={`block text-xs  xs:text-sm  ${isMembershipPage ? "sm:text-base md:text-[22px]" : "sm:text-sm md:text-base"}`}>Mdad ADSDS</span>
            </div>
            {/*  <div className="bg-gradient-to-b from-[#C3996B] to-[#EAE2B6] h-6 rounded-b-[30px] w-full absolute left-0 bottom-0"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyMedii;
