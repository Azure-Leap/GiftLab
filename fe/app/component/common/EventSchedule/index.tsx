import React from 'react'

const EventSchedule = ({hour} : any) => {

  return (
    <div className='flex gap-1 relative w-full'>
        <p className='text-[14px]'>{hour}</p>
        <div className='w-full border-t-2 border-gray-400 absolute top-[50%] left-[18%] '></div>
    </div>
  )
}

export default EventSchedule