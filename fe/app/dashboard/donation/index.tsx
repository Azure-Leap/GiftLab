import React from 'react'
import {motion, AnimatePresence } from 'framer-motion'
import { useDashboardType } from '@/context/dashboard';
import DashboardDonationBox from './dashboardDonationBox';
// import DashboardEventBox from './DashboardEventBox';
const DonationDashboard = () => {

  const {setDashboardBarsState ,isDashboardBars} = useDashboardType();

  return (
        <motion.div initial={{y : -100, opacity : 0}} animate={{y:0, opacity :1}} exit={{y:50}}>
                {/* DAshboard Title */}
                <AnimatePresence>
                    {isDashboardBars ? (
                                        <motion.div layout initial={{x : -50}} animate ={{x :0}} exit={{x:-50}} className=' h-[50px] w-full bg-transparent rounded-[10px] grid grid-cols-8 p-[0_50px_0_50px] gap-2  '>
                                            {/* Img */}
                                            <div className='h-full col-span-1 flex items-center '>
                                                <p>Event profile</p>
                                            </div>
                        
                                            {/* EVENT TITLE */}
                                            <div className='col-span-2 text-center flex items-center '>
                                                <p>Event Title</p>
                                            </div>
                        
                                            {/* Members kazu */}
                                            <div className='flex gap-1 items-center font-medium col-span-1'>
                                                <p>Kazu</p>
                                            </div>
                        
                                            {/* EVENT RATE */}
                                            <div className='col-span-1 flex justify-start items-center '>
                                                <p>Date</p>
                                            </div>
                        
                        
                                            {/* Event members icon */}
                                                <div className='flex col-span-2 items-center justify-start '>
                                                    <p>Members profile</p>
                                                </div>
                        
                                                <div className='flex gap-3 items-center col-span-1 justify-center  '>
                                                    <p>Controls</p>
                                                </div>
                                            </motion.div>
                    ) : (
                        <motion.div className='w-full bg-transparent rounded-[10px] flex  p-[10px_50px] ' initial={{opacity : 0}} animate={{opacity:1}} exit={{opacity:0}}>
                            <motion.p initial={{x:-50}} animate={{x:0}} exit={{x:-50}} className=''>Events</motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>


                {/* Posts, Events, Donations */}
                <motion.div layout className={`p-[0.5rem_2rem]  flex-col gap-5 overflow-y-scroll ${isDashboardBars ?  'h-[65vh]' : 'h-[72vh]'} grid grid-cols-4`}>
                    {[1,1,1,1,1,1,1].map((event, idx) => <DashboardDonationBox key={idx}/>)}
                </motion.div>
        </motion.div>
  )
}

export default DonationDashboard