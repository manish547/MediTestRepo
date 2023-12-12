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
            },
            {
                name: "肝功能8项",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "肾功能2项",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "血脂5项",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "炎症指数",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "糖尿病筛查（空腹）",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "铁元素4项",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "骨骼与肌肉",
                subname: "",
                packages: ["A", "B", "C"],
                isDetailed: true,
            },
            {
                name: "甲状腺",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "尿酸",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "传染病筛查",
                subname: "艾滋病，梅毒筛查",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "血型",
                subname: "",
                packages: ["C"],
                isDetailed: true,
            },
            {
                name: "尿常规",
                subname: "",
                packages: ["B", "C"],
                isDetailed: true,
            },
        ],
    },
    {
        index: 0,
        title: "医生门诊",
        categories: [
            {
                name: "身体指征",
                subname: "体温，心率，血压，身体质量指数",
                packages: ["B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "内科检查（医生）",
                subname: "心脏循环系统，呼吸系统，消化系统",
                packages: ["B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "体表检查 ",
                subname: "腹部，脊柱，淋巴结触诊，检查可疑体表生长物如痣、肿块等",
                packages: ["B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "精神状况初筛",
                subname: "通过对话与筛查问答，初步鉴定入职人员精神状态",
                packages: ["B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "扩展内外科检查",
                subname: "心脏心界，杂音，心率，血氧值，腹部脏器触诊",
                packages: ["C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
        ],
    },
    {
        index: 0,
        title: "影像检测",
        categories: [
            {
                name: "医用12导联心电图 ",
                subname: "查看心脏健康状况",
                packages: ["B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "X-ray 胸光片",
                subname: "排查肺炎，侵润性肺结核，肺癌，结构性心脏病等",
                packages: ["B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "腹部超声波B超 ",
                subname: "检查腹部肝，胆，胰，肾等主要脏器",
                packages: ["B", "C"],
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
                name: "英语报告",
                subname: "",
                packages: ["A", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
            {
                name: "详细中英文体检表填写与盖章 ",
                subname: "每小节有医生签字及临床观察总结",
                subPackages1: "+£150医生意见信",
                subPackages2: "适合入职体检",
                subPackages3: "适合入职体检",
                packages: ["B", "C"],
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
            },
            {
                name: "赠送6个月脉德会员",
                subname: "可在后续服务中享受脉德会员福利",
                packages: ["C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
            },
        ],
    },
];

const PackageCompareEnrolment = () => {
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
                                白领A套餐
                            </button>
                            <h3 className="text-xl font-bold font-Nunito text-[#6AD1BC]">£199</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <button className="capitalize text-base text-center p-2 bg-[#419886] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] font-Lato flex justify-center items-center flex-shrink">
                                白领B套餐
                            </button>
                            <h3 className="text-xl font-bold font-Nunito text-[#419886]">£565</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <button className="capitalize font-Lato text-base text-center p-2 bg-[#004A42] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] flex justify-center items-center flex-shrink">
                                白领C套餐
                            </button>
                            <h3 className="text-xl font-bold font-Nunito text-[#004A42]">£840</h3>
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
                                                <div className="flex items-center justify-between text-white md:gap-14 md:justify-end ">
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

export default PackageCompareEnrolment