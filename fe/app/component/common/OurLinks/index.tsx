import { ourLinksData } from '@/data/intro-home/ourLinks'
import React from 'react'
import { GiftLabSocialLink } from './link'

const GiftLabSocialLinks = ({bgColor, textColor} : any) => {
  return (
    <div className='flex gap-2'>
      {ourLinksData.map((link, idx) => <GiftLabSocialLink key={idx} icon={link.icon} href={link.href} bgColor={bgColor} textColor={textColor}/>)}
    </div>
  )
}

export default GiftLabSocialLinks