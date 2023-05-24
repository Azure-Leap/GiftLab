'use client'
import React, { useEffect, useRef, useState } from 'react'
import { HiArrowNarrowRight, HiOutlineSparkles } from 'react-icons/hi'
import Typewriter from '../component/common/typewriter'
import {motion, AnimatePresence} from 'framer-motion'
import gsap from 'gsap'
const Login = () => {
    const [stage, setStage] = useState(0)
    const [infiniteAstro, setInfiniteAstro] = useState(false)
    let ari : any = useRef(),
        chat : any = useRef()

    useEffect(()=>{
        gsap.fromTo(ari, {y: 1000}, {y:0, ease: 'back.out(1.4)', duration:2})
        // gsap.to(ari, {
        //     keyframes : {
        //         '0%' : 20,
        //         '50%' : 0,
        //         '100%' : 20
        //     }, ease : 'ease'
            
        // })
        setTimeout(()=>{
            setInfiniteAstro(true)
        }, 2400)

        // let pathLength = chat.getTotalLength()
        // console.log(pathLength)
        // gsap.set(chat, {
        //     strokeDashoffset : 0,
        //     strokeDasharray : pathLength
        // })
        // gsap.fromTo(chat, {strokeDashoffset: pathLength}, {strokeDashoffset : 0, opacity : 1, delay:2.4 });
        setTimeout(()=>{
            setStage(1)
        }, 2800)

    },[])
  return (
    <div className='w-[1280px] mx-auto'>
        {/* top */}
        <div className='flex justify-between h-[80px] items-center border-b-2'>
            {/* Logo */}
            <div>
                <p>Logo</p>
            </div>
            {/* Sign In */}
            <div className='flex gap-2 items-center'>
                <p>Sign In</p>
                <span><HiArrowNarrowRight/></span>
            </div>
        </div>

        <div className='absolute flex'>
            <img 
                ref={el=>ari=el}
                className={` w-[250px] h-[250px] ${infiniteAstro ? 'animate-yInfinite' : ''}  `}
                src='/signUpSvg/Astruhhhnaaaat.png'/>
{/* 
            <svg className='absolute left-[300px] top-[90px] scale-x-[5] scale-y-[3]'  width="100" height="34" viewBox="0 0 68 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={el=>chat=el} d="M4 23.5L1 28H4V32L67 32.5V1H4V23.5Z" stroke="black"/>
            </svg> */}


            <div className='absolute left-[190px] top-[100px] p-2 w-full border-2 rounded-[10px_15px_15px_0]'>
                {stage > 0 && stage < 3 && <Typewriter whatStage={2} setStage={setStage} text='GiftLab-д тавтай морил' duration={50} />}
                {stage > 1 && stage < 3 && <Typewriter whatStage={3} setStage={setStage} text="Та GiftLab аар аялахыг хүсэж байна уу?" duration={50} />}
                {stage > 2 && stage < 4 && (
                    <div className='flex  gap-2 justify-center items-center'>
                        <p onClick={()=>{
                            
                        }}>NOOOO!</p>
                        <p onClick={()=>setStage(4)}>YESSSS!</p>
                    </div>
                )}
                {stage > 3 && stage < 5 && <Typewriter whatStage={5} setStage={setStage} text='Яиааа гал2! За аялахын тулд танийг бүртгэнээ. Та миний асуултанд үнэн зөв хариулаарай.' duration={50} /> }
                {stage > 4 && stage < 7 && (
                    <div>
                         <Typewriter whatStage={6} setStage={setStage} text='G-Мэйл хаяг нь юу вэ?' duration={50} />
                         {stage > 5 && (
                            <div className='flex gap-2'>
                                <input type='text' className='p-1 w-full'/>
                                <button onClick={()=> setStage(7)}>Next</button>
                            </div>
                         )}
                    </div>
                )}
                {stage > 6 && stage < 9 && (
                    <div>
                         <Typewriter whatStage={8} setStage={setStage} text='Шинэ нууц үг ээ оруулна уу.' duration={50} />
                         {stage > 7 && (
                            <div className='flex gap-2'>
                                <input type='text' className='p-1 w-full'/>
                                <button onClick={()=> setStage(9)}>Next</button>
                            </div>
                         )}
                    </div>
                )}
                {stage > 8 && stage < 12 && (
                    <div>
                         <Typewriter whatStage={10} setStage={setStage} text='Username?' duration={50} />
                         {stage > 9 && (
                            <div className='flex gap-2'>
                                <input type='text' className='p-1 w-full'/>
                                <button onClick={()=> setStage(11)}>Next</button>
                            </div>
                         )}
                    </div>
                )}
                                             

            </div>
        </div>
    </div>
  )
}

export default Login


/*
  Content
        <motion.div className='max-w-[800px] p-3 mx-auto flex flex-col bg-[#B0DAFF]'>

            Greeting to newbie
            <div>
                <Typewriter whatStage={2} setStage={setStage} text='Welcome to GiftLab!' duration={50} />

                Stage 1
                {stage > 1 && <Typewriter setStage={setStage} whatStage={3} text="Let's begin the adventure" duration={50}/>}
            </div>
            Get Emailchan
            <div className='flex flex-col'>

                Stage 2
                

                Stage 3
                {stage > 3 && (
                    <div className='flex items-center'>
                        <span><HiOutlineSparkles/></span>
                        <input className='p-1' type="Email" />
                        <p 
                            onClick={()=>setStage(5)}
                            className='border-2 border-[#000] p-1 rounded-[20px]'>Continue</p>
                    </div>
                )}

                Stage 4
                {stage > 4 && <Typewriter  whatStage={6} setStage={setStage} text='Enter Your Password Cool Dude!' duration={50}/>}
                {stage > 5 && (
                    <div className='flex items-center'>
                        <span><HiOutlineSparkles/></span>
                        <input className='p-1' type="Email" />
                        <p 
                            onClick={()=>setStage(7)}
                            className='border-2 border-[#000] p-1 rounded-[20px]'>Continue</p>
                    </div>
                )}
                
                {stage > 6 &&  <Typewriter  whatStage={8} setStage={setStage} text='Enter Your Username Cool Dude!' duration={50}/>}
                Stage 5
                {stage > 7 && (
                    <div className='flex items-center'>
                        <span><HiOutlineSparkles/></span>
                        <input className='p-1' type="text" />
                        <p 
                            onClick={()=>setStage(9)}
                            className='border-2 border-[#000] p-1 rounded-[20px]'>Continue</p>
                    </div>                    
                )}
                {stage > 8 && <Typewriter  whatStage={10} setStage={setStage} text='Now what is your password u entered!  to check ur not roboto hahahahha' duration={50}/>}
                {stage > 9 && (
                    <div className='flex items-center'>
                        <span><HiOutlineSparkles/></span>
                        <input className='p-1' type="text" />
                        <p 
                            onClick={()=>setStage(11)}
                            className='border-2 border-[#000] p-1 rounded-[20px]'>Continue</p>
                    </div>   
                )}
            </div>
        </motion.div>
*/