import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { HomeIntroAdvantageTitle } from './title'
import CarouselLongEars from './carousel'

const HomeIntroAdvantage = () => {

    gsap.registerPlugin(ScrollTrigger)
    let containerAdvantage : any = useRef(null),
        title : any = useRef(null),
        carousel : any = useRef(null);

    useEffect(()=>{
        const hideTitle = gsap.to(title, {opacity : 0}).progress(1)
        ScrollTrigger.create({
            // trigger : containerAdvantage,
            start : '-40%',
            animation : gsap.to(title, {opacity : 1, duration : 0.8, transformOrigin : 'top', ease : 'power4'})
        })

        const hideCarousel = gsap.to(carousel, {opacity : 0, scale : 0.7}).progress(1)
        ScrollTrigger.create({
            trigger : containerAdvantage,
            start : '-20%',
            animation : gsap.to(carousel, {opacity : 1, scale : 1, duration : 0.6, transformOrigin : 'bottom', ease : 'Back.easeOut(2)'})
        })
    },[])
  return (
    <div ref={el=>containerAdvantage=el} className='max-w-[1360px] mx-auto my-[213px]'>
        <div ref={el=>title=el}>
            <HomeIntroAdvantageTitle/>
        </div>
        <div ref={el=>carousel=el}>
            <CarouselLongEars/>
        </div>
    </div>
  )
}

export default HomeIntroAdvantage