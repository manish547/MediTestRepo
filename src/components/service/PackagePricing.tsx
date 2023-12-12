import React, { useEffect, useState } from "react";
import PackageCompare from "./PackageCompare";
import { isHTMLFormatted, pageContentData, removeTransparentStyle } from "@/api/PageContentApi";
import { NextRouter, useRouter } from "next/router";

function PackagePricing({ siteData }: { siteData: any }) {
  const [isPackageSelected, setisPackageSelected] = useState(true);
  const [headerSiteData, setHeaderSiteData] = useState<any>()
  const [packageData, setPackageData] = useState<any>()
  const router: NextRouter = useRouter();

  const packageData1 = packageData?.slice(0, packageData.length - 2);
  const packageData2 = packageData?.slice(-2, -1);
  const packageData3 = packageData?.slice(packageData.length - 1);

  useEffect(() => {
    ; (async () => {
      const contentID = siteData?.topHeaderSiteContentId;
      const handleHeroSectionData = await pageContentData({ contentID: contentID });
      setHeaderSiteData(handleHeroSectionData);
    })()
  }, [])

  useEffect(() => {
    ; (async () => {
      const PackageValue = siteData?.mainServicesSiteContentMapping;
      const handlePackageData = await Promise?.all(PackageValue?.map(async (item: any) => {
        return await pageContentData({ contentID: item.value })
      })
      )

      const updatedHandlePackageData = handlePackageData.map((dataItem) => {
        const matchpackageId = PackageValue.find((packageItem: any) => packageItem.value === dataItem.id);

        if (matchpackageId) {
          return {
            ...dataItem,
            key: matchpackageId.key
          };
        }
        return dataItem;
      })
      setPackageData(updatedHandlePackageData);
    })()
  }, [])

  return (
    <div className="md:py-9">
      <div className="z-50 flex flex-col items-center justify-center w-full sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-5xl leading-[70px] font-bold text-primary text-center font-Nunito md:text-start">
          {headerSiteData?.name}
        </h1>
        {isHTMLFormatted(headerSiteData?.bodyContent) ? <div dangerouslySetInnerHTML={{ __html: (headerSiteData?.bodyContent) ?? "" }} /> : <span className="block max-w-md text-base font-medium text-center text-secondary font-Quicksand">
          适合人群：亲密关系确定前、高危性行为后以及有疑似症状群体
        </span>}
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full gap-8 mt-5 md:gap-16 font-Nunito ">
        <div className="bg-[#E4EFE1] w-full max-w-[220px] h-[44px] rounded-[22px] flex items-center text-base font-bold">
          <button
            onClick={() => setisPackageSelected(true)}
            className={`capitalize rounded-[22px] h-full transition-all duration-200 w-full flex justify-center items-center hover:cursor-pointer ${isPackageSelected
              ? "text-[#EBB817] bg-[#3A7065]"
              : "text-[#3A7065]"
              }`}
          >
            package
          </button>
          <button
            onClick={() => setisPackageSelected(false)}
            className={`capitalize h-full w-full flex transition-all duration-200 justify-center items-center  hover:cursor-pointer rounded-[22px] ${isPackageSelected
              ? "text-[#3A7065]"
              : "text-[#EBB817] bg-[#3A7065]"
              }`}
          >
            Compare
          </button>
        </div>
        {isPackageSelected ? (
          <>
            <div className="bg-gradient-to-b from-[#E4EFE1] to-transparent pt-10 md:py-10 md:px-16 w-full h-full max-w-[970px] flex-wrap md:flex-nowrap gap-10 rounded-[26px] flex justify-between items-center md:items-stretch font-Nunito relative">
              {packageData1?.map((plan: any, index: number) => {
                const { bodyContent, key } = plan;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between w-full gap-10 md:items-baseline"
                  >
                    {removeTransparentStyle(bodyContent)}

                    <button onClick={() => router.push(`/online-booking?serviceId=${key}`)} className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand ">
                      Choose plan
                    </button>
                  </div>
                );
              })}
              <div className="relative px-5 mb-16 md:mt-0 items-center md:items-baseline flex flex-col justify-between gap-10 w-full bg-gradient-to-b from-[#42918c] to-transparent  md:absolute md:right-40 lg:right-96 top-16  md:max-w-[280px] md:gap-8  md:-translate-y-24 md:translate-x-8 p-8  md:p-[2rem] rounded-[20px] shadow-[0px_42px_34px_0px_#ABAFC799]">

                <div>
                  {packageData2?.map((plan: any, index: number) => {

                    const { bodyContent, key } = plan;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-between w-full gap-10 md:items-baseline"
                      >
                        {removeTransparentStyle(bodyContent)}

                        <button onClick={() => router.push(`/online-booking?serviceId=${key}`)} className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center border-none py-2 px-11 rounded-full text-[16px] font-bold text-[#004A42] bg-[#EBB817] capitalize shadow-btn-shadow font-Quicksand ">
                          Choose plan
                        </button>
                      </div>
                    )
                  })
                  }
                </div>

              </div>
              <div className="relative px-5 mt-6 md:mt-0 items-center md:items-baseline flex flex-col justify-between gap-10 w-full bg-gradient-to-b from-[#004A42] to-[#419886]  md:absolute md:right-0 lg:right-20  md:max-w-[280px] md:gap-8  md:-translate-y-24 md:translate-x-8 p-8 md:p-[2.50rem] rounded-[20px] shadow-[0px_42px_34px_0px_#ABAFC799]">
                <div className="absolute left-0 flex items-center justify-center w-full -top-4">
                  <button className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center border-none py-2 px-11 rounded-full text-[10px] font-bold text-[#004A42] bg-[#EBB817] capitalize shadow-btn-shadow font-Quicksand  md:left-[22%]">
                    MOST POPULAR
                  </button>
                </div>

                <div>
                  {packageData3?.map((plan: any, index: number) => {

                    const { bodyContent, key } = plan;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-between w-full gap-10 md:items-baseline"
                      >
                        {removeTransparentStyle(bodyContent)}

                        <button onClick={() => router.push(`/online-booking?serviceId=${key}`)} className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center border-none py-2 px-11 rounded-full text-[16px] font-bold text-[#004A42] bg-[#EBB817] capitalize shadow-btn-shadow font-Quicksand ">
                          Choose plan
                        </button>
                      </div>
                    )
                  })
                  }
                </div>

              </div>
            </div>
            <div className="flex justify-center">
              <span className="text-base font-Quicksand text-center text-[#70798B] md:max-w-5xl block w-full">
                Please note that physical examination/disease screening cannot
                replace doctor's diagnosis and treatment, and is only used as a
                means to deepen understanding of one's own health status and
                assist medical judgment. A normal physical examination result
                only means that the detected items have no obvious disease point
                at the time of detection. If the test results are abnormal,
                please seek medical treatment in time.
              </span>
            </div>
          </>
        ) : (
          <PackageCompare />
        )}
      </div>
    </div>
  );
}

export default PackagePricing;
