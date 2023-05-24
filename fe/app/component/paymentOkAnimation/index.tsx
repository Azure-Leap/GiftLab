import React from 'react'
import {motion} from 'framer-motion'
import {Player} from '@lottiefiles/react-lottie-player'
import orderLoadsUp from '@/public/Animations/paymentOk.json'


const OrderLoadsUp = () => {
  return (
    <motion.div initial={{opacity: 0, scale : 0.7}} animate={{opacity:1, scale : 1}} className='flex items-center justify-center flex-col mt-24'>
        <motion.h1 initial={{opacity : 0, y : 100}} animate={{opacity:1, y:0}} transition={{delay : 0.5}}>
            Prepping ur order ✨
        </motion.h1>
        <Player autoplay loop src={orderLoadsUp}></Player>
    </motion.div>
  )
}

export default OrderLoadsUp