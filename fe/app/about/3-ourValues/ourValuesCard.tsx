import React from 'react'

const OurValuesCard = ({bg, title, img} : any) => {
  return (
    <div className={`col-span-1 grid grid-cols-11 p-[53px_39px] ${bg} rounded-[32px] `}>
        <div className=' col-span-2 flex items-start'>
            <img className='h-[80px] w-[80px]' src={img} alt="" />
        </div>
        <div className='col-span-9 flex flex-col gap-2'>
            <p className='text-[22px] font-semibold'>{title}</p>
            <p className='text-[18px] font-medium text-[#39394f] leading-[1.66rem]'>Sociis pellentesque et erat elementum felis commodo tincidunt eget aliquet in hac diam tincidunt eget ut nulla nunc et non euismod est.</p>
        </div>
    </div>
  )
}

export default OurValuesCard