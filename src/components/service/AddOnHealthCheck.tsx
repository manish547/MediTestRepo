import React, { useState } from 'react'
import GreenSwitch from '../common/GreenSwitch';
import Image from 'next/image';

const AddOnData = [
    {
      index: 0,
      title: "心血管疾病筛查",
      description:
        "通过血检，门诊问答，心电监测等综合手段筛查心血管疾病风险",
      status: false,
    },
    {
      index: 1,
      title: "微生物筛查",
      description:
        "了解体内维生素A，B6，B12，维生素D 25-OH，维生素E，Folate水平 ",
      status: false,
    },
    {
      index: 2,
      title: "过敏测试",
      description:
        "血检检测30种日常食物与吸入物过敏源，92%准确性",
      status: false,
    },
    {
      index: 3,
      title: "传染病筛查",
      description:
        "快速血液检测精准安心：艾滋，梅毒，甲肝，乙肝，丙肝等7项筛查",
      status: false,
    }
  ];

const AddOnHealthCheck = () => {
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? AddOnData.length : 3;
    const [selectedSwitches, setSelectedSwitches] = useState(AddOnData);
  
    /* handle when click on show-more */
    const handleShowMore = () => {
      setShowAll(true);
    };
  
    /* handleWhwn click on show less */
    const handleShowLess = () => {
      setShowAll(false);
    };
  
    /* handle switch data */
    const handleSwitchChange = (index: number, isSelected: boolean) => {
      setSelectedSwitches((prevState: any) => {
        const newState = [...prevState];
        newState[index].status = isSelected;
        return newState;
      });
    };
    return (
      <div className="md:py-5">
        <div className="z-50 flex flex-col items-center justify-center w-full sm:mt-auto">
          <span className="text-sm font-bold text-yellow_light font-Quicksand">
          我们的服务
          </span>
          <h1 className="text-4xl leading-[65px] sm:text-5xl md:leading-[70px] font-bold text-primary text-center md:text-start font-Nunito ">
          其他附加项目
          </h1>
          <span className="block max-w-[450px] text-base font-medium text-center text-secondary font-Quicksand">
          可单独选择以下单个/多个服务，也可以与以上的套餐叠加选择
          </span>
        </div>
        <div className="flex justify-center w-full h-full ">
          <div className="my-7 flex flex-col w-full justify-center items-center bg-[#FAFAFA] max-w-5xl rounded-[20px] h-full">
            {AddOnData.slice(0, itemsToShow).map((item, index) => {
              const { title, description, status } = item;
              return (
                <div
                  key={index}
                  className={`relative w-full h-full py-3 px-5 pr-11 md:px-11 ${
                    index % 2 !== 0 && "bg-[#E4EFE1]"
                  }
                      ${index + 1 === itemsToShow && "rounded-b-[20px]"}`}
                >
                  <div className="flex flex-col items-center justify-between h-full sm:flex-row">
                    <div>
                      <h3 className="text-[22px]  font-bold font-Quicksand text-[#004A42]">
                        {title ?? ""}
                      </h3>
                      <span className="block pt-2 font-Nunito text-base font-medium text-[#70798B] max-w-[537px]">
                        {description ?? ""}
                      </span>
                    </div>
                    <div className="absolute right-2 md:static md:block">
                      <GreenSwitch
                        index={index}
                        onColor="bg-[#3A7065]"
                        closeColor="bg-[#bbbbbb]"
                        onChange={handleSwitchChange}
                        isSelected={status}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
         {!showAll && (
          <button
            className="text-[#3A7065] text-sm font-bold font-Quicksand w-full flex justify-center items-center gap-5"
            onClick={handleShowMore}
          >
            <Image
              src="/images/icons/chevron-right.svg"
              height="6"
              width="8"
              alt="chevron-right"
              className="flex-shrink h-6 rotate-90"
            />
            展示更多
          </button>
        )}
        {showAll && (
          <button
            className="text-[#3A7065] text-sm font-bold font-Quicksand w-full flex justify-center items-center gap-5"
            onClick={handleShowLess}
          >
            <Image
              src="/images/icons/chevron-right.svg"
              height="6"
              width="8"
              alt="chevron-right"
              className="flex-shrink h-6 -rotate-90"
            />
           显示较少
          </button>
        )} 
  
        <div className="flex justify-center pt-8">
          <button className="flex gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand">
          下一步
          </button>
        </div>
      </div>
    );
}

export default AddOnHealthCheck