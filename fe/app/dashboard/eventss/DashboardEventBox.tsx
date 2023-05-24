import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { HiOutlineCalendar } from 'react-icons/hi'
import { FiMoreVertical } from 'react-icons/fi'
import { IoPeopleOutline } from 'react-icons/io5'
import { AiOutlineMore } from 'react-icons/ai'
import { CgMoreVerticalAlt } from 'react-icons/cg'
import { BsCalendarCheck, BsPencil } from 'react-icons/bs'
import { GoPencil } from 'react-icons/go'
// import {motion, AnimatePresence} from 'framer-motion'
import { useDashboardType } from '@/context/dashboard'

const DashboardEventBox = () => {

  const {setDashboardBarsState ,isDashboardBars} = useDashboardType();

  return (
    <AnimatePresence>
      <motion.div layout transition={{duration : 0.5}} className={`${ isDashboardBars ? 'h-[100px] col-span-4 grid grid-cols-8 gap-2  p-2' : 'p-[16px_12px] h-[440px] grid col-span-1 grid-rows-6 grid-cols-12 gap-4'} bg-white shadow-[1.5px_2px_6px_rgba(0,0,0,0.5)] rounded-[10px]   content-center`}>
        {/* Img */}
        <motion.div layout className={`${isDashboardBars ? 'col-span-1 rounded-[10px] grid content-center  overflow-hidden ' : 'col-span-12  row-span-5 p-[8px_4px]  rounded-[20px] flex gap-2'}  `}>
          <motion.img layout className={`  ${isDashboardBars ? ' w-[80%]' : 'w-[50%] object-cover h-[250px] rounded-[12px]   shadow-[1.5px_2px_6px_rgba(0,0,0,0.5)] '} p-1` }   src="https://i.pinimg.com/474x/38/e1/0b/38e10b3c42469740d450b9395127c593.jpg" alt="" />
          {!isDashboardBars && (
            <motion.div layout className='flex flex-col w-full gap-2'>
                <motion.img layout  className='h-1/2 object-cover rounded-[10px] p-1 shadow-[1.5px_2px_6px_rgba(0,0,0,0.5)]' src="https://i.pinimg.com/474x/c8/28/31/c828317b8140ae0d6ab7e9ea955e1a61.jpg" alt="" />
                <motion.img layout className='h-1/2 object-cover rounded-[10px] p-1 shadow-[1.5px_2px_6px_rgba(0,0,0,0.5)]' src="https://i.pinimg.com/474x/c8/28/31/c828317b8140ae0d6ab7e9ea955e1a61.jpg" alt="" />
            </motion.div>
          ) }
        </motion.div>

        {/* EVENT TITLE */}
        <div className={`font-medium ${isDashboardBars ? 'col-span-2  grid content-center  tracking-[0.04rem]' : 'px-2  col-span-12  row-span-1 tracking-[0.035rem] text-[17px] '}`}>
          <motion.p layout>Faito! Faito!</motion.p>
        </div>

        {/* Descriotion */}
        {/* {!isDashboardBars &&       <motion.div className='col-span-12 row-span-1 tracking-[0.035rem] text-[#454545]'>
                                    <motion.div transition={{delay : 0.4}} initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity:0}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quos.</motion.div>
                                  </motion.div>} */}

        {/* EVENT RATE */}
        <motion.div layout className={` ${isDashboardBars ? 'col-span-1  grid content-center' : 'px-2 col-span-9  row-span-1  tracking-[0.035rem] font-medium flex gap-2 items-center'}`}>
              <motion.div layout className=' shadow-[1.5px_2px_4px_rgba(0,0,0,0.3)] px-5 col-span-9  row-span-1  tracking-[0.035rem] font-medium flex gap-2 items-center rounded-[20px]'>
                {!isDashboardBars && <motion.span initial={{opacity : 0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay : 0.35}} ><BsCalendarCheck/></motion.span>}
                <motion.span layout>2024-01-12</motion.span>
              </motion.div>
        </motion.div>


        {/* Members kazu */}
        <motion.div layout  className={`flex items-center gap-1 font-medium ${isDashboardBars ? 'col-span-1' : 'col-span-3  row-span-1 flex justify-end px-2 bg-[#e7e8f0] rounded-[10px] shadow-[1.5px_2px_4px_rgba(0,0,0,0.3)]'}`}>
          <motion.span layout><IoPeopleOutline size={20}/></motion.span>
          <motion.p layout>18</motion.p>
        </motion.div>




        {/* Event members icon */}
        <motion.div layout className={`grid content-center ${isDashboardBars ? 'col-span-2' : 'col-span-8  row-span-1'}`}>
            <motion.div layout className='w-[40px] h-[40px] rounded-[324px] relative flex items-center'>

                <motion.div layout className='w-[40px] h-[40px] bg-black rounded-[324px] border-2 border-[#e7e8f0] absolute top-[0] left-[0]'>
                    <img className='w-full rounded-[324px] shadow-[1.5px_2px_6px_rgba(0,0,0,0.5)]' src="https://i.pinimg.com/564x/45/35/cf/4535cfdc80a589ed1e2df9eb40ba8a2c.jpg" alt="" />
                </motion.div>

                {/* absolute pictures */}
                <motion.div layout className='w-[40px] h-[40px] bg-black rounded-[324px] border-2 border-[#e7e8f0] absolute top-[0] left-[25px]'>
                    <img className='w-full rounded-[324px] shadow-[0px_2px_3px_rgba(0,0,0,0.3)]' src="https://i.pinimg.com/564x/39/fd/72/39fd72a4478484e523734f0734fd488e.jpg" alt="" />

                </motion.div>
                <motion.div layout className='w-[40px] h-[40px] bg-black rounded-[324px] border-2 border-[#e7e8f0] absolute top-[0] left-[50px]'>
                    <img className='w-full rounded-[324px] shadow-[0px_2px_3px_rgba(0,0,0,0.3)]' src="https://i.pinimg.com/564x/43/cd/7c/43cd7c65d590d2f41c05a23f3dfe82d4.jpg" alt="" />
                </motion.div>
                <motion.div layout className='w-[40px] h-[40px] bg-black rounded-[324px] border-2 border-[#e7e8f0] absolute top-[0] left-[75px]'>
                    <img className='w-full rounded-[324px] shadow-[0px_2px_3px_rgba(0,0,0,0.3)]' src="https://i.pinimg.com/564x/44/a2/88/44a288c233f2c9121468abb62d6fbcf5.jpg" alt="" />
                </motion.div>


              {isDashboardBars && (<><motion.div layout className='w-[40px] h-[40px] bg-black rounded-[324px] border-2 border-[#e7e8f0] absolute top-[0] left-[100px]'>
                                      <img className='w-full rounded-[324px] shadow-[0px_2px_3px_rgba(0,0,0,0.3)]' src="https://i.pinimg.com/564x/c3/a5/6f/c3a56fd36c7e8fd54cef8cbdac00de41.jpg" alt="" />
                                  </motion.div>
                                  <motion.div layout className='w-[40px] h-[40px] bg-black rounded-[324px] border-2 border-[#e7e8f0] absolute top-[0] left-[125px]'>
                                      <img className='w-full rounded-[324px] shadow-[0px_2px_3px_rgba(0,0,0,0.3)]' src="https://i.pinimg.com/474x/05/63/b2/0563b28a9b546ab617e069326e10d380.jpg" alt="" />
                                  </motion.div>
                                  <motion.div layout className='w-[40px] h-[40px] bg-black rounded-[324px] border-2 border-[#e7e8f0] absolute top-[0] left-[150px]'>
                                      <img className='w-full rounded-[324px] shadow-[0px_2px_3px_rgba(0,0,0,0.3)]' src="https://i.pinimg.com/474x/d2/65/20/d265208a6e2afb06bc1fdbf9fb18c9a2.jpg" alt="" />
                                  </motion.div>
                                  </>
                )}


                <motion.div layout className={`w-[40px] h-[40px] bg-[#e0e4ec] rounded-[324px] border-2 border-[#e7e8f0] absolute top-[0] ${isDashboardBars ? 'left-[175px]' : 'left-[100px]'} flex items-center justify-center`}>
                    <p className='text-[12px]'>+11</p>
                </motion.div>
            </motion.div>  
      
          </motion.div>

          <motion.div layout className={`flex items-center justify-center gap-3 text-[#dcd9ec] ${isDashboardBars ? 'col-span-1' : 'col-span-3  row-span-1'} ` }>
            <motion.div layout className='rounded-[321px] border-2 p-[7px] flex justify-center items-center outline  duration-300 hover:text-[#000] hover:border-[#000] hover:outline hover:outline-offset-2  cursor-pointer'> 
              <GoPencil size={20}/>
            </motion.div>
            <motion.div layout className='rounded-[321px] border-2 p-[7px] flex justify-center items-center  outline  duration-300 hover:text-[#000] hover:border-[#000] hover:outline hover:outline-offset-2 cursor-pointer'> 
              <CgMoreVerticalAlt size={20}/>
            </motion.div>

          </motion.div>

      </motion.div>
    </AnimatePresence>  
  )
}

export default DashboardEventBox