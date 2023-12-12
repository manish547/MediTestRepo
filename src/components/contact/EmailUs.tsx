import Link from 'next/link'
import React from 'react'

const EmailUs = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-3 '>
            <div className='text-base font-light text-center text-[#16302c] my-[50px]'>EmailUs</div>
            <div className='flex flex-col items-center gap-1'>
                <span>Our Customer Services team aims to respond to your email within 24 hours.</span>
                <a rel="stylesheet" href="mailto:info@mediihealth.com" target="_blank" >info@mediihealth.com</a>
                <span>You might also find useful information on our website</span>
            </div>
            <div className='flex flex-col items-center justify-center w-full gap-5 mt-9'>

                <div className='w-full flex flex-col items-center gap-5 '>
                    <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-5'>
                        <span className='text-base font-semibold mb-2 '>Please enter your details：</span>

                        <select className='border  h-[50px] border-[#16302c] w-1/2 py-1 pr-9 pl-3 rounded' >
                            <option className='px-1 ' value="Mr">Mr</option>
                            <option className='px-1 ' value="Miss">Miss</option>
                            <option className='px-1 ' value="Mrs">Mrs</option>
                        </select>
                    </div>


                    <input type="text" placeholder='First name (required)' className='border  h-[50px] border-[#16302c] w-full md:w-1/2 py-1 pr-9 pl-3 rounded' />
                    <input type="text" placeholder='Last name (required)' className='border  h-[50px] border-[#16302c] w-full md:w-1/2 py-1 pr-9 pl-3 rounded' />
                    <input type="email" placeholder='Email Address (required)' className='border  h-[50px] border-[#16302c] w-full md:w-1/2 py-1 pr-9 pl-3 rounded' />
                    <input type="text" placeholder='Contact Number (required)' className='border  h-[50px] border-[#16302c] w-full md:w-1/2 py-1 pr-9 pl-3 rounded' />
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-5'>
                    <span className=' w-full md:w-1/2 text-base font-semibold mb-2 '>Tell us more about your query</span>
                    <input type="text" placeholder='First name (required)' className='border  h-[50px] border-[#16302c] w-full md:w-1/2 py-1 pr-9 pl-3 rounded' />
                    <textarea rows={50} cols={50} placeholder='Content cannot be empty' className='border  h-[200px] border-[#16302c] w-full md:w-1/2 py-1 pr-9 pl-3 rounded' />

                </div>
                <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-3'>
                    <button className='text-white bg-[#223f3b] px-5 py-2 rounded  flex items-start justify-start '>
                        Submit
                    </button>
                </div>
            </div>


        </div>
    )
}

export default EmailUs