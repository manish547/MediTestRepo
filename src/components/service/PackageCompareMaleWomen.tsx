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
            }
        ],
    },
    {
        index: 0,
        title: "显微镜观察",
        categories: [
            {
                name: "革兰氏阳，阴性细菌",
                subname: "显微镜革兰氏染色观察",
                packages: ["A", "B", "C"],
                isDetailed: false,
            },
        ],
    },
    {
        index: 0,
        title: "显微镜培养",
        categories: [
            {
                name: "淋病奈瑟氏球菌",
                subname: "",
                packages: ["A", "B", "C"],
                isDetailed: false,
            },
            {
                name: "滴虫性阴道炎",
                subname: "",
                packages: ["A", "B", "C"],
                isDetailed: false,
            },
            {
                name: "白色念珠菌",
                subname: "",
                packages: ["A", "B", "C"],
                isDetailed: false,
            },
            {
                name: "金黄色葡萄球菌",
                subname: "",
                packages: ["A", "B", "C"],
                isDetailed: false,
            },
            {
                name: "无乳链球菌",
                subname: "",
                packages: ["A", "B", "C"],
                isDetailed: false,
            },
            {
                name: "加特纳菌性阴道炎",
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
                name: "梅毒",
                subname: "梅毒抗体",
                packages: ["B", "C"],
                isDetailed: false,
            },
            {
                name: "艾滋病毒",
                subname: "艾滋病毒抗体及p24抗体",
                packages: ["B", "C"],
                isDetailed: false,
            },
            {
                name: "乙型肝炎 ",
                subname: "乙肝表面抗原",
                packages: ["B", "C"],
                isDetailed: false,
            },
            {
                name: "丙型肝炎",
                subname: "丙肝抗体",
                packages: ["C"],
                isDetailed: false,
            },
        ],
    },
    {
        index: 0,
        title: "聚合酶链式反应/PCR",
        categories: [
            {
                name: "沙眼衣原体",
                subname: "沙眼衣原体抗原",
                packages: ["A", "B", "C"],
                isDetailed: false,
            },
            {
                name: "生殖支原体",
                subname: "",
                packages: ["C"],
                isDetailed: false,
            },
            {
                name: "人型支原体",
                subname: "",
                packages: ["C"],
                isDetailed: false,
            },
            {
                name: "解脲脲原体",
                subname: "",
                packages: ["C"],
                isDetailed: false,
            },
            {
                name: "微小脲原体",
                subname: "",
                packages: ["C"],
                isDetailed: false,
            },
            {
                name: "滴虫性阴道炎",
                subname: "",
                packages: ["C"],
                isDetailed: false,
            },
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
            },
        ],
    },
    {
        index: 0,
        title: "后续服务",
        categories: [
            {
                name: "专家门诊预约服务",
                subname: "体验一个月内单次",
                packages: ["B", "C"],
                isDetailed: false,
            },
            {
                name: "后期电话追踪",
                subname: "如有不正常，体检后电话追踪",
                packages: [ "C"],
                isDetailed: false,
            },
        ],
    },
];

const PackageCompareMaleWomen = () => {
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
                                传染病筛查A套餐
                            </button>
                            <h3 className="text-xl font-bold font-Nunito text-[#6AD1BC]">£159</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <button className="capitalize text-base text-center p-2 bg-[#419886] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] font-Lato flex justify-center items-center flex-shrink">
                                传染病筛查B套餐
                            </button>
                            <h3 className="text-xl font-bold font-Nunito text-[#419886]">£269</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <button className="capitalize font-Lato text-base text-center p-2 bg-[#004A42] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] flex justify-center items-center flex-shrink">
                                传染病C套餐
                            </button>
                            <h3 className="text-xl font-bold font-Nunito text-[#004A42]">£399</h3>
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
                                                <div className="flex items-center justify-between text-white md:gap-16 md:justify-end">
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

export default PackageCompareMaleWomen