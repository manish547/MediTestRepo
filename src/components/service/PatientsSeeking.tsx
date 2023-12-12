import React, { useState, useRef } from "react";

import Image from "next/image";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    index: 0,
    image: "mobile-slide-image-1",
    description: "Personalised and PremiumMedical Experience in the UK",
  },
  {
    index: 1,
    image: "mobile-slide-image-2",
    description: "Personalised Experience in the UK",
  },
  {
    index: 2,
    image: "mobile-slide-image-3",
    description: "PremiumMedical Experience in the UK",
  },
];
const patientSeekingData = [
  {
    index: 0,
    name: "Renowned Experts",
    icon: "renowned-expert-icon",
    description:
      "Diagnosis and reviews of complex conditions by world-leading experts",
    isDark: true,
  },
  {
    index: 1,
    name: "Personalised Care",
    icon: "personalised-care-icon",
    description:
      "Bespoke, detailed management strategies that are tailored to the unique individual case",
    isDark: false,
  },
  {
    index: 2,
    name: "Advanced Treatment",
    icon: "advanced-treatment-icon",
    description:
      "Latest medical, surgical, and therapeutic options with the world’s most advanced treatment",
    isDark: false,
  },
  {
    index: 3,
    name: "Holistic Approach",
    icon: "holistic-approach-icon",
    description:
      "Multidisciplinary, cross-specialty treatment plans using a holistic approach to achieve the best results",
    isDark: true,
  },
];

function PatientsSeeking() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true, // disable pagination
    infinite: true,
    speed: 500,
    autoplay: true, // enable auto slide
    autoplaySpeed: 5000, // set auto slide duration to 3 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // disable navigator
    customPaging: function (i: number) {
      return (
        <div
          className={`h-1 w-[22px] rounded-lg absolute bottom-14 ${i === currentSlide ? "bg-[#004A42]" : "bg-[#ABAFC7]"
            }`}
        />
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleAfterChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="md:py-9 px-3">
      <div className="z-50 flex flex-col items-center justify-center w-full  sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start font-Nunito">
          For patients seeking:
        </h1>
        <span className="block max-w-md text-xs font-medium text-center xs:text-sm md:text-base text-secondary font-Quicksand">
          Our Bilingual medical team empowers you with insights of the
          healthcare choices and helps you fully understand your treatment plan
        </span>
      </div>
      <div className="py-16">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-8 md:gap-0">
          <div className="flex lg:flex-grow w-full justify-center ">
            <div className="h-full rounded-[30px] pl-4 md:pl-0  w-full lg:h-[538px] relative lg:w-[538px] bg-gradient-to-b from-[#419886] to-[#004A42] md:rounded-full">
              <div className="lg:absolute  flex justify-center md:left-24 md:-top-16 pt-6 md:pt-7 lg:pt-0 ">
                <div className="relative">
                  <Image
                    src="/images/patients-seeking/mobile.png"
                    height="500"
                    width="353"
                    alt="mobile"
                    className=""
                  />
                  <div className="absolute top-10 -left-2 sm:left-28 md:-left-2 w-full flex justify-center sm:justify-start sm:max-w-[300px] md:justify-center items-center">
                    <Image
                      src="/images/icons/medii-logo.svg"
                      height="100"
                      width="100"
                      alt="medii-logo"
                    />
                  </div>
                  <div className="absolute top-[7rem] left-4 xs:left-5 sm:left-2 md:left-5 w-[80%] sm:w-[90%] md:w-[80%]  ">
                    <Slider
                      {...settings}
                      ref={sliderRef}
                      afterChange={(index) => {
                        handleAfterChange(index);
                      }}
                    >
                      {images.map((image, index) => (
                        <Image
                          key={index}
                          src={`/images/patients-seeking/${image.image ?? ""
                            }.png`}
                          height="500"
                          width="290"
                          alt="mobile"
                          className="w-full h-full rounded-[15px]  pt-1.5 bg-gradient-to-l from-[#C3996B] to-[#EAE2B6]"
                        />
                      ))}
                    </Slider>
                    <div className="absolute  bottom-16 w-full flex flex-col items-center gap-5 justify-center">
                      <span className="text-xl font-Poppins px-6 font-medium text-center text-white ">
                        {images[currentSlide]?.description ?? ""}
                      </span>
                      <button
                        onClick={goToNext}
                        className="flex items-center justify-center flex-shrink-0 w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#EAE2B6] to-[#D2C5A0]  shadow-[-5px_10px_30px_0px_#ABAFC782]"
                      >
                        <Image
                          src="/images/home/clients/next-btn.svg"
                          height="8"
                          width="16"
                          alt="prev"
                          className="hover:animate-pulse hover:cursor-pointer rotate-180"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-grow">
            <div className="flex flex-wrap md:pt-7 lg:pt-20  xl:pt-0  gap-1 md:gap-14 xl:gap-7 justify-center items-center md:items-stretch">
              {patientSeekingData.map((item, index) => {
                const { name, icon, description, isDark } = item;
                return (
                  <div
                    key={index}
                    className={`max-w-[280px] flex-grow p-3 xs:p-2  md:p-4 rounded-[30px]
                ${!isDark
                        ? "bg-white md:max-h-[230px]"
                        : "bg-gradient-to-b from-[#E4EFE1] min-h-[312px] to-transparent"
                      }
                            ${index === patientSeekingData.length - 1 &&
                      "md:-translate-y-16"
                      }
                `}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex justify-center items-center ${!isDark ? "bg-[#419886]" : "bg-[#EAE2B6]"
                        }`}
                    >
                      <Image
                        src={`/images/patients-seeking/${icon ?? ""}.svg`}
                        height="24"
                        width="24"
                        alt="medii-logo"
                      />
                    </div>
                    <div
                      className={`pt-7 font-Poppins text-sm xs:text-lg md:text-xl font-semibold ${!isDark ? "text-[#EBB817]" : "text-[#527E77]"
                        }`}
                    >
                      {name ?? ""}
                    </div>
                    <span className="block font-Roboto py-2 text-black text-sm md:text-base">
                      {description ?? ""}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientsSeeking;
