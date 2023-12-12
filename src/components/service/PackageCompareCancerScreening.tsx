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
                name: "C - 反应蛋白",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "铁元素4项",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "骨骼与肌肉",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: true,
            },
            {
                name: "甲状腺功能",
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
        title: "肿瘤标志检测",
        categories: [
            {
                name: "甲胎蛋白",
                subname: "提示有无原发性肝癌，生殖腺胚胎性肿瘤，干硬化等",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "癌胚抗原 ",
                subname: "广谱肿瘤标志物，直肠癌，结肠癌，肺癌，乳腺癌，胰腺癌等。",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "前列腺特异性抗原（男）",
                subname: "前列腺癌，前列腺肥大，前列腺炎症指征",
                packages: ["B"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "癌抗原125（女）",
                subname: "卵巢癌筛查",
                packages: ["A", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "Ca19-9抗原",
                subname: "广谱肿瘤指示，胰腺癌，胆囊癌，结肠癌指征",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "Ca50抗原",
                subname: "广谱肿瘤指示，大肠癌，消化道癌症筛查",
                packages: ["A", "B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "癌抗原72-4",
                subname: "胃癌筛查",
                packages: ["C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "癌抗原15-3（女）",
                subname: "乳腺癌筛查指标之一",
                packages: ["C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "HE4 （女）",
                subname: "卵巢癌筛查",
                packages: ["C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "尿β2-微球蛋白 ",
                subname: "慢性淋巴细胞性白血病筛查，肾功能减退",
                packages: ["C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "鳞癌抗原（SCC） ",
                subname: "宫颈癌，肺鳞癌，鼻咽癌等",
                packages: ["C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "大便隐血",
                subname: "大便隐血 - 肠癌筛查",
                packages: ["C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "神经元特异性烯醇化酶",
                subname: "神经母细胞瘤，小细胞癌筛查",
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
        title: "医生门诊",
        categories: [
            {
                name: "身体指征 ",
                subname: "体温，心率，血压，身体质量指数",
                packages: ["B", "C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "内科",
                subname: "心脏听诊，听力，视力",
                packages: ["C"],
                subPackages1: "",
                subPackages2: "",
                subPackages3: "",
                isDetailed: false,
            },
            {
                name: "体表详细检查",
                subname: "检查可疑体表生长物如痣、肿块等",
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
        title: "结果分析",
        categories: [
            {
                name: "英语报告 ",
                subname: "",
                packages: ["A", "B", "C"],
                subPackages1: "实验室直接报告",
                subPackages2: "实验室直接报告",
                subPackages3: "实验室直接报告",
                isDetailed: false,
            },
            {
                name: "医生综合分析（电话） ",
                subname: "根据检测结果，双语讲解10分钟",
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
                subname: "对症转诊专科医生，医生费用自理",
                packages: ["C"],
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

const PackageCompareCancerScreening = () => {
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
                            守护版套餐-女
                            </button>
                            <h3 className="text-xl font-bold font-Nunito text-[#6AD1BC]">£199</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <button className="capitalize text-base text-center p-2 bg-[#419886] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] font-Lato flex justify-center items-center flex-shrink">
                            守护版套餐-男
                            </button>
                            <h3 className="text-xl font-bold font-Nunito text-[#419886]">£565</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <button className="capitalize font-Lato text-base text-center p-2 bg-[#004A42] shadow-[0px_5px_7px_0px_#ABAFC74D] rounded-[22px] flex justify-center items-center flex-shrink">
                            加强版套餐-女
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
                                        const { isDetailed, name, packages, subPackages1, subPackages2, subPackages3 } = category;
                                        return (
                                            <div
                                                key={i}
                                                className="flex flex-col md:flex-row md:justify-between font-Lato bg-[#E4EFE1] gap-2 md:gap-0 rounded-[5px] py-2 px-5"
                                            >
                                                <div className="flex items-center justify-center gap-2 text-base font-normal break-words text-black ">
                                                    <div className="" >
                                                        {name ?? ""}
                                                        <div className="text-sm" >
                                                            {category?.subname ?? ""}
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
                                                    <div className="min-w-[80px] flex justify-center flex-col items-center gap-4 ">
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
                                                    <div className="min-w-[80px] flex justify-center flex-col items-center gap-4 ">
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

export default PackageCompareCancerScreening