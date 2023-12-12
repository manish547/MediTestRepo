import React from "react";

import Image from "next/image";
import { NextRouter, useRouter } from "next/router";

const cardData = [
  {
    index: 0,
    title: "Personalised Care",
    description:
      "Bespoke treatment plans, designed and recommended according to your individual needs.",
    icon: "personal-care",
    isDark: true,
    linkTo: "https://medii-testing.clients.webcider.dev/services/health-check"
  },
  {
    index: 1,
    title: "Responsive Solutions",
    description:
      "Prompt specialist appointments, diagnostic tests and prescriptions. On time, every time.",
    icon: "responsive-solution",
    isDark: false,
    linkTo: "https://medii-testing.clients.webcider.dev/online-booking"
  },
  {
    index: 2,
    title: "Remote Consultations",
    description:
      "Consultations with experts with a click, accessing world-class care, wherever you are",
    icon: "remote-consultant",
    isDark: false,
    linkTo: "https://medii-testing.clients.webcider.dev/treatment-abroad"
  },
  {
    index: 3,
    title: "Home-visit Service",
    description:
      "Medical and healthcare service on the go, designated location and time, at your command.",
    icon: "home-visit",
    isDark: true,
    linkTo: "https://medii-testing.clients.webcider.dev/services"
  },
];
function Advantages() {
  const router: NextRouter = useRouter();
  return (
    <div className="py-8 sm:my-16 md:my-20 ">
      <div className="flex flex-col justify-between w-full gap-10 sm:mt-6 2xl:flex-row 2xl:mt-0 lg:pl-12">
        <div className="flex flex-col justify-center w-full">
          <span className="block w-full text-sm font-bold text-center md:text-start md:w-auto text-yellow_light font-Quicksand">
            Our Advantages
          </span>
          <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px]  font-bold text-primary text-center md:text-start font-Nunito ">
            How We Can Help
          </h1>
          <span className="block w-full text-xs font-medium text-center xs:text-sm md:text-base md:max-w-sm text-secondary md:text-start font-Quicksand">
            MEDii Health is dedicated to providing accessible private healthcare
            service timely.
          </span>
        </div>
        {/* <div className="flex flex-wrap justify-center w-full gap-3 items md:justify-start sm:items-stretch">
          {cardData.map((cardItem, i) => {
            const { isDark, title, description, icon } = cardItem;
            return (
              <div
                key={i}
                className={`relative shadow-[-10px_40px_70px_0px_#ABAFC74D] rounded-3xl max-w-xs p-6 text-white flex flex-col ${isDark
                  ? "bg-gradient-to-b from-[#419886] to-[#004A42]"
                  : "bg-gradient-to-b from-[#EAE2B6] to-[#C3996B]"
                  }`}
              >
                <div className="flex justify-between">
                  <div>
                    <Image
                      src={`/images/icons/advantages/${icon ?? ""}.svg`}
                      height="40"
                      width="40"
                      alt="medii-logo"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-end">{title ?? ""}</h3>
                </div>
                <span className="text-end text-[15px] pt-5 pb-8 font-medium">
                  {description ?? ""}
                </span>
                <Image
                  src="/images/icons/advantages/arrow-icon.svg"
                  height="30"
                  width="30"
                  alt="medii-logo"
                  className="absolute hover:animate-pulse hover:cursor-pointer bottom-4"
                />
              </div>
            );
          })}
        </div> */}
        {/* <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={linkTo ?? ""}
                      className=""
                    ></a> */}
        
        <div className="flex justify-center font-Nunito">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-2">
            {cardData.map((cardItem, i) => {
              const { isDark, title, description, icon, linkTo } = cardItem;
              return (
                <div
                  key={i}
                  onClick={() => router.push(linkTo)}
                  className={`relative max-w-md md:max-w-full shadow-[-10px_40px_70px_0px_#ABAFC74D] rounded-3xl p-6 cursor-pointer ${isDark
                    ? 'text-white' :'text-[#3A7065]' } flex flex-col ${isDark
                    ? "bg-gradient-to-b from-[#419886] to-[#004A42]"
                    : "bg-gradient-to-b from-[#EAE2B6] to-[#C3996B] "
                    }`}
                >
                  <div className="flex justify-between">
                    <div>
                      <Image
                        src={`/images/icons/advantages/${icon ?? ""}.svg`}
                        height="40"
                        width="40"
                        alt="medii-logo"
                      />
                    </div>
                    <h3 className="text-lg font-bold sm:text-xl md:text-2xl text-end font-Nunito">{title ?? ""}</h3>
                  </div>
                  <span className={` text-xs text-center font-Nunito xs:text-end xs:text-[13px] md:text-[15px] pt-5 pb-8 font-medium ${isDark ? "text-white" : "text-[#525252]"}`}>
                    {description ?? ""}
                  </span>
                  
                  <Image
                    src="/images/icons/advantages/arrow-icon.svg"
                    height="30"
                    width="30"
                    alt="medii-logo"
                    className="absolute hover:animate-pulse hover:cursor-pointer bottom-4"
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}

export default Advantages;
