import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineArrowNarrowRight, HiOutlineSparkles } from 'react-icons/hi'

const BlackButtonWithHoverEffect = ({btnName, href} : any) => {
  return (
    <Link href={href}>
        <div className='flex group hover:-translate-y-1 duration-[300ms] '>
            <button className='p-[26px_38px] text-white bg-default-black rounded-[3rem] text-[18px] flex items-center gap-2 group-hover:bg-intro-home-btn duration-[300ms] font-bold  '>{btnName} <span className='font-extrabold text-[1.75rem] group-hover:translate-x-1 duration-[300ms]'><HiOutlineArrowNarrowRight size={30}/></span></button>
        </div>
    </Link>
  )
}

export const PurpleButtonWithHoverEffect = ({btnName, href} : any) => {
  return (
    <Link href={href}>
        <div className='flex group hover:-translate-y-[6px] duration-[300ms] '>
          <button className='p-[26px_38px] text-default-black border-2 border-default-black bg-transparent rounded-[3rem] text-[18px] flex items-center gap-5 group-hover:bg-intro-home-btn-hovered group-hover:border-intro-home-btn-hovered duration-[300ms]  '>{btnName} <span className='font-extrabold text-[1.75rem] group-hover:translate-x-1 duration-[300ms]'><HiOutlineSparkles/></span></button>
        </div>
    </Link>
  )
}

export default BlackButtonWithHoverEffect