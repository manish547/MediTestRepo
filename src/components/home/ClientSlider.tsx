import React, { useRef } from "react";
import Image from "next/image";

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const clientData = [
  {
    index: 0,
    title: "Alper Tornaci",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formed humour",
    date: "2021.03.02",
    image: "client-1",
  },
  {
    index: 1,
    title: "Melten karahan",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formed humour",
    date: "2022.04.05",
    image: "client-2",
  },
  {
    index: 0,
    title: "Alper Tornaci",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formed humour",
    date: "2021.03.02",
    image: "client-1",
  },
  {
    index: 1,
    title: "Melten karahan",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formed humour",
    date: "2022.04.05",
    image: "client-2",
  },
];
function ClientSlider() {
  const sliderRef = useRef<Slider>(null);

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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerPadding: "25px",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
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

  return (
    <div className="flex px-4 md:px-0 flex-col w-full h-full py-8 md:py-10 md:my-28 lg:flex-row 2xl:px-8">
      <div className="flex justify-center flex-1 py-2 xs:py-4 sm:py-6 md:py-8 md:justify-start lg:w-auto md:pr-20">
        <div className="flex flex-col gap-4 sm:gap-8 md:gap-0 justify-between h-full">
          <div className="flex flex-col gap-2 md:gap-0 items-center md:items-stretch">
            <span className="text-sm font-bold text-yellow_light font-Quicksand">
              Our Process
            </span>
            <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-start md:max-w-md font-Nunito">
              Check What Client Think Of Us
            </h1>
          </div>
          <div className="flex flex-col-reverse xs:flex-row gap-5 items-center">
            <div className="flex gap-3 items-center">
              <button
                onClick={goToPrev}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-primary shadow-[-5px_10px_30px_0px_#ABAFC782]"
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
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E4EFE1] shadow-[-5px_10px_30px_0px_#ABAFC782]"
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
            <span className="text-xs block font-medium text-[#70798B] font-Quicksand">
              There are many variations{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 sm:w-full  lg:w-[60%] h-full font-Nunito ">
        <Slider {...settings} ref={sliderRef}>
          {clientData.map((client, index) => {
            const { title, description, image, date } = client;

            return (
              <div
                key={index}
                className="transition-all 
                 h-full lg:h-[320px] xl:h-[358px] 
                 duration-500 custom-card-data mt-16 flex-1 px-9 bg-[#E4EFE1] shadow-[-15px_30px_60px_rgba(171, 175, 199, 0.5)] rounded-[20px] text-white w-[275px] text-center relative z-50 "
              >
                {/* <div
                key={index}
                className="transition-all 
                h-[348px] lg:h-[320px] xl:h-[358px] 
                duration-500 custom-card-data mt-16 flex-1 px-9 bg-[#E4EFE1] shadow-[-15px_30px_60px_rgba(171, 175, 199, 0.5)] rounded-[20px] text-white w-[275px] text-center relative hover:shadow-[-15px_30px_60px_0px_#ABAFC780]"
              > */}
                <Image
                  src={`/images/home/clients/${image ?? ""}.png`}
                  height="100"
                  width="100"
                  alt="client"
                  className="absolute object-cover rounded-full -top-11 left-1/2 transform -translate-x-1/2"
                />
                <div className="flex justify-center w-full pt-16 pb-5 overflow-auto">
                  <Image
                    src="/images/icons/quate-dark.svg"
                    height="19"
                    width="22"
                    alt="quate"
                  />
                </div>

                <h2 className="text-lg sm:text-xl md:text-2xl my-1 font-bold capitalize text-[#3A7065] custom-title transition-all">
                  {title ?? ""}
                </h2>
                <span className="block my-1 text-xs font-medium transition-all text-secondary custom-date font-Quicksand">
                  {date ?? ""}
                </span>
                <span className="block my-6 text-sm  transition-all text-secondary custom-description">
                  {description ?? ""}
                </span>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ClientSlider;
