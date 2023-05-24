import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import HomeIntroContactUsMotivation from './2-motivationQuestion'
import HomeIntroContactUsTitle from './1-title'



const HomeIntroContactUs = () => {
    const tl = gsap.timeline({defaults : {duration : 0.7, ease : 'power4.easeIn'}})
    gsap.registerPlugin(ScrollTrigger);

    let first : any = useRef(),
        second : any = useRef(),
        third : any = useRef(),
        fourth : any = useRef();

    useEffect(()=>{
        const hideContactUs = gsap.to(first, {opacity : 0, scale : 0.6}).progress(1);
        const hideContainer = gsap.to(second, {translateX : -100, opacity : 0,  transformOrigin : 'left'}).progress(1);
        const hideDescription = gsap.to(third, {opacity : 0}).progress(1);
        const hideMainColor = gsap.to(fourth, {opacity : 0}).progress(1);

        ScrollTrigger.create({
            // trigger : first,
            start : '-175%',
            end : 9999,
            animation : tl.to(first, {opacity:1, scale : 1, ease : 'Back.easeOut(2)'})
          })
        ScrollTrigger.create({
            trigger : first,
            start : '-40%',
            animation : tl.to(second,{translateX : 0, opacity : 1, ease :'power4'}, '<40%')
        })
        ScrollTrigger.create({
            trigger : first,
            start : '-40%',
            animation : tl.to(third, {opacity:1}, '<50%')
        })
        ScrollTrigger.create({
            trigger : first,
            start : '-40%',
            animation : tl.to(fourth, {opacity:1},'<60%')
        })
    },[])
    
  return (
    <div ref={el=>first=el} className='w-[1360px] mx-auto py-[113px] p-[100px_46px_100px_89px] bg-[#c3edff] rounded-[60px] grid grid-cols-2 relative'>
        <div className='grid-cols-1'>
            <div ref={el=>second=el}>
                <HomeIntroContactUsTitle/>
            </div>
            <div  ref={el=>third=el}>
                <HomeIntroContactUsMotivation/>
            </div>
        </div>
        <div ref={el=>fourth=el} className='grid-cols-1'>
            <img className='w-full absolute -top-[448px] -right-[350px] scale-[0.57]' src="https://assets.website-files.com/6316200a92cc0efb7ac10dbc/63167e895dd15f49782e61d8_image-cta-v1-rocket-template.webp" alt="" />
        </div>
    </div>
  )
}

export default HomeIntroContactUs