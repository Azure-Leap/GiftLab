import React from 'react'
import {motion, AnimatePresence } from 'framer-motion'
import { useDashboardType } from '@/context/dashboard';
import DashboardPaymentBox from './DashboardPaymentBox';
// import DashboardEventBox from './DashboardEventBox';
const PaymentDashboard = () => {

  const {setDashboardBarsState ,isDashboardBars} = useDashboardType();

  return (
        <motion.div initial={{y : -100, opacity : 0}} animate={{y:0, opacity :1}} exit={{y:50}}>
                {/* DAshboard Title */}
                <AnimatePresence>
                    {isDashboardBars && (
                                        <motion.div layout initial={{opacity : 0}} animate ={{opacity : 1}} className=' h-[50px] w-full bg-transparent rounded-[10px] grid grid-cols-9 p-[14px_50px_0_50px] gap-2  '>
                                            {/* Product Pic */}
                                            <div className='flex items-center'>
                                                <p>Product img </p>
                                            </div>
                                           
                                            {/* Product name */}
                                            <div className='h-full col-span-2 flex items-center '>
                                                <p>Product Name</p>
                                            </div>
                        
                                            {/* Event members icon */}
                                                <div className='flex col-span-2 items-center justify-start '>
                                                    <p>Rating</p>
                                                </div>

                                            {/* EVENT Atsumatta */}
                                            <div className='col-span-1 flex justify-start items-center '>
                                                <p>集まった</p>
                                            </div>
                                            
                                            {/* Date */}
                                            <div className='col-span-1 text-center flex items-center '>
                                                <p>Date</p>
                                            </div>

                                            {/* Nokoru */}
                                            <div className='col-span-1 flex items-center'>
                                                <p>続いてる？</p>
                                            </div>

                        
                        
                        
                                                <div className='flex gap-3 items-center col-span-1 justify-center  '>
                                                    <p>Controls</p>
                                                </div>
                                            </motion.div>
                    )}
                </AnimatePresence>


                {/* Posts, Events, Donations */} 
              <motion.div layout className={`p-[0.5rem_2rem]  flex-col gap-5 overflow-y-scroll ${isDashboardBars ?  'h-[65vh] grid-cols-4' : 'h-[72vh] pt-8 grid-cols-4'} grid `}>
                    {[1,1,1,1,1,1,1].map((event, idx) => <DashboardPaymentBox key={idx}/>)}
                </motion.div>
        </motion.div>
  )
}

export default PaymentDashboard