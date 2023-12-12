import React from "react";
import Image from "next/image";

interface BannerProps {
  title: string,
  description: string;
  buttonName: string;
  isExpandImage?: boolean
}
function Banner({ title = "", description = "", buttonName = "", isExpandImage = false }: BannerProps) {
  return (
    <div className={`flex font-Nunito 2xl:px-8 px-5 sm:mx-3 2xl:mx-0 lg:px-0 flex-col gap-16 md:gap-0 shadow-[0px_3px_50px_0px_rgba(0, 0, 0, 0.10)] justify-center lg:flex-row  ${isExpandImage ? "pt-5 py-3" : "pt-14 md:py-14"}`}>
      <div className={`px-5 font-Nunito xs:px-10 w-full text-white py-5 xs:py-11 bg-gradient-to-r from-[#419886] to-[#004A42] rounded-[20px] flex flex-col justify-around ${isExpandImage ? "max-w-full" : "max-w-xl"} shadow-btn-shadow`}>
        <h1 className="text-[10px] xxs:text-xl md:text-3xl lg:text-5xl font-bold xxs:leading-[30px] md:leading-[40px] lg:leading-[58px] ]">
          {title || ""}
        </h1>
        <h3 className="text-sm xxs:text-base py-1.5 md:py-5 max-w-[318px] my-2  font-medium leading-5 xxs:leading-6 md:p-auto">
          {description || ""}
        </h3>
        <button className="flex gap-3 shrink-0 justify-center items-center bg-primary border-none py-0.5 xxs:py-2 px-8 xxs:px-16 rounded-full text-[14px] xxs:text-[16px] font-bold text-white bg-gradient-to-r w-20 xss:w-36 from-[#F4B723] to-[#F9CB44]  capitalize shadow-btn-shadow font-Quicksand ">
          {buttonName || ""}
        </button>
      </div>
      <div className="w-full -translate-y-8 lg:translate-y-0 lg:-translate-x-8 -z-10">
        <Image
          src="/images/home/banner.png"
          height="318"
          width="772"
          alt="banner"
          className="rounded-[20px] h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
