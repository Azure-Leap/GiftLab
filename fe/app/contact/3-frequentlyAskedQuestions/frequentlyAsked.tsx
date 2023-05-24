import React, { useEffect, useRef, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { GrAdd } from 'react-icons/gr'
import gsap from 'gsap';
const IntroContactFrequentlyAskedQuestions = ({question, answer} : any) => {
    const [isClicked, setIsClicked] = useState(false);
    let icon : any = useRef()
    function rotate45Deg (){
        !isClicked ? gsap.to(icon, {rotateZ : 45, duration:0.2}) : gsap.to(icon, {rotate : 0, duration : 0.2})
    }
  return (
   <AnimatePresence>
         <motion.div
            onClick={()=>{
                rotate45Deg()
                setIsClicked(!isClicked);
            }} 
            className={` hover:scale-[0.98] duration-[300ms] cursor-pointer p-[48px_68px] text-[24px] font-semibold tracking-[0rem] bg-[#e1e0ff] flex ${!isClicked ? 'items-center' : 'items-start' } gap-6 rounded-[40px] w-[960px]`} >
                {/* ICON */}
                <motion.div layout className='border-default-black border-2 p-[10px] flex justify-center items-center rounded-[213px] bg-white'>
                    <span ref={el=>icon=el}><GrAdd/></span>
                </motion.div>
                <motion.div>
                    <motion.p>{question}</motion.p>
                    <AnimatePresence>
                        {isClicked && (
                        <motion.p initial={{height : 0}} animate={{height : 'auto'}} exit={{height : 0}} transition={{duration:0.3}} className=' overflow-hidden text-[18px] text-[#39394f] font-medium tracking-[0.01rem] leading-[2.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.</motion.p>
                        )}           
                    </AnimatePresence>   
                </motion.div>
        </motion.div>
   </AnimatePresence>
  )
}

export default IntroContactFrequentlyAskedQuestions