'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'


import BlackButtonWithHoverEffect from '@/app/component/common/ButtonWithHoverEffect'
import OurValuesCards from './ourValuesCards'
import OurValuesTitle from './ourValuesTitle'

const OurValues = () => {

  gsap.registerPlugin(ScrollTrigger)

  let title : any = useRef(),
      cards : any = useRef(),
      btn : any = useRef(),
      container : any = useRef();

  useEffect(()=>{
    
    let hideTitle = gsap.to(title, {opacity : 0, y:-50}).progress(1),
        hideCards = gsap.to(cards, {opacity : 0, y : 100}).progress(1),
        hideBtn = gsap.to(btn, {opacity : 0, rotateZ : -15}).progress(1);

    ScrollTrigger.create({
      trigger : container,
      start : '-35%',
      animation : gsap.to(title, {opacity : 1, y : 0, duration : 1.2, ease : 'power4'})
    })

    ScrollTrigger.create({
      trigger : container,
      start : '-17%',
      animation : gsap.to(cards, {opacity : 1, y : 0, duration : 1.2, ease : 'power4'})
    })
    ScrollTrigger.create({
      trigger : container,
      start : '32%',
      animation : gsap.to(btn, {opacity : 1, y : 0, rotateZ : 0, duration : 1.2, ease : 'power4'})
    })
  },[])

  return (

    <div ref={el=>container=el} className='p-[108px_0]'>

      <div ref={el=>title=el}>
        <OurValuesTitle/>
      </div>

      <div ref={el=>cards=el}>
        <OurValuesCards/>
      </div>

      <div ref={el=>btn=el} className='flex justify-center mt-14'>
        <BlackButtonWithHoverEffect btnName='Join our team!' href='/contact'/>
      </div>

    </div>
  )
}

export default OurValues