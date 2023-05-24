'use client'
import GiftLabSocialLinks from '@/app/component/common/OurLinks'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import HomeIntroContactUsLeftSection from './1-left'
import HomeIntroContactUsRightSection from './1-right'
import HomeIntroContactUs1stAnimation from './1st-animation'
import HomeIntroContactUsSecondAnimation from './2nd-animation'
import HomeIntroContactUs3rdAnimation from './3rd-animation'
import HomeIntroContactUs5thAnimation from './5th-animation'

const IntroContacUs = () => {

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({defaults : {duration : 0.75, ease : 'power4'}})

    let firstContactUs : any = useRef(null),
    secondContactUs : any = useRef(null),
    thirdContactUs : any = useRef(null),
    fourthContactUs : any = useRef(null),
    fifthContactUs : any = useRef(null),
    containerRef : any = useRef(null);


useEffect(()=>{


    let hide1st = gsap.to(firstContactUs, {
      opacity : 0,
      scale : .2,
      translateY:25,
      transformOrigin : 'bottom',
      duration : .75,
    }).progress(1);



    ScrollTrigger.create({
      trigger : containerRef,
      start : '-45%',
      end : 9999,
      animation : gsap.to(firstContactUs,  {rotateZ:0,translateY:0,scale : 1, opacity : 1, duration : 0.6, ease :'power4.easeIn' })
    })



    let hide2nd = gsap.to(secondContactUs, {
      opacity : 0,
      translateX : -50,
      transformOrigin : 'left',
      duration : .75,
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-40%',
      end : 9999,
      animation : gsap.to(secondContactUs, {translateX : 0, opacity : 1, ease :'power4'})
    })




    let hide3rd = gsap.to(thirdContactUs, {
      opacity : 0,
      duration : .75,
      transformOrigin : 'bottom',
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-24%',
      end : 9999,
      animation : gsap.to(thirdContactUs, {translateY:0, opacity : 1, duration : 0.8})
    })



    let hide4th = gsap.to(fourthContactUs, {
      opacity : 0,
      duration : .75,
      rotateZ : 5,
       scale : 0.7, 
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-22%',
      end : 9999,
      animation : gsap.to(fourthContactUs, {rotateZ : 0, scale : 1, opacity : 1, ease : 'back.out(1.6)', duration : 0.9})
    })

        //   ContactUs 2 btns
    let showBtns = gsap.to(fifthContactUs, {
      opacity : 0,
      duration : .75,
      y : 20
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-10%',
      end : 9999,
      animation : gsap.to(fifthContactUs, {opacity : 1, y:0, duration : 0.75})
    })
},[])


  return (
    <div className='h-[100vh]'>
    <div className='max-w-[1360px] mx-auto h-[100vh]'>
        <div ref={el=>containerRef=el} className='grid content-center  grid-cols-2 gap-16 w-full  p-[200px_0_120px_0] '>
            <div className='col-span-1'>
                <HomeIntroContactUsLeftSection>
            
                    <div ref={el=>secondContactUs=el}>
                        <HomeIntroContactUsSecondAnimation/>
                    </div>

                    <div ref={el=>firstContactUs=el}>
                        <HomeIntroContactUs1stAnimation/>
                    </div>

                    <div ref={el=>thirdContactUs=el}>
                        <HomeIntroContactUs3rdAnimation/>
                    </div>

                    <div className='flex gap-10 items-center' ref={el=>fifthContactUs=el}>
                        <HomeIntroContactUs5thAnimation/>
                        <div>
                            <GiftLabSocialLinks bgColor='bg-default-black' textColor='text-white'/>
                        </div>
                    </div>

                </HomeIntroContactUsLeftSection>
            </div>

          <div ref={el=>fourthContactUs=el} className='relative col-span-1'>
              <HomeIntroContactUsRightSection/>
          </div>

        </div>
    </div>
</div>
  )
}

export default IntroContacUs