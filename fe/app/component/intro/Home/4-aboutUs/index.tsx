import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import React, { useEffect, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import BlackButtonWithHoverEffect from '../../../common/ButtonWithHoverEffect'
import HomeIntroAboutUsMainColor from './mainColor'
import HomeIntroAboutUsWiseWord from './wiseWord'

const HomeIntroAboutUs = () => {

    gsap.registerPlugin(ScrollTrigger);
    // const tl = gsap.timeline({defaults : {duration : 0.8, ease : 'power4.easeIn'}})
    
    let first : any = useRef(null),
        second : any = useRef(null),
        third : any = useRef(null),
        containerAboutUs : any = useRef(null);

    useEffect(()=>{
        const hideTitles = gsap.to(first, {opacity : 0}).progress(1);
        ScrollTrigger.create({
            // trigger : containerAboutUs,
            start : '-40%',
            end : 99999,
            animation : gsap.to(first, {opacity : 1, duration : 1, ease :'power4.easeIn' })
        })

        const hideMainColor = gsap.to(second, {opacity : 0, scale : 0.8, rotateZ : 3}).progress(1);
        ScrollTrigger.create({
            trigger : containerAboutUs,
            start : '-15%',
            animation : gsap.to(second, {opacity : 1, scale : 1, rotateZ:0, duration : 0.5, ease : 'power4.easeIn'})
        })
        const hideBtn = gsap.to(third, {opacity : 0, scale : 0.8, rotateZ : 3}).progress(1);
        ScrollTrigger.create({
            trigger : containerAboutUs,
            start : '20%',
            animation : gsap.to(third, {opacity : 1, scale : 1, rotateZ:0, duration : 0.2, ease : 'power4.easeIn'})
        })
    },[])


  return (
    <div ref={el=>containerAboutUs=el} className='py-[98px] w-[1360px] mx-auto my-[196px]'>
        <div ref={el=>first=el}>
            <HomeIntroAboutUsWiseWord/>
        </div>
        <div ref={el=>second=el}>
            <HomeIntroAboutUsMainColor/>
        </div>
        <div ref={el=>third=el} className='flex justify-center mt-16 duration-[300ms]'>
            <BlackButtonWithHoverEffect btnName='About Us' href='/about'/>
        </div>
    </div>
  )
}

export default HomeIntroAboutUs