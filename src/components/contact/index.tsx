import React from 'react'
import ContactDetails from './ContactDetails'
import EmailUs from './EmailUs'

const ContactPage = () => {
  return (
    <div className='w-full sm:container px-3 lg:px-12 sm:mx-auto flex flex-col items-center justify-center gap-5 mb-[90px] '>

      <div className='flex flex-col items-center justify-center  my-auto '>
        <span className='text-3xl mt-12 text-center font-light'>Contact Us</span>
        <span className='text-lg mt-5 text-[#7f868e]'>We're always delighted to hear from you.</span>
        <span className='text-lg mt-2 leading-10 text-[#7f868e]'>You may find answers to your questions via the links provided. If not, please get in touch using one of the methods below.</span>
      </div>

      <div className='bg-[#f5f5f5] py-5 w-full flex flex-col items-center justify-center gap-5 '>
        <span className='text-center text-2xl text-[#233f3b]  '>Useful quick links</span>
        <div className='flex flex-wrap items-center justify-between w-full px-5 gap-5 lg:px-32'>
          <a href="#" className='underline text-[15px] text-[#233F38]'>Hospital List</a>
          <a href="#" className='underline text-[15px] text-[#233F38]'>Resources</a>
          <a href="#" className='underline text-[15px] text-[#233F38]'>My Account</a>
          <a href="#" className='underline text-[15px] text-[#233F38]'>FAQs</a>
          <div onClick={() => window.open('/pdfs/MediiTerms&Conditions.pdf', '_blank')} className="cursor-pointer">
            <span className="block capitalize underline text-[15px] text-[#233F38]">Term & Condition</span>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <ContactDetails />
      </div>
      <div className='w-full'>
        <EmailUs />
      </div>
    </div>
  )
}

export default ContactPage