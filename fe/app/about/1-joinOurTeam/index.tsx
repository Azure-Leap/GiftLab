'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import BlackButtonWithHoverEffect from '@/app/component/common/ButtonWithHoverEffect'
import { giftLabStatisticalInformationData } from '@/data/intro-home/statistical-information-giftlab'
import React, { useRef, useEffect } from 'react'
// import BlackButtonWithHoverEffect from '../component/common/ButtonWithHoverEffect'
import CountUpp from './CountUpp'

const JoinOurTeam = () => {

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({defaults : {duration : 0.8, ease : 'power4.easeIn'}})
  
  let first : any = useRef(null),
      containerRef : any = useRef(null),
      second : any = useRef(null),
      third : any = useRef(null),
      fourth : any = useRef(null),
      fifth : any = useRef(null)

  useEffect(()=>{
      tl.fromTo(first, {scale : 0.2, opacity : 0, translateY:25, transformOrigin : 'bottom'}, {rotateZ:0,translateY:0,scale : 1, opacity : 1, duration : 0.6, ease :'Back.easeOut(0.5)' }, '<0')
      tl.fromTo(second, {opacity : 0}, {opacity : 1,transformOrigin : 'bottom', duration : 1, ease :'power4'}, '<80%')
      tl.fromTo(third, { opacity:0,  transformOrigin : 'bottom'}, { opacity : 1, duration : 0.8}, '<20%')
      tl.fromTo(fourth, {rotateZ : 5, scale : 0.7, opacity : 0}, {rotateZ : 0, scale : 1, opacity : 1, ease : 'back.out(1.6)', duration : 0.9}, '<35%')
      tl.fromTo(fifth, {scale : 0.7, opacity : 0}, { scale : 1, opacity : 1, ease : 'back.out(1.6)', duration : 0.9}, '<35%')

  },[])


  return (
    <div ref={el=>containerRef=el} className='p-[200px_0_108px_0] flex flex-col gap-20 h-[100vh]]'>
        <div className='flex flex-col gap-8 items-center'>
            <p ref={el=>second=el} className='text-[18px] font-bold'>ABOUT THE TEAM</p>
            <p  ref={el=>first=el} className='text-[76px] font-semibold text-center leading-[90px]'>A great company has a <br /> great team behind</p>
            <p  ref={el=>third=el} className='font-medium text-[#39394f]'>Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ante velit <br /> nunc morbi pretium ut nullam dolor pulvinar proin viverra ullamcorper aceget.</p>
            <div ref={el=>fourth=el}>
              <BlackButtonWithHoverEffect btnName = 'Join our team' href='#' />
            </div>
        </div>
        <div ref={el=>fifth=el} className='grid grid-cols-4 gap-4'>
            {
                giftLabStatisticalInformationData.map((singleStatistic, idx) => <CountUpp key={idx} {...singleStatistic}/>)
            }
        </div>
    </div>
  )
}

export default JoinOurTeam