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
import StructureBars from './structure-bars'
import StructureGridPayment from './structure-grid'

const DashboardPaymentBox = () => {

  const {setDashboardBarsState ,isDashboardBars} = useDashboardType();

  return (
    <AnimatePresence>
      <motion.div layout transition={{duration : 0.5}} className={`${ isDashboardBars ? 'h-[100px] col-span-4 grid grid-cols-9 gap-2  p-2  content-center' : ' col-span-1 h-[250px]  bg-[rgba(74,161,219, 0.3)] flex justify-center items-center'} bg-white shadow-[0_0_4px_rgba(0,0,0,0.2)] rounded-[20px]  `}>
        {isDashboardBars ? <StructureBars/> : <StructureGridPayment/>}
      </motion.div>
    </AnimatePresence>  
  )
}

export default DashboardPaymentBox