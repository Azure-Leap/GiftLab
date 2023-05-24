import { useDashboardType } from '@/context/dashboard'
import React from 'react'
import {motion} from 'framer-motion'
import OverviewDonation from './OverviewDonation'
import FixDude from '../component/fixDudeAnimation'


const OverviewPost = () => {
  const {prevDashboardTypeState} = useDashboardType()

  return <motion.div className='flex justify-center items-center h-full' initial={{opacity:0, y:-40}} animate={{opacity:1, y:0}}>
          <FixDude/>
        </motion.div>
  
}

export default OverviewPost