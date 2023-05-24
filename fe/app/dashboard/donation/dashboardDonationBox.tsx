import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

import { useDashboardType } from '@/context/dashboard'
import StructureBarsDonation from './structure-bars-donation'
import StructureGridDonation from './structure-grid-donation'


const DashboardPaymentBox = () => {

  const {setDashboardBarsState ,isDashboardBars} = useDashboardType();

  return (
    <AnimatePresence>
      <motion.div layout transition={{duration : 0.5}} className={`${ isDashboardBars ? 'h-[100px] col-span-4 grid grid-cols-9 gap-2  p-2  content-center' : ' col-span-1 h-[250px]  bg-[rgba(74,161,219, 0.3)] flex justify-center items-center'} bg-white shadow-[0_0_4px_rgba(0,0,0,0.2)] rounded-[20px]  `}>
        {isDashboardBars ? <StructureBarsDonation/> : <StructureGridDonation/>}
      </motion.div>
    </AnimatePresence>  
  )
}

export default DashboardPaymentBox