import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { GoPencil } from 'react-icons/go'
import { CgMoreVerticalAlt } from 'react-icons/cg'
import { useDashboardType } from '@/context/dashboard'
const StructureBars = () => {

  const {setDashboardBarsState ,isDashboardBars} = useDashboardType();

  return (
    <>
           {/* Img */}
           <div className='col-span-1 rounded-[10px] grid content-center  overflow-hidden'>
            <img className='object-cover w-[80%]' src="https://i.pinimg.com/474x/7a/22/8a/7a228aeed2dfc7f84a738e708ee2cbd9.jpg" alt="" />
          </div>

          {/* Title */}
          <div className='font-medium col-span-2  grid content-center  tracking-[0.04rem]'>
            <motion.p layout>Faito! Faito!</motion.p>
          </div>

          {/* Rating */}
          <div className='col-span-2'>

          </div>

          {/* Atsumatta kane */}
          <div className='font-medium col-span-1  grid content-center  tracking-[0.04rem]'>
            <p>$500/$1000</p>
          </div>

          {/* Date */}
          <div className='col-span-1  grid content-center'>
              <p>2024-01-12</p>
          </div>

          {/* 続いてる */}
          <div className='col-span-1 grid content-center'>
              <p>True</p>
          </div>

          <motion.div layout className={`flex items-center justify-center gap-3 text-[#dcd9ec] ${isDashboardBars ? 'col-span-1' : 'col-span-3  row-span-1'} ` }>
            <motion.div layout className='rounded-[321px] border-2 p-[7px] flex justify-center items-center outline  duration-300 hover:text-[#000] hover:border-[#000] hover:outline hover:outline-offset-2  cursor-pointer'> 
              <GoPencil size={20}/>
            </motion.div>
            <motion.div layout className='rounded-[321px] border-2 p-[7px] flex justify-center items-center  outline  duration-300 hover:text-[#000] hover:border-[#000] hover:outline hover:outline-offset-2 cursor-pointer'> 
              <CgMoreVerticalAlt size={20}/>
            </motion.div>

          </motion.div>

    </>
  )
}

export default StructureBars