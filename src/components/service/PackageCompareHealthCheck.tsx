import Image from 'next/image';
import React, { useState } from 'react'

const packageData = [
  {
    index: 0,
    title: "生化检查",
    categories: [
      {
        name: "血常规19项",
        subname: "",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "肝功能8项",
        subname: "",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "肾功能2项",
        subname: "",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "血脂5项",
        subname: "",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "炎症指数",
        subname: "",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "糖尿病筛查",
        subname: "",
        subPackages1: "空腹血糖",
        subPackages2: "HbA1c",
        subPackages3: "HbA1c",
        packages: ["A", "B", "C"],
        isDetailed: false,
      },
      {
        name: "铁、钾微量元素",
        subname: "",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: true,
      },
      {
        name: "骨骼与肌肉",
        subname: "",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "甲状腺",
        subname: "",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "尿酸",
        subname: "",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "激素4项（女）",
        subname: "",
        packages: ["B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: true,
      },
      {
        name: "激素4项（男）",
        subname: "",
        packages: ["B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: true,
      },
      {
        name: "风湿指数",
        subname: "",
        packages: ["B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "镁与无机磷酸盐",
        subname: "",
        packages: ["B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "多种维生素指标",
        subname: "",
        packages: ["B", "C"],
        isDetailed: false,
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
      },
      {
        name: "尿常规12项",
        subname: "",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "医生门诊",
    categories: [
      {
        name: "个人健康及家族史纪录分析健康习惯与病史（在线)",
        subname: "触诊，血压，身高体重，病史，专业医学解读检测结果",
        packages: ["B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "身体指征（护士）",
        subname: "身高，体重，体重指数，血压，脉搏，血氧",
        packages: ["B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "内科（医生）",
        subname: "心肺听诊，听力，视力",
        packages: ["B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "体表 ",
        subname: "检查可疑体表生长物如痣、肿块等",
        packages: ["B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "心血管疾病风险评估 ",
        subname: "心血管疾病10年风险评估",
        packages: ["C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "详细身体检查 ",
        subname: "心血管，呼吸，腹部系统，神经系统，包括中枢和外周神经系统",
        packages: ["C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "影像判断",
    categories: [
      {
        name: "医用12导联心电图 ",
        subname: "查看心脏健康状况",
        packages: ["B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "腹部+盆腔超声波B超（女）二选一",
        subname: "身高，体重，体重指数，血压，脉搏，血样",
        packages: ["C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "腹部超声波B超 + PSA筛查血检（男）二选一",
        subname: "检查腹部肝，增加血检前列腺癌筛查",
        packages: ["C"],
        isDetailed: false,
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
      },
    ],
  },
  {
    index: 0,
    title: "结果分析",
    categories: [
      {
        name: "英语报告 ",
        subname: "英文报告，若有健康隐患则会有双语提示",
        packages: ["A", "B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "医生综合分析（电话）",
        subname: "根据监测结果，双语讲解10-15分钟",
        packages: ["C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "后续服务",
    categories: [
      {
        name: "专家门诊预约服务",
        subname: "对症转诊抓呢医生，医生费用自理",
        packages: ["B", "C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
      {
        name: "赠送6个月脉德会员",
        subname: "可在后续服务中享受脉德会员福利",
        packages: ["C"],
        subPackages1: "",
        subPackages2: "",
        subPackages3: "",
        isDetailed: false,
      },
    ],
  },
];

const PackageCompareHealthCheck = () => {
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
                健康套餐A
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#6AD1BC]">£199</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize text-base text-center p-2 bg-[#419886] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] font-Lato flex justify-center items-center flex-shrink">
                健康套餐B
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#419886]">£439</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize font-Lato text-base text-center p-2 bg-[#004A42] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] flex justify-center items-center flex-shrink">
                健康套餐C
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#004A42]">£859</h3>
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
                    const { isDetailed, name, packages, subname, subPackages1, subPackages2, subPackages3 } = category;
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
                        <div className="flex items-center justify-between text-white md:gap-14 md:justify-end">
                          <div className="min-w-[80px] flex justify-center flex-col items-center gap-4">
                            <Image
                              src={`/images/service/${packages.includes("A")
                                ? "package-right-icon"
                                : "package-lock-icon"
                                }.svg`}
                              height="15"
                              width="15"
                              alt="medii-logo"
                              className="hover:cursor-pointer"
                            />
                            <div className='text-sm font-normal text-black'>
                              {subPackages1 ?? ""}
                            </div>
                          </div>
                          <div className="min-w-[80px] flex justify-center flex-col items-center gap-4">
                            <Image
                              src={`/images/service/${packages.includes("B")
                                ? "package-right-icon"
                                : "package-lock-icon"
                                }.svg`}
                              height="15"
                              width="15"
                              alt="medii-logo"
                              className="hover:cursor-pointer"
                            />
                            <div className='text-sm font-normal text-black'>
                              {subPackages2 ?? ""}
                            </div>
                          </div>
                          <div className="min-w-[80px] flex justify-center flex-col items-center gap-4">
                            <Image
                              src={`/images/service/${packages.includes("C")
                                ? "package-right-icon"
                                : "package-lock-icon"
                                }.svg`}
                              height="15"
                              width="15"
                              alt="medii-logo"
                              className="hover:cursor-pointer"
                            />
                            <div className='text-sm font-normal text-black'>
                              {subPackages3 ?? ""}
                            </div>
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

export default PackageCompareHealthCheck