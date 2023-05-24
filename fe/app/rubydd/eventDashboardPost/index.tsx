import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import {AnimatePresence, motion} from 'framer-motion'

const EventDashboardPost = ({post, setIsUserPostClicked, isUserPostClicked} : any) => {
    const {title, id, upcoming} = post
  return (
    <div onClick={()=>{
        setIsUserPostClicked(id)
    }} className='relative'>
        <div className='w-[300px]  p-5   flex flex-col justify-between gap-10  z-40 '>
        <div className='flex flex-col gap-3'>
            <p className='text-[18px] font-normal z-30 mix-blend-exclusion text-white tracking-[0.04rem]'>{title}</p>
            <div className='flex '>
                <div className='w-[40px] h-[40px] rounded-[25px] relative flex items-center z-30'>

                    <div className='w-[40px] h-[40px]  rounded-[25px] border-[1.3px] bg-[#000] mix-blend-exclusion p-[2px] border-[#D4ADFC] absolute top-[0] left-[0]'>
                        <img className='w-full rounded-[25px]' src="https://i.pinimg.com/564x/45/35/cf/4535cfdc80a589ed1e2df9eb40ba8a2c.jpg" alt="" />
                    </div>

                    {/* absolute pictures */}
                    <div className='w-[40px] h-[40px] rounded-[25px] border-[1.3px] bg-[#000] p-[2px] border-[#D4ADFC] absolute top-[0] left-[22px]'>
                        <img className='w-full rounded-[25px]' src="https://i.pinimg.com/564x/39/fd/72/39fd72a4478484e523734f0734fd488e.jpg" alt="" />

                    </div>
                    <div className='w-[40px] h-[40px] rounded-[25px] border-[1.3px] bg-[#000] p-[2px] border-[#D4ADFC] absolute top-[0] left-[44px]'>
                        <img className='w-full rounded-[25px]' src="https://i.pinimg.com/564x/43/cd/7c/43cd7c65d590d2f41c05a23f3dfe82d4.jpg" alt="" />
                    </div>
                    <div className='w-[40px] h-[40px] rounded-[25px] border-[1.3px] bg-[#000] p-[2px] border-[#D4ADFC] absolute top-[0] left-[66px]'>
                        <img className='w-full rounded-[25px]' src="https://i.pinimg.com/564x/44/a2/88/44a288c233f2c9121468abb62d6fbcf5.jpg" alt="" />
                    </div>
                    <div className='w-[40px] h-[40px] rounded-[25px] border-[1.3px] bg-[#000] p-[2px] border-[#D4ADFC] absolute top-[0] left-[88px]'>
                        <img className='w-full rounded-[25px]' src="https://i.pinimg.com/564x/c3/a5/6f/c3a56fd36c7e8fd54cef8cbdac00de41.jpg" alt="" />
                    </div>
                    <div className='w-[40px] h-[40px] bg-[#e7e8f0] rounded-[25px] border-[1.3px] p-[1.5px] border-[#D4ADFC] absolute top-[0] left-[110px] flex items-center justify-center'>
                        <p className='text-[12px] z-30 text-[#D4ADFC]'>+18</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='flex justify-between items-center border-b-2 border-[#B7B7B7] pb-3 '>
                <div className='flex gap-2'>
                    <p className='font-light text-[#9BA4B5] z-30'>Starts in</p>
                    <p className='z-30 mix-blend-exclusion text-white font-medium'>{upcoming}</p>
                </div>
                <div>
                    <span className='z-30 mix-blend-exclusion text-white'><FaChevronRight/></span>
                </div>
            </div>
        </div>
        {isUserPostClicked === id && <AnimatePresence><motion.div layoutId="layout" className=" w-full h-full top-0 rounded-[32px] absolute bg-[#000] z-0"/></AnimatePresence>}
    </div>
  )
}

export default EventDashboardPost