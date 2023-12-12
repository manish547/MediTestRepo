import Image from 'next/image';
import React, { useState } from 'react'

const packageData = [
  {
    index: 0,
    title: "身体指征",
    categories: [
      {
        name: "体温，心率，血压，身体质量指数",
        subname: "",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "生化检查",
    categories: [
      {
        name: "血常规19项",
        subname: "",
        packages: [ "A" , "B", "C"],
        isDetailed: false,
      },
      {
        name: "肝功能8项",
        subname: "",
        packages: [ "A" , "B", "C"],
        isDetailed: false,
      },
      {
        name: "肾功能2项",
        subname: "",
        packages: [ "A" , "B", "C"],
        isDetailed: false,
      },
      {
        name: "血脂5项",
        subname: "",
        packages: [ "A" , "B", "C"],
        isDetailed: false,
      },
      {
        name: "甲状腺功能",
        subname: "备孕与早孕时期重要激素",
        packages: [ "A" , "B", "C"],
        isDetailed: false,
      },
      {
        name: "尿酸",
        subname: "",
        packages: [ "A" , "B", "C"],
        isDetailed: false,
      },
      {
        name: "微量元素",
        subname: "肌酐激酶/钙/钾/铁/钠/无机磷酸盐",
        packages: [ "A" , "B", "C"],
        isDetailed: false,
      },
      {
        name: "空腹血糖",
        subname: "",
        packages: [ "A" , "B", "C"],
        isDetailed: false,
      },
      {
        name: "雄激素水平六项 ",
        subname: "睾丸素/性赫尔鞥结合球蛋白/硫酸脱氢表雄酮/促卵泡刺激素/促黄体生成素/催乳素",
        packages: [ "A" , "B", "C"],
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "尿检分析",
    categories: [
      {
        name: "尿查常规12项",
        subname: "",
        packages: ["A", "B", "C"],
        isDetailed: false,
      }
    ],
  },
  {
    index: 0,
    title: "精子质量",
    categories: [
      {
        name: "精子质量检测",
        subname: "测试精子数量、形态、活跃度、质量",
        packages: ["B", "C"],
        isDetailed: false,
      }
    ],
  },
  {
    index: 0,
    title: "肿瘤筛查",
    categories: [
      {
        name: "前列腺癌筛查",
        subname: "前列肿瘤标志；PSA特异性抗原",
        packages: ["C"],
        isDetailed: false,
      }
    ],
  },
  {
    index: 0,
    title: "影像判断",
    categories: [
      {
        name: "腹部超声",
        subname: "映像检查腹腔、确认组织结构正常",
        packages: ["C"],
        isDetailed: false,
      },
      {
        name: "腹主动脉超声        ",
        subname: "排查无腹主动脉瘤",
        packages: ["C"],
        isDetailed: false,
      },
      {
        name: "睾丸与阴囊超声",
        subname: "排查男性生殖器结构异常",
        packages: ["C"],
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "心脏功能筛查",
    categories: [
      {
        name: "12导联静止心电图",
        subname: "心脏结构功能初筛，诊断心率，确认传导正常",
        packages: ["C"],
        isDetailed: false,
      }
    ],
  },
  
  {
    index: 0,
    title: "结果分析",
    categories: [
      {
        name: "英语报告，中文总结",
        subname: "",
        packages: ["A", "B", "C"],
        isDetailed: false,
      }
    ],
  },
  {
    index: 0,
    title: "后续服务",
    categories: [
      {
        name: "专家门诊预约服务 体验一个月内单次",
        subname: "",
        packages: ["B", "C"],
        isDetailed: false,
      },
      {
        name: "赠送6个月脉德会员",
        subname: "",
        packages: [  "B", "C"],
        isDetailed: false,
      },
      {
        name: "后期电话追踪",
        subname: "",
        packages: ["C"],
        isDetailed: false,
      },
    ],
  },
];

const PackageCompareMale = () => {
  const [packageCompare] = useState(packageData)

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col flex-grow w-full max-w-5xl mt-7 md:my-7">
        <div className="flex flex-col justify-between md:flex-row">
          <h2 className="text-4xl text-[#3A7065] text-center font-Nunito font-bold leading-[65px]">
          套餐&价格
          </h2>
          <div className="flex items-center justify-between gap-1 text-white md:gap-4 md:justify-start">
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize font-Lato text-base text-center p-2 bg-[#6AD1BC] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] flex justify-center items-center flex-shrink">
              男性全面套餐
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#6AD1BC]">£445</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize text-base text-center p-2 bg-[#419886] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] font-Lato flex justify-center items-center flex-shrink">
              男性备孕套餐
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#419886]">£645</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize font-Lato text-base text-center p-2 bg-[#004A42] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] flex justify-center items-center flex-shrink">
              男性高阶套餐
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#004A42]">£985</h3>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="flex flex-col w-full gap-5 overflow-x-auto">
            {packageCompare.map((packageItem, index) => {
              const { title, categories } = packageItem;
              return (
                <div key={index} className="flex flex-col gap-1.5">
                  <div className="text-xl font-bold text-[#F4B723] bg-gradient-to-b font-Lato from-[#004A42] to-[#419886] rounded-[5px] py-2 px-5">
                    {title ?? ""}
                  </div>

                  {categories.map((category, i) => {
                    const { isDetailed, name, packages, subname } = category;
                    return (
                      <div
                        key={i}
                        className="flex flex-col md:flex-row md:justify-between font-Lato bg-[#E4EFE1] gap-2 md:gap-0 rounded-[5px] py-2 px-5"
                      >
                        <div className="flex items-center justify-center gap-2 text-base font-normal text-black ">
                        <div className="" >
                            {name ?? ""}
                            <div className="text-sm" >
                              {subname ?? ""}
                            </div>
                          </div>
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
                        <div className="flex items-center justify-between text-white md:gap-12 md:justify-end">
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
          选择此套餐
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCompareMale