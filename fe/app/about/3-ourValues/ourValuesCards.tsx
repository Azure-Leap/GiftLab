import { giftLabValuesData } from '@/data/intro-home/GiftLabValues'
import React from 'react'
import OurValuesCard from './ourValuesCard'

const OurValuesCards = () => {
  return (
    <div className='grid grid-cols-2 gap-14 mt-14'>
        {
            giftLabValuesData.map((value, idx) => <OurValuesCard key={idx} {...value}/>)
        }
    </div>
  )
}

export default OurValuesCards