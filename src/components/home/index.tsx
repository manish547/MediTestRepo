import Image from "next/image";
import React, { useState } from "react";

import HospitalImageSlider from "../common/HospitalImageSlider";
import ClientSlider from "./ClientSlider";
import WebLinkComponent from "./WebLink";
import Advantages from "./Advantages";
import Suscribe from "./Suscribe";
import MediiAdd from "./MediiAdd";
import Process from "./Process";
import Service from "./Service";
import Banner from "./Banner";
import Blog from "./Blog";

const hospitaLogoImages = [
  { index: 0, image: "london-bridge-hospital" },
  { index: 1, image: "imperial-private-healthcare" },
  { index: 2, image: "portland-hospital" },
  { index: 3, image: "moorfields-private-eye-hospital" },
  { index: 4, image: "harley-street-clinic" },
  { index: 5, image: "london-clinic" },
];

const socialMediaLinks = [
  { index: 0, image: "facebook-dark", linkTo: "https://www.facebook.com/MEDiiHealthGroup" },
  { index: 1, image: "twitter-dark", linkTo: "https://twitter.com/MediiHealth" },
  { index: 2, image: "chat", linkTo: "https://mp.weixin.qq.com/s/HmAdLX17FcRbWI9V6dPd4w" },
  { index: 3, image: "youtube-dark", linkTo: "https://www.youtube.com/channel/UCCUmCTUKlpbHelg5NyxTUKw" },
  { index: 4, image: "linkedin1", linkTo: "https://www.linkedin.com/company/mediihealth/" },
  // { index: 5, image: "instagram", linkTo: "instagram.com" },
  { index: 6, image: "xiaohongshu1", linkTo: "https://www.xiaohongshu.com/user/profile/5f8a3da800000000010010f7" },
];
function Homepage() {
  const [ratingStars] = useState(5);
  return (
    <>
      <div className="py-8 mx-auto xs:container md:px-4 laptop:px-14 2xl:px-16">
        <div className="flex flex-col-reverse items-center justify-between flex-grow gap-8 lg:gap-0 lg:flex-row">
          <div className="flex flex-col items-center justify-center w-full mt-5 sm:mt-auto lg:items-start">
            <span className="pb-7 text-sm font-bold text-[#EBB817] font-Quicksand tracking-[1px] ">
              Get Startted
            </span>
            <h1 className=" 
            text-2xl xs:text-3xl md:text-5xl lg:text-[64px]
            leading-7 xs:leading-9 md:leading-[70px] lg:leading-[70px]
            lg:max-w-[550px] lg:text-start
            font-bold text-primary  text-center  md:text-center font-Nunito">
              Cross-border <p className="text-lg xs:text-[20px]  sm:2xl md:text-4xl lg:text-[48px]
              leading-7 xs:leading-9 sm:leading-12 md:leading-[40px] lg:leading-[70px] pb-4 lg:pb-0
              ">Healthcare Consultancy</p>
            </h1>
            <h3 className=" text-[#70798B] max-w-[438px] font-medium text-center md:text-center lg:text-start font-Quicksand first-letter:uppercase 
            leading-[30px] lg:leading-[40px]
            xs:text-xl sm:2xl md:text-3xl
            ">
              premiun British private healthcare
            </h3>
            <div className="pt-5 sm:pt-10">
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                <span className="block text-[18px] leading-10 font-bold font-Nunito">
                  Patient feedback
                </span>
                <div className="flex">
                  {Array.from({ length: ratingStars }, () => null).map(
                    (v, i) => {
                      return (
                        <Image
                          key={i}
                          src="/images/home/star.svg"
                          height="25"
                          width="25"
                          alt="medii-logo"
                        />
                      );
                    }
                  )}
                </div>
                <Image
                  src="/images/home/google-logo.svg"
                  height="56"
                  width="94"
                  alt="medii-logo"
                />
              </div>
            </div>
            <span className="text-sm font-medium leading-6 text-center md:text-start text-secondary font-Quicksand">
              Score based on patients’ feedback to recommend Medi Healthcare on
            </span>
            <div className="flex flex-col gap-5 pt-10 xxs:flex-row">
              <button className="flex gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-r w-36 from-[#F4B723] to-[#F9CB44]  capitalize shadow-btn-shadow font-Quicksand">
                Video
              </button>
              <button className="flex w-36 gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand">
                Booking
              </button>
            </div>
          </div>
          <div className="relative flex-grow xs:px-10 md:pr-16">
            <div className="relative">
              <Image
                src={`/images/home/small-circles.svg`}
                height="100"
                width="100"
                className="absolute w-6 h-10 top-8 -right-2 md:top-10"
                alt="circle "
              />
              <Image
                src="/images/home/doctor-image.png"
                height="528"
                width="679"
                alt="medii-logo"
                className="sm:h-[400px] sm:w-[400px] ml-4 xs:ml-0  lg:h-[380px] lg:w-[550px] xl:h-[390px] xl:w-[609px] 2xl:h-[500px] 2xl:w-[679px]"
              />
            </div>
            <Image
              src="/images/home/half-golden-circle.svg"
              height="100"
              width="70"
              alt="medii-logo"
              className="absolute bottom-[30%] left-4 h-[80px] xs:h-[90px] sm:h-[140px]  lg:h-[160px] w-auto"
            />
            <Image
              src="/images/home/half-green-circle.svg"
              height="100"
              width="150"
              alt="medii-logo"
              className="absolute bottom-0 right-16 md:right-10 w-[80px] xs:w-[90px] sm:w-[140px]  lg:w-[160px] h-auto"
            />
            <div className="absolute w-full xs:w-auto -top-4 xs:-right-[6rem]  sm:-right-[7rem] xs:top-[50%] md:top-[44%] md:-right-[120px] lg:-right-[100px] xs:rotate-90">
              <div className="text-[12px] flex justify-center items-center text-[#707070] font-bold">
                <span className="block font-Quicksand ">Follow Us &nbsp;</span>
                <span className="block w-10 h-0 border border-black"></span>
                <div className="flex gap-3">
                  &nbsp;
                  {socialMediaLinks.map((link, index) => {
                    const { image, linkTo } = link;
                    return (
                      <a
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={linkTo ?? ""}
                      >
                        <Image
                          src={`/images/icons/social-media/${image ?? ""}.svg`}
                          height="14"
                          width="14"
                          alt="medii-logo"
                          className="w-4 h-4 xs:-rotate-90"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E4EFE1] pt-12 pb-8 mt-11 px-3 xs:px-0">
        <div className="container mx-auto">
          <HospitalImageSlider imageData={hospitaLogoImages} />
        </div>
      </div>
      {/* services */}
      <div className="container px-3 mx-auto xs:px-0">
        <Service />
      </div>
      {/* advantages */}
      <div className="relative px-3 md:my-16 xs:px-0">
        <Image
          src="/images/home/services/path-shape.png"
          height="400"
          width="1400"
          alt="line-shape"
          className="w-full h-[35rem] pt-64 top-10 md:-top-0  md:pt-0 -z-10 absolute"
        />
        <div className="mx-auto md:container">
          <div className="" >
            <WebLinkComponent />
          </div>
          <div className="px-5">
            <Advantages />
          </div>
          <div className="px-5">
            <MediiAdd />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/icons/process-blob.svg"
            height="400"
            width="500"
            alt="line-shape"
            className="h-[35rem] -z-10 absolute bottom-20 xs:bottom-0 -right-5 xs:right-0 inline-block"
          />
          <div className="mx-auto xs:px-8 sm:px-10 md:container md:px-5">
            <Process />
          </div>
        </div>
        <div className="relative px-5">
          <Image
            src="/images/home/clients/client-blob.svg"
            height="300"
            width="240"
            alt="line-shape"
            className="absolute bottom-0 inline-block -left-5 -z-10"
          />
          <div className="mx-auto md:container">
            <ClientSlider />
          </div>
        </div>
        <div className="px-5 mx-auto md:container sm:px-2 md:px-0">
          <Banner title="Need help choosing the right clinic ?" description=" The MEDii Health Team is here to help you with any questions you have." buttonName="Chat" isExpandImage={true} />
          <Blog />
        </div>
        <div className="relative pb-6 sm:pb-10 md:pb-16 md:mb-16 md:my-20 ">
          <Image
            src="/images/home/suscribe-path-shape.svg"
            height="200"
            width="1900"
            alt="line-shape"
            className="absolute w-full -z-10 xxs:top-36 sm:top-32 lg:-top-20 xl:-top-[70px] 2xl:-top-48 "
          />
          <div className="mx-auto md:container md:px-0 xs:px-2">
            <Suscribe />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
