import React, { useState } from 'react'
import { BsCalendarCheck, BsStars } from 'react-icons/bs'
import {motion, AnimatePresence} from 'framer-motion'
import { AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai'
import { MdTaskAlt } from 'react-icons/md'
import { HiOutlineSparkles } from 'react-icons/hi'
import { FiMoreVertical } from 'react-icons/fi'
import { TiStarFullOutline } from 'react-icons/ti'
import { useDashboardType } from '@/context/dashboard'

const StructureGridPayment = () => {
  const {setDashboardBarsState ,isDashboardBars} = useDashboardType();
  const [IssparkleIconHover, setSparkleIconHover] = useState(false)
  const percentage = 500 / 10 + '%'



  return (
    <motion.div onMouseOver={()=>setSparkleIconHover(false)}  layout transition={{delay : 0.35}} initial={{opacity:0, scale : 0.8}} animate ={{opacity:1, scale : 1}} exit = {{opacity:0, scale : 0.8}} className=' rounded-[20px] group p-[0_16px] flex flex-col gap-4  '>
        
        {/* いつ投稿した？ */}
          <div  className='flex items-center gap-2 justify-between w-full'>
            {/* <span><BsCalendarCheck/></span> */}
            <p className='text-[12px] text-posts-description font-medium '>2024-01-12</p>
            <div  className='gap-1 flex items-center relative'>
              <span> <TiStarFullOutline color='#FFD95A' size={18}/></span>
              <AnimatePresence>
                {IssparkleIconHover && (
                  <motion.div initial={{scale:0.3}} animate={{scale:1, transformOrigin:'center'}} exit={{scale:0}}  className='p-1 absolute rounded-[5px] bg-black'>
                      4/5
                  </motion.div>
                )}
              </AnimatePresence>
              <span><FiMoreVertical/></span>
            </div>
          </div>
        <div className='flex items-center gap-3'>


                <div>
                  <p className='font-semibold text-signed-in-black duration-300 hover:translate-x-1 hover:text-purple'>Mobazane takes advantage and btk winning NACT</p>
                  
                </div>
        </div>

        {/* bottom of the card iow body */}
        <div className=' bg-white flex flex-col justify-between gap-4'>
            <div className='flex flex-col gap-2'>









                {/* 集まった金 */}
                <div className='flex relative flex-col'>
                  <div className='flex justify-between text-[14px] medium'>
                    <p>Progress</p>
                    <p>50%</p>
                  </div>
                  {/* <span><MdTaskAlt color='#03c988'/></span> */}
                  <div className='w-[100%] bg-[rgba(3,201,136,0.5)]  h-[10px] rounded-[20px] overflow-hidden'>
                      <div className={`w-[50%] h-full bg-[#03C988] rounded-[20px]`}></div>
                  </div>
                  

                </div>


                {/* <p className='text-[14px] text-posts-description'>$5000.00 / $10000.00</p> */}

                                  {/* 残った時間 */}
                <div className='flex items-center justify-between'>
                                  {/* 残った量 */}
                  <div className='flex items-center gap-2'>
                    <span><AiOutlineHeart color='#FD5D5D'/></span>
                    <p className='text-[14px] text-posts-description'>20</p>
                  </div>
                  {/* <span><AiOutlineClockCircle color='#FFD93D'/></span> */}
                  <p className='text-[14px] text-posts-description'>5 day left</p>
                </div>




                {/* TITITITIT */}
            </div>
            {/* <div className='pt-6 pb-2 flex justify-between border-t-2 font-bold '>
                <div className='flex gap-1 text-purple items-center duration-300 hover:translate-x-1 hover:text-signed-in-black'>
                    <p>Protect Chiaki</p>
                    <span><BsStars/></span>
                </div>
                <div className='flex gap-1 items-center duration-300 hover:translate-x-1 hover:text-purple'>
                    <Link href={{pathname : `/posts/${id}`, query : {title, description, image, id, aboutUs, whatWeWannaDo, carouselImg, type}}}>
                        Preview
                    </Link>
                    <span className=''><BsStars/></span>
                </div>
            </div> */}
        </div>
  </motion.div> 
  )
}

export default StructureGridPayment