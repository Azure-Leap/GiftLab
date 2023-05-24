import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineSparkles } from 'react-icons/hi'
import BlackButtonWithHoverEffect, { PurpleButtonWithHoverEffect } from '../../../common/ButtonWithHoverEffect'

const HomeIntroHero5thAnimation = () => {
  return (
    <div className='text-white font-bold flex gap-5'>
        <BlackButtonWithHoverEffect btnName='Get in touch' href='/contactUs'/>
        <PurpleButtonWithHoverEffect btnName ='Our Services' href='/services'/>
    </div>
  )
}

export default HomeIntroHero5thAnimation