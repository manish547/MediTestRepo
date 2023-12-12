import React from "react";

type TabData = {
  label: string;
  content: string;
};

interface customTabProps {
  tabData: TabData[];
  selectedTab: number;
  handleTabClick: (tabIndex: number) => void;
}

function CustomTabBar({
  tabData,
  selectedTab,
  handleTabClick,
}: customTabProps) {
  return (
    <div className="w-full max-w-[775px] md:flex flex-col font-Nunito">
      <div className="hidden md:flex justify-around text-base font-bold py-4 text-[#D2C5A0]">
        {tabData.map((tab, index) => (
          <span
            key={index}
            className={`block font-Nunito hover:cursor-pointer ${selectedTab === index ? "text-[#3A7065]" : ""
              }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <div className="flex w-full justify-center mt-1 items-center">
        <div className="flex flex-col justify-center items-center w-full px-2 py-5 rounded-md md:hidden shadow-medium-btn-shadow max-w-[80%]">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`flex w-full items-center justify-center flex-1 py-2 cursor-pointer ${selectedTab === index
                ? "bg-[#F4B723] text-white"
                : "bg-white text-[D2C5A0]"
                }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block bg-[#3A7065] relative h-[10px] w-full rounded-[20px]">
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-[#F4B723] rounded-[20px]"
          style={{
            width: `${100 / tabData.length}%`,
            left: `${(100 / tabData.length) * selectedTab}%`,
            transition: "all 0.3s",
          }}
        ></div>
      </div>
    </div>
  );
}

export default CustomTabBar;
