import Image from "next/image";
import React from "react";

const packageData = [
  {
    index: 0,
    title: "Biochemical detection",
    categories: [
      {
        name: "Full blood count",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "Liver function",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "Kidney function",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "Blood lipid test",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "Inflammation index check",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "Diabetes screening",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "Trace element screening",
        packages: ["A", "B", "C"],
        isDetailed: true,
      },
      {
        name: "Bone and Muscle Exam",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "Thyroid check",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "Uric acid test",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "Hormone 4 items （Woman)",
        packages: ["B", "C"],
        isDetailed: true,
      },
      {
        name: "Hormone 4 items (Man)",
        packages: ["B", "C"],
        isDetailed: true,
      },
      {
        name: "19 routine blood tests",
        packages: ["B", "C"],
        isDetailed: false,
      },
      {
        name: "19 routine blood tests",
        packages: ["B", "C"],
        isDetailed: false,
      },
      {
        name: "19 routine blood tests",
        packages: ["B", "C"],
        isDetailed: false,
      },
      {
        name: "19 routine blood tests",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "Doctor's clinic",
    categories: [
      {
        name: "Blood tests",
        packages: ["B", "C"],
        isDetailed: false,
      },
      {
        name: "Liver function",
        packages: ["B", "C"],
        isDetailed: false,
      },
      {
        name: "Kidney function",
        packages: ["B", "C"],
        isDetailed: false,
      },
      {
        name: "Blood lipid test",
        packages: ["B", "C"],
        isDetailed: false,
      },
      {
        name: "Inflammation index check",
        packages: ["C"],
        isDetailed: false,
      },
      {
        name: "Diabetes screening",
        packages: ["C"],
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "Affect judgment",
    categories: [
      {
        name: "Blood tests",
        packages: ["B", "C"],
        isDetailed: false,
      },
      {
        name: "Liver function",
        packages: ["C"],
        isDetailed: false,
      },
      {
        name: "Kidney function",
        packages: ["C"],
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "Result analysis",
    categories: [
      {
        name: "Blood tests",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "Liver function",
        packages: ["C"],
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "Follow-up service",
    categories: [
      {
        name: "Blood tests",
        packages: ["C"],
        isDetailed: false,
      },
      {
        name: "Liver function",
        packages: ["C"],
        isDetailed: false,
      },
    ],
  },
];
function PackageCompare() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col flex-grow w-full max-w-5xl mt-7 md:my-7">
        <div className="flex flex-col justify-between md:flex-row">
          <h2 className="text-4xl text-[#3A7065] text-center font-Nunito font-bold leading-[65px]">
            Package & Pricing
          </h2>
          <div className="flex items-center justify-between gap-1 text-white md:gap-4 md:justify-start">
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize font-Lato text-base text-center p-2 bg-[#6AD1BC] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] flex justify-center items-center flex-shrink">
                Pacakge A
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#6AD1BC]">£199</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize text-base text-center p-2 bg-[#419886] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] font-Lato flex justify-center items-center flex-shrink">
                Pacakge B
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#419886]">£439</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize font-Lato text-base text-center p-2 bg-[#004A42] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] flex justify-center items-center flex-shrink">
                Pacakge C
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#004A42]">£859</h3>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="flex flex-col w-full gap-5 overflow-x-auto">
            {packageData.map((packageItem, index) => {
              const { title, categories } = packageItem;
              return (
                <div key={index} className="flex flex-col gap-1.5">
                  <div className="text-xl font-bold text-[#F4B723] bg-gradient-to-b font-Lato from-[#004A42] to-[#419886] rounded-[5px] py-2 px-5">
                    {title ?? ""}
                  </div>

                  {categories.map((category, i) => {
                    const { isDetailed, name, packages } = category;
                    return (
                      <div
                        key={i}
                        className="flex flex-col md:flex-row md:justify-between font-Lato bg-[#E4EFE1] gap-2 md:gap-0 rounded-[5px] py-2 px-5"
                      >
                        <div className="flex items-center justify-center gap-2 text-base font-normal text-black ">
                          {name ?? ""}
                          {isDetailed && (
                            <Image
                              src={`/images/service/package-question-mark-icon.svg`}
                              height="15"
                              width="15"
                              alt="medii-logo"
                              className="hover:cursor-pointer"
                            />
                          )}
                        </div>
                        <div className="flex items-center justify-between text-white md:gap-4 md:justify-end">
                          <div className="min-w-[80px] flex justify-center">
                            <Image
                              src={`/images/service/${
                                packages.includes("A")
                                  ? "package-right-icon"
                                  : "package-lock-icon"
                              }.svg`}
                              height="15"
                              width="15"
                              alt="medii-logo"
                              className="hover:cursor-pointer"
                            />
                          </div>
                          <div className="min-w-[80px] flex justify-center">
                            <Image
                              src={`/images/service/${
                                packages.includes("B")
                                  ? "package-right-icon"
                                  : "package-lock-icon"
                              }.svg`}
                              height="15"
                              width="15"
                              alt="medii-logo"
                              className="hover:cursor-pointer"
                            />
                          </div>
                          <div className="min-w-[80px] flex justify-center">
                            <Image
                              src={`/images/service/${
                                packages.includes("C")
                                  ? "package-right-icon"
                                  : "package-lock-icon"
                              }.svg`}
                              height="15"
                              width="15"
                              alt="medii-logo"
                              className="hover:cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center my-4 ">
          <button className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand ">
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCompare;
