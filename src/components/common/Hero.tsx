import React, { useState } from "react";

import HeroOptionBar from "./HeroOptionBar";
import { isHTMLFormatted } from "@/api/PageContentApi";

interface HeroProps {
  image: string;
  title: string;
  description: string;
  isNavigator: boolean;
  isDark: boolean;
  isPricing?: boolean;
}
function Hero({ image, title, description, isNavigator, isDark, isPricing = false }: HeroProps) {

  return (
    <div>
      <div
        className="relative bg-cover bg-center w-full h-[398px] "
        style={{
          backgroundImage: `url('/images/${image ?? ""}.png')`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full md:h-auto md:w-auto md:absolute md:bottom-10 md:right-16 xl:right-28">
          <div className="py-4 xxs:py-8 px-5 xs:px-11 bg-white rounded-[20px] m-5 md:m-auto shadow-hero-shadow w-full sm:max-w-[478px] relative">
            <h2 className="text-[#3A7065] font-Nunito text-xl xs:text-2xl text-center sm:text-start sm:text-3xl md:text-[42px] md:leading-[47px] font-bold">
              {title ?? ""}
            </h2>
            {isHTMLFormatted(description) ? <div dangerouslySetInnerHTML={{ __html: (description) ?? "" }} /> : <span className="block text-xs text-center sm:text-start sm:text-sm md:text-base 
            font-medium text-[#70798B] font-Quicksand py-2">
              {description ?? ""}
            </span>}
            {/*   */}

            {isNavigator && (
              <div className="flex justify-center sm:justify-end pt-3">
                <button className="flex w-36 gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand">
                  Booking
                </button>
              </div>
            )}
            <div className="bg-gradient-to-b from-[#C3996B] to-[#EAE2B6] h-3 rounded-b-[20px] w-full absolute left-0 bottom-0"></div>
          </div>
        </div>
      </div>
      {isPricing && <HeroOptionBar isDark={isDark} />}
    </div>
  );
}

export default Hero;
