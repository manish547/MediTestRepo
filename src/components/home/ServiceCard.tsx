import Image from "next/image";
import React, { useState } from "react";

interface serviceCardPropData {
  name: string;
  image: string;
}
function ServiceCard({ name, image }: serviceCardPropData) {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div
      // bg-gradient-to-r from-teal-500 to-teal-900
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      className={`px-3 py-5 sm:px-6 sm:py-8 transition-all duration-500 text-[22px] leading-7 font-bold text-white rounded-xl sm:rounded-[20px] shadow-[20px_20px_40px_0px_#ABAFC74D]  w-full h-full max-h-[100px] max-w-[220px] sm:max-h-[124px] sm:max-w-[272px] capitalize flex gap-3 items-center hover:cursor-pointer 
      md:hover:scale-110 md:hover:transform md:hover:translate-x-[-30px] 
      ${hoverState
          ? "bg-gradient-to-b from-[#EAE3B6] to-[#C3996B]"
          : "bg-gradient-to-b from-[#419886] to-[#004842]"
        }
      md:hover:translate-y-[-40px]`}
    >
      <div
        className={`h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16 flex-shrink-0 ${hoverState ? "bg-[#E4EFE1] text-[#004842]" : "bg-[#80a287] text-white"
          } rounded-full p-3 sm:p-4`}
      >
        <Image
          src={`/images/icons/services/${hoverState ? `${image}-dark` : image ?? ""
            }.svg`}
          height="100"
          width="100"
          className="flex-shrink-0 w-full h-full"
          alt="health-screening"
        />
      </div>
      <span className={`text-xs sm:text-[14px] text-start sm:leading-8 md:text-base ${hoverState ? "text-[#004842]" : "text-white"}`}>
        {name ?? ""}
      </span>
    </div >
  );
}

export default ServiceCard;
