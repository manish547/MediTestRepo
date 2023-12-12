import React from "react";

import Image from "next/image";

interface QualificationItem {
  index: number;
  title: string;
  image: string;
  height?: number;
  width?: number;
}

const QualificationData = [
  {
    index: 0,
    title: "UKAS Accredited Lab",
    image: "UKAS_accredited_lab",
    height: 151,
    width: 117,
  },
  {
    index: 1,
    title: "ISO Registered",
    image: "ISO_registered",
    height: 170,
    width: 155,
  },
  {
    index: 2,
    title: "Doctors with MRCP",
    image: "Doctors_with_MRCP",
    height: 155,
    width: 230,
  },
  {
    index: 3,
    title: "Registered with GMC",
    image: "registered_with_GMC",
    height: 154,
    width: 134,
  },
];
function ServiceQualification() {
  return (
    <div className="md:py-8">
      <div className="z-50 flex flex-col items-center justify-center w-full pt-8 sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start font-Nunito">
          MEDii Service Qualification
        </h1>
        <span className="block max-w-md  font-medium  text-xs  xs:text-sm md:text-base text-center text-secondary font-Quicksand">
          We deliver quality healthcare service in clinics and at your doorstep
        </span>
      </div>
      <div className="flex flex-col items-center gap-4 justify-around py-8 md:py-14 md:flex-row md:gap-0">
        {QualificationData.map(
          (qualificationItem: QualificationItem, index) => {
            const { title, image, height, width } = qualificationItem;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center  h-full gap-0 md:gap-2"
              >
                {/* imag */}
                <Image
                  src={`/images/services/qualifications/${image ?? ""}.png`}
                  height={height}
                  width={width}
                  alt="medii-logo"
                />
                {/* text */}
                <div className="text-base font-bold text-[#70798B]">
                  {title ?? ""}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default ServiceQualification;
