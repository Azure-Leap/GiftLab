'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

import HomeIntroAboutLeftSection from './1-letft'
import HomeIntroAboutRightSection from './1-right'
import HomeIntroAbout1stAnimation from './1st.animation'
import HomeIntroAboutSecondAnimation from './2nd-animation'
import HomeIntroAbout3rdAnimation from './3rd-animation'
import HomeIntroAbout5thAnimation from './5th-animation'

const GiftLabOurMission = () => {

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({defaults : {duration : 0.75, ease : 'power4'}})

    let firstAbout : any = useRef(null),
    secondAbout : any = useRef(null),
    thirdAbout : any = useRef(null),
    fourthAbout : any = useRef(null),
    fifthAbout : any = useRef(null),
    containerRef : any = useRef(null);


useEffect(()=>{


    let hide1st = gsap.to(firstAbout, {
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
      animation : gsap.to(firstAbout,  {rotateZ:0,translateY:0,scale : 1, opacity : 1, duration : 0.6, ease :'power4.easeIn' })
    })



    let hide2nd = gsap.to(secondAbout, {
      opacity : 0,
      translateX : -50,
      transformOrigin : 'left',
      duration : .75,
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-40%',
      end : 9999,
      animation : gsap.to(secondAbout, {translateX : 0, opacity : 1, ease :'power4'})
    })




    let hide3rd = gsap.to(thirdAbout, {
      opacity : 0,
      duration : .75,
      transformOrigin : 'bottom',
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-24%',
      end : 9999,
      animation : gsap.to(thirdAbout, {translateY:0, opacity : 1, duration : 0.8})
    })



    let hide4th = gsap.to(fourthAbout, {
      opacity : 0,
      duration : .75,
      rotateZ : 5,
       scale : 0.7, 
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-22%',
      end : 9999,
      animation : gsap.to(fourthAbout, {rotateZ : 0, scale : 1, opacity : 1, ease : 'back.out(1.6)', duration : 0.9})
    })

        //   About 2 btns
    let showBtns = gsap.to(fifthAbout, {
      opacity : 0,
      duration : .75,
      y : 20
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-10%',
      end : 9999,
      animation : gsap.to(fifthAbout, {opacity : 1, y:0, duration : 0.75})
    })
},[])



  return (
    <div className='h-[100vh]'>
    <div className='max-w-[1360px] mx-auto h-[100vh]'>
        <div ref={el=>containerRef=el} className='flex items-center justify-between w-full h-full  p-[200px_0_120px_0] '>
            <HomeIntroAboutLeftSection>
          
                <div ref={el=>secondAbout=el}>
                    <HomeIntroAboutSecondAnimation/>
                </div>

                <div ref={el=>firstAbout=el}>
                    <HomeIntroAbout1stAnimation/>
                </div>

                <div ref={el=>thirdAbout=el}>
                    <HomeIntroAbout3rdAnimation/>
                </div>

                <div ref={el=>fifthAbout=el}>
                    <HomeIntroAbout5thAnimation/>
                </div>

            </HomeIntroAboutLeftSection>

          <div ref={el=>fourthAbout=el} className='relative w-[50%] h-full'>
              <HomeIntroAboutRightSection/>
          </div>

        </div>
    </div>
</div>
  )
}

export default GiftLabOurMission