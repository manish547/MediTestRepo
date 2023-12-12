import Image from 'next/image'
import React from 'react'

interface planType {
    planTitle: string,
    price: string,
    monthlyCost: string,
    descriptionColor: string,
    cardFromColor: string,
    cardToColor: string,
    blob: string,
    isDark: boolean,
    text: string,
}

interface planOptionData {
    data: planType;
    index: number
}

const PlanOptions = ({ data, index }: planOptionData) => {

    return (
        <div className='flex flex-col justify-center items-center gap-[35px] md:gap-[40px] lg:gap-[53px]'>
            <div 
            className={` w-[80vw] h-[300px] xs:w-[250px] xs:h-[350px] sm:w-[260px] md:w-[272px] sm:h-[350px] md:h-[368px] rounded-[26px] shadow-[#00000029_0px_10px_36px_0px] md:shadow-[0px_42px_34px_0px_#ABAFC799] py-4 md:py-6 px-5 relative
            `}
                style={{ backgroundImage: `linear-gradient(to bottom, ${data?.cardFromColor}, ${data?.cardToColor})`, color: data?.text }}
            >
                <Image
                    src={`/images/membership/VIP_${index + 1}.svg`}
                    height="55"
                    width="55"
                    alt="medii-logo"
                    className="h-[35px] w-[35px] sm:h-auto sm:w-auto"
                />
                <div className="flex justify-between flex-col h-[80%] relative">
                    <div className='flex flex-col justify-between'>
                        <div className={`text-center  font-Radley text-[18px] md:text-[28px] font-semibold leading-[50px] md:leading-[65px] card-${index + 1}-golden-shade`}
                        >{data?.planTitle || ""}</div>
                        <div className="text-center text-sm md:text-lg font-bold leading-normal">Yearly Cost</div>
                        <div className={` text-center py-4 text-lg md:text-4xl font-normal leading-[30px] md:leading-[46px] ${data?.isDark ? "text-black" : "text-white"}`}>{data?.price || ""}</div>
                        <div className="text-center text-sm md:text-2xl font-bold leading-normal">Monthly Cost</div>
                        <div className="text-center text-lg md:text-2xl font-bold leading-[18px]">{data?.monthlyCost || ""}</div>
                    </div>
                    
                </div>
                <div className="absolute top-0 -right-5 max-w-[120px] items-stretch flex justify-start h-full w-full">
                    <Image
                        src={`/images/membership/${data?.blob}`}
                        width={100}
                        height={60}
                        alt='blob'
                        className='w-full h-auto pr-5 sm:rounded-[30px] md:rounded-[38px] 
                    rounded-[35px]'
                        onDrag={() => { return false }}
                    />
                </div>
            </div>
            <div className="w-[205.85px] h-[38.98px] bg-gradient-to-b from-[#004A42] flex justify-center items-center to-[#419886] rounded-3xl hover:from-[#EBB817] cursor-pointer hover:to-[#FFD669] " >
                <div className="w-[84.53px] text-center text-white text-[15px] font-normal font-Nunito">Choose plan</div>
            </div>
        </div>
    )
}

export default PlanOptions