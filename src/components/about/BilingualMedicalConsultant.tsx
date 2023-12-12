import React, { useState } from "react";

import Image from "next/image";

const teamData = [
  { index: 0, image: "team-member-1", description: "Dr TASUKU HONJO" },
  { index: 1, image: "team-member-2", description: "Dr SHINYA YAMANAKA" },
  { index: 2, image: "team-member-3", description: "Dr Yun Zou" },
  { index: 3, image: "team-member-4", description: "Dr Mao Asada " },
  { index: 4, image: "team-member-5", description: "Dr AKIRA ENDO" },
  { index: 5, image: "team-member-6", description: "Dr Mizuki Watanabe " },
];

function BilingualMedicalConcultant() {
  const [hoverState, setHoverState] = useState(
    teamData.map((v) => v.index === 2)
  );
  const [selectedData, setSelectedData] = useState(teamData[2]);
  const [hover, sethover] = useState(false);

  const handleHover = (index: number) => {
    setHoverState((prevState) =>
      prevState.map((value, i) => (i === index ? true : false))
    );
    setSelectedData(teamData[index]);
    sethover(true);
  };

  const handleHoverEnd = () => {
    sethover(false);
    setHoverState(teamData.map((v) => v.index === 2));
    setSelectedData(teamData[2]);
  };
  return (
    <div className="md:py-8 px-7">
      <div className="z-50 flex flex-col items-center justify-center w-full sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className=" font-Nunito text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start ">
          MEDii Bilingual Medical Consultant
        </h1>
        <span className="block max-w-[430px] font-medium text-center  text-xs  xs:text-sm md:text-base text-secondary font-Quicksand">
          Our Bilingual medical team empowers you with insights of the
          healthcare choices and helps you fully understand your treatment plan
        </span>
      </div>
      <div className="py-2 my-8 md:my-16">
        <div className="flex flex-col gap-8 transition-all duration-700 lg:gap-0 lg:flex-row">
          <div
            className={`w-full grid grid-cols-1 gap-4  md:grid-cols-2 xl:grid-cols-3 justify-items-center`}
          >
            {teamData.map((teamMember, index) => {
              const { image } = teamMember;
              return (
                <div
                  key={index}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleHoverEnd}
                >
                  <Image
                    key={index}
                    src={`/images/about/bilingual-concultant-team/${image ?? ""
                      }.png`}
                    height="380"
                    width="300"
                    alt="team-member"
                    className={`rounded-[20px] hover:cursor-pointer transition-all duration-500 ${hoverState[index]
                      ? "sm:-translate-x-10 lg:-translate-y-10 xl:-translate-x-0 2xl:-translate-x-16 md:-translate-y-10 scale-110  pt-2 bg-gradient-to-l from-[#C3996B] to-[#EAE2B6] shadow-[-15px_30px_60px_0px_#0814204D]"
                      : ""
                      }`}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col font-Nunito items-center justify-center w-full gap-4 lg:w-1/3">
            {/* {selectedData.description} */}
            <div className="bg-gradient-to-b md:max-h-[520px] font-Nunito lg:max-w-[280px] rounded-[20px] from-[#004A42] to-[#419886] w-full h-full px-8 py-6">
              <div className="text-white">
                <span className="block text-sm font-Quicksand ">03/08</span>
                <h2 className="py-2 text-2xl font-bold">
                  {selectedData.description}
                </h2>
                <span className="block text-base font-medium">
                  Rheumatologist
                </span>
                <span className="block text-base font-medium ">
                  GMC No.: 7271905
                </span>
                <p className="block text-base py-8 lg:max-w-[206px]">
                  Dr. Yun Zou is currently an experienced Rheumatologist, having
                  worked at numerous hospitals across the West Midlands. She is
                  a member of the Royal College of Medicine (MRCP). Fluent in
                  both Chinese and English, she brings accurate medical
                  explanations and first-class medical support to MEDii
                  patients.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-5 py-5">
              <div className="flex items-center gap-3">
                <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary shadow-[-5px_10px_30px_0px_#ABAFC780]">
                  <Image
                    src="/images/home/clients/next-btn.svg"
                    height="15"
                    width="15"
                    alt="next"
                    className="hover:animate-pulse hover:cursor-pointer"
                  />
                </button>
                <button className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E4EFE1] shadow-[-5px_10px_30px_0px_#ABAFC780]">
                  <Image
                    src="/images/home/clients/prev-btn.svg"
                    height="15"
                    width="15"
                    alt="prev"
                    className="hover:animate-pulse hover:cursor-pointer"
                  />
                </button>
              </div>
              <span className="text-base block text-[#004A42] font-medium ">
                NEXT PAGE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BilingualMedicalConcultant;
