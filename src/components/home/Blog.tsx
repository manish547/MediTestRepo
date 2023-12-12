import React, { useEffect, useState } from "react";
import Image from "next/image";
import { contentApi } from "@/api/resourcesApi";
import Link from "next/link";
import Cookies from "js-cookie";

interface LongTextProps {
  content: string;
  limit: number;
}

const blogData = [
  {
    index: 0,
    title: "Review Of Healthy Breakfast Meals For Energy Boost",
    time: "20:45",
    duration: " 2 years ago ",
    description:
      "To help you out, we’ve looked through some of the best offerings on the market  and compiled a list",
    image: "blog-image-1",
  },
  {
    index: 1,
    title: "Review Of Healthy Breakfast Meals For Energy Boost",
    time: "20:45",
    duration: " 2 years ago ",
    description:
      "To help you out, we’ve looked through some of the best offerings on the market  and compiled a list",
    image: "blog-image-2",
  },
];
function Blog() {
  const [letestNews, setLetestNews] = useState([])

  function extractDescription(content: string): string {
    // Create a temporary element to store the HTML content
    const tempElement = document.createElement('div');
    tempElement.innerHTML = content;

    // Find the first span element
    const firstSpan = tempElement.querySelector('span');

    // Extract the text from the first span or provide a default value
    const descriptionText = firstSpan ? firstSpan.textContent || '' : '';

    return descriptionText;
  }

  function convertDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;

    return formattedDate;
  }

  const LongText = ({ content, limit }: LongTextProps) => {
    if (content.length <= limit) {
      return <div>{content}</div>;
    }
    const toShow = content.substring(0, limit) + "...";
    return <div>{toShow}</div>;
  };

  useEffect(() => {
    ; (async () => {
      const contentData = await contentApi({ selectedFilter: 131, pageIndex: 0, pageSize: 20 })
      setLetestNews(contentData.data)
    })()
  }, [])
  useEffect(() => {
    const cookieValue = JSON.stringify({
      Id: 132,
    });
    Cookies.set('_DetailsID', cookieValue);
  }, [])

  useEffect(() => {
    const cookieValue = JSON.stringify({
      ContentId: 0,
      entityType: 55
    });
    Cookies.set('_siteContentID', cookieValue);
  }, [])



  return (
    <div className="flex flex-col py-2 xs:pb-14 md:py-8 gap-8">
      <div className="z-50 flex flex-col items-center justify-center w-full md:pt-16 sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-2xl font-Nunito md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start">
          Last News
        </h1>
        <span className="block max-w-md   text-xs  xs:text-sm md:text-base font-medium text-center text-secondary font-Quicksand">
          We deliver quality healthcare service in clinics and at your doorstep
        </span>
      </div>
      <div className="px-0 sm:px-5 flex flex-col gap-14 md:gap-10 items-center justify-between h-full lg:flex-row relative ">
        <div className="flex items-center justify-center max-h-[480px] max-w-[700px] flex-1 relative shadow-[0px_3px_50px_0px_#0000001A] rounded-[15px]">
          <div className="h-full  w-full bg-gradient-to-b from-transparent to-[#081420] absolute rounded-[20px] opacity-70 shadow-[0px_3px_50px_0px_#0000001A]"></div>
          <Image
            src="/images/home/big-blog-image.png"
            height="566"
            width="773"
            alt="medii-logo"
            className="rounded-[20px]"
          />
          <div className="absolute px-3  md:px-0 w-full max-w-[617px] top-2 xs:top-auto bottom-10">
            <div className="flex flex-col gap-4">
              <span className="block font-bold text-xs xxs:text-sm font-Nunito xs:text-lg md:text-2xl text-white">
                10 Casting Decisions That Hurt The Star Wars Prequels (And 10
                That Saved It)
              </span>
              <div className="flex items-center gap-3 text-sm font-medium text-white font-Quicksand">
                <span className="block font-Quicksand">1 years ago</span>
                <span className="block w-px h-[12px]  bg-[#ABAFC7]"></span>
                <span className="bloc font-Quicksand">20:45</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center flex-1 h-full gap-6 md:gap-2 center sm:flex-row">
          <div className="absolute flex items-center justify-center gap-1 md:gap-3 right-5 md:-right-12 lg:right-8 -top-11 md:-top-9 lg:-top-20">
            <span className="block text-[#70798B] text-sm font-medium capitalize font-Quicksand">
              More
            </span>
            <Image
              src={`/images/home/small-circles.svg`}
              height="100"
              width="100"
              className="top-0 left-0 h-7 w-6 sm:h-[40px] sm:w-[35px] md:h-[41px] md:w-[27px]"
              alt="circle"
            />
          </div>
          {/* small blog 1 */}
          {letestNews.length > 0 && letestNews.slice(0, 2).map((blogItem, index) => {
            const { name, featureImageFileItemIsPublic, createdOnUtc, bodyContent, id } = blogItem;
            const newData = convertDate(createdOnUtc)
            const discription = extractDescription(bodyContent)
            return (
              <div key={index}>
                <Image
                  src={`/images/resource-card/card-1-image.png`}
                  height="209"
                  width="274"
                  alt="medii-logo"
                  className="rounded-[20px]"
                />
                <div className="p-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-[#ABAFC7]">
                    <span className="block font-Quicksand">
                      {newData ?? ""}
                    </span>
                    {/* <span className="block w-px h-[12px]  bg-[#ABAFC7]"></span>
                    <span className="bloc font-Quicksand">{newData ?? ""}</span> */}
                  </div>
                  <h2 className="text-[#004842] font-Nunito text-base xs:text-[20px] sm:text-lg md:text-xl font-bold max-w-[280px] pt-2 h-16">
                    {name ?? ""}
                  </h2>
                  <span className="block font-medium font-Nunito text-xs md:text-sm text-[#7079BB] pt-2 max-w-[280px] h-20 ">
                    <LongText content={discription ?? ""} limit={50} />
                  </span>
                  <Link href={`/details/${id}`} className=" items-center gap-1 flex  hover:cursor-pointer py-2.5">
                    More
                    <Image
                      src="/images/icons/chevron-down-black.svg"
                      height="6"
                      width="10"
                      alt="chevron-right"
                      className="flex-shrink  h-3 hover:animate-pulse"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
          {/* small blog 2 */}
        </div>
      </div>
    </div>
  );
}

export default Blog;
