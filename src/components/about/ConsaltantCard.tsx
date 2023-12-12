import React, { useState } from "react";

import Image from "next/image";

interface consultantProps {
  icon: string;
  title: string;
  description: string;
}
function ConsaltantCard({ icon, title, description }: consultantProps) {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      className={`hover:cursor-pointer py-11 w-[300px] rounded-[20px] flex flex-col justify-center items-center text-white h-[230px] shadow-[-10px_40px_70px_0px_#ABAFC74D]
    ${hoverState
          ? "bg-[#E4EFE1] transition-all duration-500 ease-in-out"
          : "bg-gradient-to-b from-[#419886] to-[#004A42] transition-all duration-500 ease-in-out"
        }
  `}

    >
      {hoverState ? (
        <div className="text-[#004A42] flex flex-col justify-between transition-all duration-500 ease-in-out">
          <div className="py-2">
            <span className="text-lg font-bold block text-center">
              Dr Syed Ahsan
            </span>
            <span className="block text-center">
              (St Bartholomew's Hospital)
            </span>
          </div>
          <div className="py-2">
            <span className="text-lg font-bold block text-center">
              Dr Mark Westwood
            </span>
            <span className="block text-center">
              (St Bartholomew's Hospital)
            </span>
          </div>
          <div className="py-2">
            <span className="text-lg font-bold block text-center">
              Dr Syed Ahsan
            </span>
            <span className="block text-center">
              (St Bartholomew's Hospital)
            </span>
          </div>
        </div>
      ) : (
        <>
          <Image
            src={`/images/about/consultant-icons/${icon ?? ""}.svg`}
            height="50"
            width="50"
            alt="medii-logo"
            className="transition-all duration-500 ease-in-out"
          />
          <h2 className="text-xl font-bold py-4 transition-opacity duration-500 ease-in-out">
            {title ?? ""}
          </h2>
          <span className="text-lg transition-all duration-500 ease-in-out">
            {description ?? ""}
          </span>
        </>
      )}
    </div>
  );
}

export default ConsaltantCard;
