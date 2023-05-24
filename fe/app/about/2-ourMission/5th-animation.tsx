import BlackButtonWithHoverEffect, { PurpleButtonWithHoverEffect } from '@/app/component/common/ButtonWithHoverEffect'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineSparkles } from 'react-icons/hi'
// import BlackButtonWithHoverEffect, { PurpleButtonWithHoverEffect } from '../../../common/ButtonWithHoverEffect'

const HomeIntroAbout5thAnimation = () => {
  return (
    <div className='text-white font-bold flex gap-5'>
        <BlackButtonWithHoverEffect btnName='Join Our Team' href='/contactUs'/>
    </div>
  )
}

export default HomeIntroAbout5thAnimation