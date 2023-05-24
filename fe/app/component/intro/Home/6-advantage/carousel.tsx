import { advatageDatas } from '@/data/intro-home/advantage'
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

const CarouselLongEars = () => {
   const datas = [...advatageDatas]
   const [count, setCount] = useState(0)
   const [saver, setSaver] = useState([null, count]);

   if(saver[1] !== count) setSaver([saver[1], count])
   let prev: any = saver[0];

   let whichBtn = count > prev ? 'next' : 'prev';

   let variants = {
    initial : (whichBtn : any) => ({x : whichBtn == 'next' ? 100 : -100}),
    animate :  {x:0},
    exit : (whichBtn : any) => ({x : whichBtn == 'prev' ? -100 : 100}),
  }

  return (
    <div className='flex gap-14 items-center justify-between my-[50px]'>

        <button onClick={()=> setCount(count - 1 == -1 ? 2 : count - 1)} className='p-[20px] bg-default-black flex justify-center items-center text-white rounded-[329999px] mx-8'><HiArrowLeft size={40}/></button>
        <AnimatePresence custom={whichBtn}>
            <motion.div key={count} variants={variants} custom={whichBtn}  initial='initial' animate ='animate'  transition={{duration : 0.8, delay :0.8}}   className={`flex justify-center  items-center ${datas[count].bg}] rounded-[40px]`}>
                <div className='flex-1 w-full'>
                    <img  className='w-full duration-300' src={datas[count].img} alt="" />
                </div>
                <div className='flex flex-col gap-3 p-[100px_69px_100px_0] flex-1'>
                    <p className='text-[28px] font-semibold'>{datas[count].title}</p>
                    <p className='leading-[1.66rem] font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Atque ut nobis reprehenderit quibusdam doloribus non <br /> consequatur numquam  veritatis fuga modi?</p>
                </div>
            </motion.div>
        </AnimatePresence>
        <div onClick={()=> setCount(prev => prev + 1 == 3 ? 0 : prev + 1)} className='p-[20px] bg-default-black flex justify-center items-center text-white rounded-[2000000px]'><HiArrowRight size={40}/></div>
    
    </div>
  )


}

export default CarouselLongEars