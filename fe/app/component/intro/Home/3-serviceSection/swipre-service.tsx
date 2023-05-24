'use client'
//-------------------------------------------------------------------------------->
// 3rd LIBRARIES 
import React, { useEffect, useRef, useState } from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// Icon IMPORT
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

// LOCAL IMPORT
import ServiceCard from './serviceCard'
import { sliderServiceSettings } from '@/utils/home-intro-slide-config'
import { servicesData } from '@/data/intro-home/service'
import { SliderBtn } from './Btn-prev-next'
import HomeIntroServices1stAnimation from './HomeIntroServices1stAnimation'
import HomeIntroServices2ndAnimation from './HomeIntroServices2ndAnimation'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineSparkles } from 'react-icons/hi'
import BlackButtonWithHoverEffect, { PurpleButtonWithHoverEffect } from '../../../common/ButtonWithHoverEffect'



// -------------------------------------------------------------------------------->



const SwipeService = () => {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({defaults : {duration : 0.75, ease : 'power4'}})
    const tl1 = gsap.timeline({defaults : {duration : 0.75, ease : 'power4'}})

    // For Hover effect
    const [swiperStyle, setSwiperStyle] = useState(-1);

    let first : any = useRef(null),
        second : any = useRef(null),
        third : any = useRef(null),
        fourth : any = useRef(null),
        swiper : any = useRef();

    useEffect(()=>{

        let showGiftLabService = gsap.to(first, {translateX : -50, opacity : 0,  transformOrigin : 'left'}).progress(1);
        ScrollTrigger.create({
            // trigger : swiper,
            start : '-48%',
            end : 9999,
            animation : tl.to(first, {translateX : 0, opacity : 1, ease :'power4'})
          })

        let showTitle = gsap.to(second, { opacity : 0,  transformOrigin : 'bottom'}).progress(1);
        ScrollTrigger.create({
            trigger : swiper,
            start : '-30%',
            end : 9999,
            animation : tl.to(second, { opacity : 1, duration : 0.6, ease :'power4.easeIn' }, '<0')
        })

        let showBtns =  gsap.to(third, { opacity : 0, translateX : 20,  transformOrigin : 'right'}).progress(1);
        ScrollTrigger.create({
            trigger : swiper,
            start : '-25%',
            end : 'bot',
            animation : tl1.to(third, { opacity : 1, translateX : 0, duration : 0.6, ease :'power4.easeIn' })
        })

        let showSlides =  gsap.to(fourth, { opacity : 0, translateX : 20,  transformOrigin : 'right'}).progress(1);
        ScrollTrigger.create({
            trigger : swiper,
            start : '1.5%',
            end : 'bot',
            animation : gsap.to(fourth, { opacity : 1, translateX : 0, duration : 0.6, ease :'power4.easeIn' })
        })

        // const el = fourth;
        // console.log(el);
    },[])

    


  return (
    <div ref={el=>swiper=el}>
        <Swiper  {...sliderServiceSettings} style={{overflow : 'visible', position : 'relative', display : 'flex', flexDirection : 'column-reverse', gap:'40px', maxWidth : '1360px', margin : '0 auto', transition : '3s'}} >

            <div className='grid grid-cols-2'>
                    
                    <div ref={el=>first=el} className='col-span-1'>
                        <HomeIntroServices1stAnimation/>
                    </div>   
                    
                    {/* bot of top */}
                    <div className='col-span-2 grid grid-cols-3 '>
                        
                        <div ref={el=>second=el} className='col-span-2'>
                            <HomeIntroServices2ndAnimation/>
                        </div>

                        <div ref={el=>third=el} className='flex items-end justify-end'>
                            <SliderBtn/>
                        </div>
                        
                    </div>  

            </div>

            {/* Sliders */}
            <div ref={fourth}>
                {servicesData.map((service,index)=>(
                    <SwiperSlide onMouseEnter={()=>setSwiperStyle(index)} onMouseLeave={()=>setSwiperStyle(-1)} key={index} style={{background:service.bg, transition : 'all 0.3s', borderRadius : '30px', translate : swiperStyle == index ? '0 -10px' : '0 0'}}>
                        <ServiceCard title={service.title} mainImg={service.mainImg} index ={index} swiperStyle ={swiperStyle}/>
                    </SwiperSlide>
                ))}
            </div>

        </Swiper>

        <div ref={el=>fourth=el} className='text-white font-bold flex gap-5 justify-center mt-10'>
                <BlackButtonWithHoverEffect btnName='Get in touch' href='/about'/>
                <PurpleButtonWithHoverEffect btnName ='Our Services' href='/services'/>
        </div>
    </div>
  )
}

export default SwipeService

