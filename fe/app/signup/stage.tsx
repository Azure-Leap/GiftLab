import { useLoginForm } from '@/context/loginform'
import React from 'react'
import Typewriter from '../component/common/typewriter'
import {motion, AnimatePresence } from 'framer-motion'

const Stage = ({max, min, label, setStage, stage, type, layoutId, name } : {max :number, min : number, label:string, setStage:any, stage:any,type:string,layoutId:string, name : string}) => {

    const { setUserSignUpDataInDatabase } = useLoginForm()
  return (
    <AnimatePresence>
      <motion.div className='shadow-[0_0_10px_rgba(255,255,255,1)] rounded-[20px]'>
        <motion.div layoutId={layoutId} initial={{opacity:0, scale:0.3,transformOrigin:'left'}} animate={{opacity:1, scale:1}} exit={{opacity:0,scale:0}} className='flex flex-col p-8  shadow-[inset_0_0_2px_rgba(255,255,255,1)] bg-gradient-to-tr from-[#000] to-[#3c3d59] w-[400px] rounded-[20px] '>
              <Typewriter text={label} duration={50} setStage={setStage} whatStage={max-1}/>
              {stage > min+1 && stage < max && (
                  <div className='flex gap-2 items-center'>
                      <div className='border-b-2 '>
                          <input className='bg-transparent p-2 outline-none' name={name} type={type} onChange={setUserSignUpDataInDatabase} />
                      </div>
                      <div onClick={()=>setStage(max)}>
                          <Typewriter duration={50} setStage={setStage} whatStage={max-1} text='Үргэлжлүүлэх'/>
                      </div>
                  </div>
              )}
          </motion.div>
      </motion.div>
    </AnimatePresence>

  )
}

export default Stage