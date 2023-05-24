import React from 'react'
import { HiOutlineSparkles } from 'react-icons/hi'
import { motion} from 'framer-motion'

const ActivityCheersBtn = () => {
  return (
    <motion.div initial={{opacity : 0, y : 50}} animate={{opacity:1, y:0}} className="flex justify-start border-t-2 flex-col">
        {/* <p>total :{formatPrice(totalPrice)}</p> */} 
        <div className='flex justify-between text-[18px] py-4'>
            <p>Youre so cuuute!!</p>
        </div>
        {/* <button className="group hover:-translate-y-1 outline outline-[#ff6969] hover:outline-offset-[3px] duration-[300ms] py-3 mt-4 bg-[#FF6969] rounded-[20px] text-white text-[18px] w-full  mx-auto flex gap-2 justify-center items-center">
        <p>Donate Now</p>
        <span className='group-hover:translate-x-1 duration-[300ms]'><HiOutlineSparkles/></span></button> */}
    </motion.div> 
  )
}

export default ActivityCheersBtn