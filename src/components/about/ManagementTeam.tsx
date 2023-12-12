import React, { useRef, useState } from "react";
import Image from "next/image";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamData = [
  {
    index: 0,
    name: "Lynzi WANG",
    designation: "Medical International Market Expert",
    description:
      "Lynzi is experienced in the private healthcare sector, helping UK hospitals to perfect the services that meet the expectations of the needs of Chinese international patients. Years of industry experience in multinational corporations and the wide connection in the healthcare sector equipped her with the ability of driving MEDii’s business development.",
    image: "team-member-1",
  },
  {
    index: 1,
    name: "Melten Doe",
    designation: "Market Expert",
    description:
      "Melten is experienced in the private healthcare sector, helping UK hospitals to perfect the services that meet the expectations of the needs of Chinese international patients. Years of industry experience in multinational corporations and the wide connection in the healthcare sector equipped her with the ability of driving MEDii’s business development.",
    date: "2022.04.05",
    image: "team-member-2",
  },
  {
    index: 2,
    name: "Alper Rogers",
    designation: "Medical International",
    description:
      "Alper is experienced in the private healthcare sector, helping UK hospitals to perfect the services that meet the expectations of the needs of Chinese international patients. Years of industry experience in multinational corporations and the wide connection in the healthcare sector equipped her with the ability of driving MEDii’s business development.",
    date: "2022.04.05",
    image: "team-member-3",
  },
  {
    index: 3,
    name: "Alper ",
    designation: "Medical International",
    description:
      "Alper is experienced in the private healthcare sector, helping UK hospitals to perfect the services that meet the expectations of the needs of Chinese international patients. Years of industry experience in multinational corporations and the wide connection in the healthcare sector equipped her with the ability of driving MEDii’s business development.",
    date: "2022.04.05",
    image: "team-member-3",
  },
];

function ManagementTeam() {
  const sliderRef = useRef<Slider>(null);
  const [currentData, setCurrentData] = useState(teamData[teamData.length - 1]);
  const { name, description, designation } = currentData;

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    class: "management-team",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleAfterChange = (index: number) => {
    if (index !== teamData.length - 1) {
      setCurrentData(teamData[Math.abs(index - 2)]);
    } else {
      setCurrentData(teamData[index]);
    }
  };

  return (
    <div className="md:py-8">
      <div className="z-50 flex flex-col items-center justify-center w-full sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-Nunito leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start  ">
          Management Team
        </h1>
        <span className="block max-w-md text-xs xs:text-sm md:text-base font-medium text-center text-secondary font-Quicksand">
          Our vision is to create a medical ecosystem in which everyone can
          access bespoke healthcare service whenever and wherever
        </span>
      </div>
      <div className="flex  flex-col-reverse px-20 py-10 lg:flex-row font-Nunito">
        <div className="flex-1 relative w-full lg:w-[50%]  h-full">
          <div className="hidden absolute -top-7 2xl:top-0 right-[35%] lg:right-[41%] 2xl:right-[43%] md:flex">
            <span className="font-Quicksand text-base font-medium text-center rotate-90 max-w-[50px] text-[#70798B]">
              {name ?? ""}
            </span>
            <Image
              src={`/images/home/small-circles.svg`}
              height="100"
              width="100"
              className="w-6 h-10"
              alt="circle"
            />
          </div>
          <div className="flex flex-col justify-end lg:w-[50vw] ">
            <Slider
              afterChange={(index) => {
                handleAfterChange(index);
              }}
              {...settings}
              ref={sliderRef}
              >
              {teamData.map((client, index) => {
                const { image } = client;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 relative ${currentData.index === index
                      ? "scale-150 shadow-[-15px_30px_60px_rgba(8, 20, 32, 0.301961)]"
                      : ""
                      }`}
                  >
                    <div className="relative ">
                      <Image
                        src={`/images/about/team/${image ?? ""}.png`}
                        height="230"
                        width="190"
                        alt={image ?? ""}
                        className={`max-h-[230px] max-w-[190px] my-16 mx-auto rounded-[16px] shadow-[-15px_30px_60px_rgba(8, 20, 32, 0.301961)] ${currentData.index === index &&
                          "pb-1.5 bg-gradient-to-l from-[#C3996B] to-[#EAE2B6]"
                          }`}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="flex flex-col font-Nunito justify-start gap-5 w-full lg:w-[40%] items-start">
          <div id="current-slide-data  ">
            <h2 className="text-[#004A42] font-bold text-3xl tracking-[0.2px]">
              {name ?? ""}
            </h2>
            <span className="text-[#D2C5A0]  block py-3 text-base font-bold">
              {designation ?? ""}
            </span>
            <p className="text-[#70798B] text-base md:max-w-[400px]">
              {description ?? ""}
            </p>
            <p className="text-[#70798B] text-base py-2 lg:max-w-[400px]">
              Promoting innovation in the private healthcare sector and
              improving Chinese patients’ medical journey is what drove Lynzi to
              found MEDii Health.
            </p>
          </div>
          <div className="flex items-center justify-start w-full gap-3">
            <div className="flex items-center justify-start gap-3 ">
              <button
                onClick={goToPrev}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-primary shadow-[-5px_10px_30px_rgba(171, 175, 199, 0.51)]"
              >
                <Image
                  src="/images/home/clients/next-btn.svg"
                  height="15"
                  width="15"
                  alt="next"
                  className="hover:animate-pulse hover:cursor-pointer"
                />
              </button>
              <button
                onClick={goToNext}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E4EFE1] shadow-[-5px_10px_30px_rgba(171, 175, 199, 0.51)]"
              >
                <Image
                  src="/images/home/clients/prev-btn.svg"
                  height="15"
                  width="15"
                  alt="prev"
                  className="hover:animate-pulse hover:cursor-pointer"
                />
              </button>
            </div>
            <div className="flex items-center justify-between w-full h-full md:hidden">
              <span className="font-Quicksand text-base font-medium text-center text-[#70798B]">
                {name ?? ""}
              </span>
              <Image
                src={`/images/home/small-circles.svg`}
                height="100"
                width="100"
                className="w-6 h-10"
                alt="circle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementTeam;
