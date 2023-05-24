import React from 'react'
import {motion, AnimatePresence } from 'framer-motion'

const SmoothMoveMaker = ({layoutId} :any) => {
  return (
    <motion.div layoutId={layoutId} style={{borderRadius : '32px'}} className='z-10 absolute top-0 inset-0  bg-white  '/>
  )
}

export default SmoothMoveMaker