import Image from 'next/image'
import React, { useState } from 'react'
import PlanOptions from './PlanOptions';
import Banner from '../home/Banner';
import WhyMedii from '../service/WhyMedii';

function MembershipService() {
    const [isPackageSelected, setisPackageSelected] = useState<boolean>(true);
    const serviceOptions = [
        {
            index: 0,
            name: "Billingual Customer Care",
            icon: "billingual.svg"

        },
        {
            index: 1,
            name: "GP Clinic Fee Included",
            icon: "gp-clinic.svg"

        },
        {
            index: 2,
            name: "Urgent Care Doc Fee 50% off*",
            icon: "urgent-care.svg"

        },
        {
            index: 3,
            name: "Rapid Response to Private Need",
            icon: "rapid-response.svg"

        },
        {
            index: 4,
            name: "Prescription Service",
            icon: "prescription-service.svg"

        },
        {
            index: 5,
            name: "Medical  Note & Assessment",
            icon: "medical-note.svg"

        },
        {
            index: 6,
            name: "Diagnostic Test Discount",
            icon: "DiagnosticTest.png"

        },
        {
            index: 7,
            name: "Psychotherapy Support",
            icon: "PsychotherapySupport.png"
        },
        {
            index: 8,
            name: "Specialist  Referral",
            icon: "SpecialistReferral.png"
        },
        {
            index: 9,
            name: "Vaccination Arrangement",
            icon: "VaccinationArrangement.png"
        }
    ]

    const membershipOPtions = [
        {
            planTitle: "Classic Plan",
            price: "£489",
            monthlyCost: "£41",
            // description: "For international students",
            descriptionColor: "#14696d",
            cardFromColor: "#14696d",
            cardToColor: "#14696d",
            blob: "option-wawe-blog.png",
            isDark: false,
            text: "#E8E8E8"

        },
        {
            planTitle: "Advanced Plan",
            price: "£899",
            monthlyCost: "£75",
            // description: "For busy professionals",
            descriptionColor: "#860D0D",
            cardFromColor: "#0f5a61",
            cardToColor: "#0f5a61",
            blob: "second-blob.png",
            isDark: true,
            text: "#808080"
        },
        {
            planTitle: "Platinum  Plan",
            price: "£1999",
            monthlyCost: "£167",
            // description: "For high-standard  individuals ",
            descriptionColor: "#FEAFAF",
            cardFromColor: "#014b53",
            cardToColor: "#014b53",
            blob: "third-blob.png",
            isDark: false,
            text: "#ADADAD"
        },
        {
            planTitle: "30-Day Plan",
            price: "£199",
            monthlyCost: "",
            // description: "For short-term visitors",
            descriptionColor: "#9E0909",
            cardFromColor: "#01323b",
            cardToColor: "#01323b",
            blob: "forth-blob.png",
            isDark: false,
            text: "#D6CFCF"
        }
    ]

    const howWorksData = [
        {
            index: 0,
            title: "Choose a Plan",
            icon: "crown.svg",
            description: "Diagnosis and reviews of complex conditions by world-leading experts"
        },
        {
            index: 1,
            title: "Become a VIP",
            icon: "VIP-dark.png",
            description: "Diagnosis and reviews of complex conditions by world-leading experts"
        },
        {
            index: 0,
            title: "Choose a VIP Plan",
            icon: "crown.svg",
            description: "Diagnosis and reviews of complex conditions by world-leading experts"
        },
    ]

    return (
        <div className="my-8  relative sm:my-10 md:py-12 lg:py-[60px] !pb-3 !mb-3">
            <div className="z-50 flex flex-col items-center justify-center w-full  sm:mt-auto">
                <span className="text-sm font-bold text-yellow_light font-Quicksand">
                    Our Services
                </span>
                <h1 className="text-[30px] md:text-[38px] lg:text-[42px] leading-[50px] md:leading-[56px] lg:leading-[65px] font-bold text-primary text-center md:text-start font-Nunito">
                    Member Benefits
                </h1>
                <span className="block max-w-md px-4 sm:px-0 text-xs lg:text-base font-medium text-center text-secondary font-Quicksand">
                    Our Bilingual medical team empowers you with insights of the
                    healthcare choices and helps you fully understand your treatment plan
                </span>
            </div>
            <div className="flex flex-col gap-7 md:gap-10 z-10">
                <div className="absolute top-24 md:-top-28 lg:-top-12 w-full -z-20">
                    <Image
                        src="/images/membership/path-blob.svg"
                        height="100"
                        width="100"
                        alt="blob"
                        className="w-full h-full hidden xxs:block md:h-[90vh]  md:w-screen overflow-clip -z-20"
                    />
                </div>
                {/* Member Card */}
                <div className="flex justify-center relative items-center py-8 md:py-11 lg:py-14 px-8 sm:px-0">
                    <div className="h-[200px] w-[399px] sm:w-[499px] sm:h-[291px] bg-gradient-to-b from-[#004A42] to-[#419886]  md:rounded-[26px] shadow-[0px_20px_30px_0px_#ABAFC74D] rounded-[20px] shadow px-4 md:px-6 
                py-4 md:py-7 flex flex-col justify-between relative
                ">
                        <div className='flex justify-between'>
                            <Image
                                src="/images/icons/medii-white.png"
                                height="67"
                                width="177"
                                alt="medii-logo"
                                className="-ml-4 h-[50px] w-[120px] sm:h-[67px] sm:w-[177px]"
                            />
                            <div className=''>
                                <Image
                                    src="/images/membership/VIP.svg"
                                    height="55"
                                    width="55"
                                    alt="medii-logo"
                                    className="h-[35px] w-[35px] sm:h-auto sm:w-auto"
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className="text-center font-Radley golden-shade text-base  xs:text-[30px] md:text-[42px] font-normal leading-[65px]">Membership </div>
                            <div className="text-center font-ABeeZee golden-shade-description  text-sm  xs:text-[18px] md:text-[25px]  leading-[65px] mt-1.5">M0121 </div>
                            {/*    <div className="text-center font-ABeeZee golden-shade-description  text-sm  xs:text-[18px] md:text-[25px] font-normal leading-[65px]">M0121 </div> */}

                            <Image
                                src="/images/membership/wave-blob.png"
                                width={200}
                                height={60}
                                alt='blob'
                                className='absolute top-0 right-0 md:rounded-[26px] rounded-[20px] h-[100%] w-[50%] md:h-auto md:w-[200px]'
                            />

                        </div>
                    </div>
                </div>
                {/* options */}
                <div className="flex flex-col items-center justify-center py-0.5">
                    <div className="grid z-10 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {serviceOptions?.map((item, index: number) => {
                            return <div key={index} className='flex text-primary hover:text-[#1d6d60] justify-center items-center flex-col gap-6 cursor-pointer'>
                                <div className="bg-gradient-to-b from-[#419886] to-[#004A42] rounded-full shadow-[-10px_15px_30px_0px_#ABAFC74D] flex justify-center items-center p-4 h-[84px] w-[84px]" >
                                    <Image
                                        src={`/images/membership/${item?.icon}`}
                                        height="54"
                                        width="54"
                                        alt="medii-logo"
                                        className=""
                                    />
                                </div>
                                <div className="max-w-[169px] leading-[25px] text-center xxs:text-[22px]  font-bold font-Nunito ">{item?.name || ""}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-8" >
                <div className="max-w-[855px] px-5 md:px-5 py-px text-center font-Quicksand text-[#70798B] text-xs font-medium leading-tight">*Private urgent care is currently limited to London,  the normal doctor fee is £150 per visit, 50% discount is based on the initial doctor consultation. Terms and conditions applies, please refer to the full service fact sheet for more service details</div>
            </div >

            {/* Membership plans */}
            <div className="pt-3 flex flex-col justify-center items-center gap-10 sm:gap-12 md:gap-14" >
                <div className="z-50 flex flex-col items-center justify-center w-full  sm:mt-auto">
                    <span className="text-sm font-bold text-yellow_light font-Quicksand">
                        Our Services
                    </span>
                    <h1 className="text-[25px] xxs:text-[30px] md:text-[38px] lg:text-[42px] leading-[30px] py-2 xxs:py-0 xxs:leading-[50px] md:leading-[56px] lg:leading-[65px] font-bold text-primary text-center md:text-start font-Nunito">
                        Member Package & Pricing
                    </h1>
                    <span className="block max-w-md px-4 sm:px-0 text-xs lg:text-base font-medium text-center text-[#70798B] font-Quicksand">
                        For full package details, please click <span className="text-[#F91156]">on</span> Compare.
                    </span>
                </div>
                <div className="w-full lg:container flex flex-col gap-2 xxs:gap-7 xs:gap-12 sm:gap-14 md:gap-16 lg:gap-20">
                    <div className='w-full flex flex-col items-center justify-center'>
                        <div className="bg-[#E4EFE1] w-full max-w-[220px] h-[44px] rounded-[22px] flex items-center text-base font-bold xs:gap-2">
                            <button
                                onClick={() => setisPackageSelected(true)}
                                className={`capitalize font-Nunito rounded-[22px] text-sm md:text-base h-full transition-all duration-200 w-full flex justify-center items-center hover:cursor-pointer ${isPackageSelected
                                    ? "text-[#EBB817] bg-[#3A7065]"
                                    : "text-[#3A7065]"
                                    }`}
                            >
                                package
                            </button>
                            <button
                                onClick={() => setisPackageSelected(false)}
                                className={`capitalize h-full font-Nunito text-sm md:text-base  w-full flex transition-all duration-200 justify-center items-center  hover:cursor-pointer rounded-[22px] ${isPackageSelected
                                    ? "text-[#3A7065]"
                                    : "text-[#EBB817] bg-[#3A7065]"
                                    }`}
                            >
                                Compare
                            </button>
                        </div>
                    </div>
                    <div className='pt-1 px-5 md:px-0 flex justify-center items-center gap-10 flex-wrap'>
                        {membershipOPtions?.map((item, index) => {
                            return <PlanOptions key={index} data={item} index={index} />;
                        })}
                    </div>
                    <Banner title="Healthcare Butter service with a click" description="To begin, choose a suitable membership plan" buttonName="Chat" isExpandImage={true} />
                    <div>
                        <div className="z-50 flex flex-col items-center justify-center w-full  sm:mt-auto">
                            <span className="text-sm font-bold text-yellow_light font-Quicksand">
                                Our Services
                            </span>
                            <h1 className="text-[30px] md:text-[38px] lg:text-[42px] leading-[50px] md:leading-[56px] lg:leading-[65px] font-bold text-primary text-center font-Nunito md:text-start">
                                How it works
                            </h1>
                            <span className="block max-w-md px-4 sm:px-0 text-xs lg:text-base font-medium text-center text-[#70798B] font-Quicksand">
                                Flexible. Effortless. Convenient
                            </span>
                        </div>

                        <div className="px-5 sm:px-0 flex flex-wrap justify-center items-center pt-9 gap-1 xxs:gap-2 xs:gap-8 md:gap-16">
                            {howWorksData?.map((item, index: number) => {
                                return <div key={index} className="w-[276px] h-[312px] flex justify-center items-start py-8 bg-gradient-to-b from-[#E4EFE1] to-transparent rounded-[30px] xs:px-4 sm:px-0" >
                                    <div className='flex justify-center gap-4 flex-col items-center'>
                                        <div className="w-[78px] h-[78px] left-0 top-0 flex justify-center items-center bg-[#EAE2B6] rounded-[99px]" >
                                            <Image
                                                src={`/images/membership/${item?.icon}`}
                                                width={50}
                                                height={50}
                                                alt="post"
                                            />
                                        </div>
                                        <div className="text-[#527E77] text-lg sm:text-xl font-semibold leading-loose tracking-tight">{item?.title}</div>
                                        <div className="max-w-[244px] text-center text-black text-opacity-90 text-xs xxs:text-sm xs:text-base font-normal leading-normal tracking-wide">{item?.description}</div>
                                    </div>
                                </div>
                            })}
                        </div>

                        <div className="text-[#70798B] px-5 md:px-0 max-w-[860px] mx-auto py-4 xs:py-8 text-center text-sm md:text-base font-Quicksand">
                            MEDii proudly serves international patients with experienced multilingual service team and medical experts, sharing insights to empower patients with optimal patient pathway, either provided by MEDii directly or through a world renowned medical institution.
                        </div>
                    </div>
                </div>
            </div >

            <div className="relative">
                <div className="absolute top-8 h-[80%] w-full  flex items-center">
                    <Image
                        src="/images/membership/round-blob.svg"
                        height="300"
                        width="240"
                        alt="line-shape"
                        className="-z-10"
                    />
                </div>
                <div className="container mx-auto">
                    <WhyMedii title="Become a Member" description="Why become a MEDii Member" isMembershipPage={true} />
                </div>
            </div>
        </div >
    )
}

export default MembershipService