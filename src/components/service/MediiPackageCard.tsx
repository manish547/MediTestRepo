import Image from "next/image";
import React from "react";
interface medicardProps {
  title: string;
  isDark: boolean;
}
function MediiPackageCard({ title, isDark }: medicardProps) {
  return (
    <div
      className={`p-5 sm:max-w-[400px] md:max-w-full md:h-[200px] md:w-[190px] shadow-[10px_20px_70px_0px_#ABAFC74D] rounded-[20px] flex-col justify-center items-center ${isDark
        ? "bg-gradient-to-b from-[#004A42] to-[#419886]"
        : "bg-gradient-to-b from-[#EAE2B6] to-[#C3996B]"
        }`}
    >
      <div className="py-px flex justify-center items-center">
        <div
          className={`py-px h-8 w-8 rounded-full flex justify-center items-center ${isDark ? "bg-[#D2C5A0]" : "bg-[#396E63]"
            }`}
        >
          <Image
            src="/images/icons/white-right-icon.svg"
            height="11"
            width="15"
            alt="right"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <p
          className={`md:max-w-[151px] font-Nunito pt-4 md:pt-6 text-sm md:text-[16px] md:leading-[20px] font-medium text-center ${isDark ? "text-white" : "text-[#004A42]"
            }`}
        >
          {title ?? ""}
        </p>
      </div>
    </div>
  );
}

export default MediiPackageCard;
