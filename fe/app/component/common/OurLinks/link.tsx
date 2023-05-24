import Link from 'next/link'
import React from 'react'

export const GiftLabSocialLink = ({href, icon, bgColor, textColor} : any) => {
  return (
    <div className={`w-[31px] h-[31px] ${bgColor} ${textColor} flex justify-center items-center rounded-[312132px] hover:bg-intro-home-btn duration-[300ms] hover:-translate-y-1 cursor-pointer`}>
      <Link href={href}>
        <span>{icon}</span>
      </Link>
    </div>
  )
}
