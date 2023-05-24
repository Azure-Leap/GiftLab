import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import TheGiftedTeamMembers from '.'

// Type bichih

const TheGiftedTeamMember = ({img, name, typeOfEngineer, margin, fbLink,igLink,inLinks} : any) => {
  return (
    <div className={`col-span-1 flex flex-col gap-6 rounded-[40px] overflow-hidden ${margin}`}>
        <div className='w-full'>
            <img className='w-full rounded-[40px]' src={img} alt={name} />
        </div>
        <div className='text-center'>
            <p className='text-[28px] font-semibold tracking-[0.08rem] '>{name}</p>
            <p className='text-[#7371ff] font-bold text-[20px] tracking-[0.1rem] uppercase'>{typeOfEngineer}</p>
        </div>
        <div className='flex gap-7 justify-center items-center '>
            <Link href={fbLink}>
                <FaFacebookF size={24.5}/>
            </Link>
            <Link href={igLink}>
                <RiInstagramFill size={24.5}/>
            </Link>
            <Link href={inLinks}>
                <FaLinkedinIn size={24.5}/>
            </Link>
        </div>
    </div>
  )
}

export default TheGiftedTeamMember