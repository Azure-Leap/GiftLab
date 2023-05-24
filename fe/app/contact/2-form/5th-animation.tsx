import BlackButtonWithHoverEffect, { PurpleButtonWithHoverEffect } from '@/app/component/common/ButtonWithHoverEffect'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineSparkles } from 'react-icons/hi'
// import BlackButtonWithHoverEffect, { PurpleButtonWithHoverEffect } from '../../../common/ButtonWithHoverEffect'

const HomeIntroContactForm5thAnimation = () => {
  return (
    <div className='text-black font-bold flex gap-5 flex-col w-[60%]'>
        <div className='p-[30px] flex gap-4 items-center bg-[#ffe4b0] rounded-[21px]'>
          <div>
            <img className='w-[34px] h-[34px]' src="https://assets.website-files.com/6316200a92cc0efb7ac10dbc/631bb50b6cff1f59d2abf131_icon-1-contact-rocket-template.svg" alt="" />
          </div>
          <div>
            <p className='text-[18px] font-medium'>Email us</p>
            <p className='text-[18px] font-bold'>giftlab@gmail.com</p>
          </div>
        </div>
        {/*  */}
        <div className='p-[30px] bg-[#e1e0ff] rounded-[21px] flex gap-4 items-center '>
          <div>
            <img className='w-[34px] h-[34px]' src="https://assets.website-files.com/6316200a92cc0efb7ac10dbc/631bb50b64db467a740e58ea_icon-2-contact-rocket-template.svg" alt="" />
          </div>
          <div>
            <p className='text-[18px] font-medium'>Call us</p>
            <p className='text-[18px] font-bold'>+97695981896</p>
          </div>
        </div>
    </div>
  )
}

export default HomeIntroContactForm5thAnimation