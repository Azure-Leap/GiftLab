import React from 'react'
import { HiOutlineSparkles } from 'react-icons/hi'
import {motion, AnimatePresence} from 'framer-motion'
import { useCartStore } from '@/context/store'

const PaymentOrderBtn = () => {
  const {setCheckout} = useCartStore()
  return (
    <AnimatePresence>
      <motion.div initial={{opacity : 0, y : 50}} animate={{opacity:1, y:0}} className="flex justify-start border-t-2 border-dashed flex-col">
          {/* <p>total :{formatPrice(totalPrice)}</p> */} 
          <div className='flex justify-between text-[18px] py-4'>
              <p>Total</p>
              <p className='font-semibold'>$40</p>
          </div>
          <button onClick={()=>{
              setCheckout('checkout')
          }} className="group hover:-translate-y-1 outline outline-[#ff6969] hover:outline-offset-[3px] duration-[300ms] py-3 mt-4 bg-[#FF6969] rounded-[20px] text-white text-[18px] w-full  mx-auto flex gap-2 justify-center items-center">
            <p>Order Now</p>
            <span className='group-hover:translate-x-1 duration-[300ms]'><HiOutlineSparkles/></span>
          </button>
      </motion.div> 
    </AnimatePresence>
  )
}

export default PaymentOrderBtn