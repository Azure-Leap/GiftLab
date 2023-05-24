import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { HiArrowRight, HiOutlineArrowNarrowRight, HiOutlineArrowRight, HiOutlineArrowSmRight } from 'react-icons/hi'

const ServiceCard = ({title, index, mainImg, swiperStyle } : any) => {
  
  return (
    <div className={`p-[70px_42px] flex flex-col gap-10  rounded-[30px] duration-[300ms] cursor-pointer group`}>
        <div className='w-[60%]'>
            <img className={`w-full ${swiperStyle == index && 'scale-[1.04]'} duration-[300ms]`} src={mainImg} alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[28px] font-semibold'>{title}</p>
          <p className='text-[18px] font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Link href='#'>
        <div className={`flex gap-[8px] items-center`}>
          <span className={`text-[18px] font-semibold duration-[300ms]  ${swiperStyle == index && 'text-intro-home-btn'}`}> Learn more </span>
          <span className={`${swiperStyle == index && 'translate-x-1 text-intro-home-btn'} duration-[300ms]`}><HiOutlineArrowNarrowRight size={30}/></span>
        </div>
        </Link>
    </div>
  )
}

export default ServiceCard