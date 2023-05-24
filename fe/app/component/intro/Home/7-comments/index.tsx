import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import React, { useEffect, useRef } from 'react'

import { SliderBtn } from '../3-serviceSection/Btn-prev-next'
import { DontTakeOurWord } from './sectionTitle'
import HomeIntroSwipeComments from './SwipeComments'




const HomeIntroComments = () => {

  gsap.registerPlugin(ScrollTrigger);

  let container : any = useRef(null),
      title : any = useRef(null),
      slide : any = useRef(null);

  useEffect(()=>{
    let hideTitle = gsap.to(title, {opacity : 0}).progress(1);
    ScrollTrigger.create({
        // trigger : container,
        start : '-48%',
        animation : gsap.to(title, {opacity : 1, duration : 0.8, ease : 'power4'})
    })
    let hideSlide = gsap.to(slide,{opacity :0, translateX : 100}).progress(1)
    ScrollTrigger.create({
        trigger : container,
        start : '-28%',
        animation : gsap.to(slide, {opacity : 1, translateX : 0, duration : 0.8, ease : 'power4'})
    })
  },[])

  return (
    <div ref={el=>container=el} className='rounded-[40px] flex flex-col gap-14 overflow-visible'> 
        <div ref={el=>title=el}>
            <DontTakeOurWord/>
        </div>
        <div ref={el=>slide=el}>
            <HomeIntroSwipeComments/>
        </div>

    </div>
  )
}

export default HomeIntroComments