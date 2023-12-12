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
        packages: ["A", "B", "C", "D"],
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
        packages: ["B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "肝功能8项",
        subname: "",
        packages: ["B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "肾功能2项",
        subname: "",
        packages: ["B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "血脂5项",
        subname: "",
        packages: ["B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "甲状腺功能",
        subname: "备孕与早孕时期重要激素",
        packages: ["B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "尿酸",
        subname: "",
        packages: ["B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "微量元素",
        subname: "肌酐激酶/钙/钾/铁/钠/无机磷酸盐",
        packages: ["B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "空腹血糖",
        subname: "",
        packages: ["B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "雌激素水平 ",
        subname: "雌激素四项：雌二醇E2/孕酮P/促黄体生成素LH/促卵细胞雌激素FSH 雌激素六项：以上四项+睾酮T/泌乳素PRL",
        packages: ["B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "多重维生素指标",
        subname: "叶酸，维生素D，维生素B12",
        packages: ["C", "D"],
        isDetailed: false,
      },
      {
        name: "女性生育能力测试",
        subname: "AMH，抗穆勒氏管荷尔蒙",
        packages: ["C", "D"],
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "肿瘤指标",
    categories: [
      {
        name: "乳腺癌筛查",
        subname: "乳腺肿瘤标志；癌抗原15-3",
        packages: ["D"],
        isDetailed: false,
      },
      {
        name: "卵巢癌筛查",
        subname: "卵巢肿瘤标志；癌抗原Ca125",
        packages: ["D"],
        isDetailed: false,
      },
      {
        name: "下消化道癌筛查 ",
        subname: "大肠癌肿瘤标志；癌抗原CEA",
        packages: ["D"],
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "尿检分析",
    categories: [
      {
        name: "尿液分析",
        subname: "",
        packages: ["A", "B", "C", "D"],
        isDetailed: false,
      }
    ],
  },
  {
    index: 0,
    title: "宫颈筛查",
    categories: [
      {
        name: "白带常规",
        subname: "衣原体、淋病、霉菌、滴虫及阴道清洁度",
        packages: ["A", "B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "HPV",
        subname: "人类乳头状瘤病毒20种型号筛查",
        packages: ["A", "B", "C", "D"],
        isDetailed: false,
      },
      {
        name: "TCT",
        subname: "宫颈液基薄层细胞学检查",
        packages: ["B", "C", "D"],
        isDetailed: false,
      },
    ],
  },
  {
    index: 0,
    title: "影像判断",
    categories: [
      {
        name: "经腹部超声波腹腔及盆腔",
        subname: "映像检查腹腔、盆腔脏器，确认组织结构正常",
        packages: ["C", "D"],
        isDetailed: false,
      },
      {
        name: "经阴道超声波盆腔",
        subname: "高分辨率映像检查女性生殖器官，确认组织形态正常",
        packages: ["C", "D"],
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
        packages: ["D"],
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
        packages: ["A", "B", "C", "D"],
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
        packages: ["C", "D"],
        isDetailed: false,
      },
      {
        name: "赠送6个月脉德会员",
        subname: "",
        packages: ["C", "D"],
        isDetailed: false,
      },
      {
        name: "后期电话追踪",
        subname: "",
        packages: ["D"],
        isDetailed: false,
      },
    ],
  },
];

const PackageCompareFemale = () => {
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
                女性体检套餐
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#6AD1BC]">£385</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize text-base text-center p-2 bg-[#419886] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] font-Lato flex justify-center items-center flex-shrink">
                女性加强套餐
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#419886]">£685</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize font-Lato text-base text-center p-2 bg-[#004A42] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] flex justify-center items-center flex-shrink">
                女性备孕套餐
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#004A42]">£1085</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="capitalize font-Lato text-base text-center p-2 bg-[#004A42] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] flex justify-center items-center flex-shrink">
                女性全面套餐
              </button>
              <h3 className="text-xl font-bold font-Nunito text-[#004A42]">£1485</h3>
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
                        <div className="flex items-center justify-center gap-2 text-base font-normal break-words text-black ">
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
                              src={`/images/service/${packages.includes("A")
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
                              src={`/images/service/${packages.includes("B")
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
                              src={`/images/service/${packages.includes("C")
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
                              src={`/images/service/${packages.includes("D")
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

export default PackageCompareFemale