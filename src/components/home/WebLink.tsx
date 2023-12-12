import Image from "next/image";

function WebLinkComponent() {
  return (
    <div className="py-8 sm:py-10 md:py-12 lg:py-20">
      <div className="container mx-auto flex gap-7 sm:gap-[3rem] md:gap-[4rem] flex-col-reverse md:flex-col lg:flex-row px-6 lg:px-0">
        {/* image div */}
        <div className="relative z-10 flex items-center justify-end w-full ml-5 lg:w-1/2">
          <div className="absolute z-0 w-full h-full">
            <Image
              src="/images/home/services/service-ractangle-blob.png"
              height={100}
              width={276}
              alt="services"
              className="absolute bottom-0 h-[80%]  sm:right-2   md:h-auto  transform -translate-x-12 -translate-y-10 lg:right-32 max-w-[260px] md:max-w-full"
            />
          </div>
          <div className="relative flex justify-center w-full h-full lg:max-w-auto lg:justify-end
">
            <Image
              src="/images/home/services/services-hero.png"
              height={200}
              width={338}
              alt="services"
              className="rounded-3xl max-w-[260px] md:max-w-full shadow-[-15px_30px_50px_0px_#70798B4D]"
            />
          </div>
        </div>
        {/* description div */}
        <div className="relative flex flex-col items-center justify-center lg:items-start md:mt-6 lg:w-1/2 lg:mt-0 lg:pl-12">
          <div className="h-[80%] flex justify-between py-8 items-start flex-col">
            <div>
              <span className="block w-full text-sm font-bold text-center md:text-start md:w-auto text-yellow_light font-Quicksand">
                Our Services
              </span>
              <h1 className="text-2xl md:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] xl:leading-[70px] font-bold text-primary text-center md:text-start">
                Check Our Services
              </h1>
              <span className="block max-w-md text-xs font-medium text-start xs:text-sm md:text-base text-secondary font-Quicksand">
                MEDii Health is dedicated to providing accessible private
                healthcare service timely.
              </span>
            </div>
            <div className="flex justify-center mt-8 lg:mt-12 md:justify-start">
              <button className="flex gap-3 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-r w-36 from-[#F4B723] to-[#F9CB44] capitalize shadow-btn-shadow font-Quicksand">
                More
              </button>
            </div>
            <Image
              src={`/images/home/small-circles.svg`}
              height="100"
              width="100"
              className="absolute bottom-0 right-0 md:right-16 md:bottom-12 h-7 w-6 sm:h-[40px] sm:w-[35px] md:h-[41px] md:w-[27px]"
              alt="circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebLinkComponent;
