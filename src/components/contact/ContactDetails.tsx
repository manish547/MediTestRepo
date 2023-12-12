import Image from 'next/image';
import React from 'react'
import { BsChatDots } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { TbBrandWechat } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";

const ContactDetails = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='border border-[#233f3b] h-full min-h-[282px] w-full flex items-center justify-between flex-col gap-4 p-3 '>

        <div className='w-9 h-9 rounded-full bg-[#233f3b] text-center flex items-center justify-center mt-4 '>
          <BsChatDots className='w-6 h-6 text-white text-center' />
        </div>
        <div className='flex flex-col items-center justify-center gap-1 px-12 '>
          <span className='text-center text-lg text-[#16302c] '>Live Chat</span>
          <span className='text-center text-sm'>Chat with a member of our support team about service details, how to place an order, medical referrals and more.</span>
          <span className='text-center text-sm'>Tap the icon in the bottom or the bottom right hand corner of your screen to chat.</span>
        </div>

        <div className='flex flex-col items-center justify-center text-center text-sm text-[#595959]'>
          <span>Monday to Friday 9am - 6pm</span>
          <span>Saturday & Sunday close</span>
        </div>
      </div>

      <div className='border border-[#233f3b] h-full min-h-[282px]  w-full flex items-center justify-between flex-col gap-4 p-3  '>
        <div className='w-10 h-10 rounded-full  text-center flex items-center justify-center mt-4 '>
          <FiPhoneCall className='w-8 h-8 text-center' />
        </div>
        <div className='flex flex-col items-center justify-center  px-12'>
          <span className='text-center text-lg text-[#16302c] '>Call Us</span>
          <span className='text-center text-sm'>UK: <span className='underline'>033 3577 3800</span> </span>
          <span className='text-center text-sm'>International: <span className='underline'>+44 (0) 333 577 3800</span> </span>
        </div>
        <div className='text-base font-semibold text-center'>Contact Centre opening times</div>
        <div className='flex flex-col items-center justify-center text-center text-sm text-[#595959]'>
          <span>Monday to Friday 9am - 6pm</span>
          <span>Saturday & Sunday close</span>
        </div>
      </div>

      <div className='border border-[#233f3b] h-full min-h-[282px]  w-full flex items-center justify-between flex-col gap-4 p-3  '>
        <div className='w-12 h-12 rounded-full bg-[#233f3b] text-center flex items-center justify-center mt-4 '>
          <TbBrandWechat className='w-10 h-10 text-center text-white' />
        </div>
        <div className='flex flex-col items-center justify-center  px-12'>
          <span className='text-[#16302c] text-center'>WeChat</span>
          <Image
            src={"/images/icons/QRCode.jpg"}
            width={120}
            height={120}
            alt='QR' />
        </div>
        <span className=' text-sm text-[#595959] text-center'>We aim to response in 1 hour during normal work time</span>
      </div>

      <div className='border border-[#233f3b] h-full min-h-[282px]  w-full flex items-center gap-4 flex-col justify-between p-3  '>
        <div className='w-12 h-12 rounded-full  text-center flex items-center justify-center mt-4 '>
          <GrLocation className='w-10 h-10  text-center' />
        </div>
        <div className='flex flex-col items-center justify-center px-12'>
          <span className='text-[#16302c] text-lg'>MEDii Adddress</span>
          <span className='text-center text-base text-[#212529]  '>Testing Address : <span className='underline'>67 Upper Berkeley Street,London, W1H 7QX</span> </span>
        </div>
        <div className='flex flex-col items-center justify-center text-center text-sm text-[#595959]'>
          <span>Monday to Friday 9am - 6pm</span>
          <span>Saturday & Sunday close</span>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails