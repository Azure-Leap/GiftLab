'use client'
import HomeIntroHeroRightSection from '@/app/component/intro/Home/2-hero/1-right'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import HomeIntroMembersLeftSection from '../2-ourMission/1-letft'
import HomeIntroMembersRightSection from './1-right'
import HomeIntroMembers1stAnimation from './1st-animation'
import HomeIntroMembersSecondAnimation from './2nd-animation'
import HomeIntroMembers3rdAnimation from './3rd-animation'
import HomeIntroMembers5thAnimation from './5th-animation'

const TheGiftedTeamMembers = () => {

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({defaults : {duration : 0.75, ease : 'power4'}})

    let firstMembers : any = useRef(null),
    secondMembers : any = useRef(null),
    thirdMembers : any = useRef(null),
    fourthMembers : any = useRef(null),
    fifthMembers : any = useRef(null),
    containerRef : any = useRef(null);


useEffect(()=>{


    let hide1st = gsap.to(firstMembers, {
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
      animation : gsap.to(firstMembers,  {rotateZ:0,translateY:0,scale : 1, opacity : 1, duration : 0.6, ease :'power4.easeIn' })
    })



    let hide2nd = gsap.to(secondMembers, {
      opacity : 0,
      translateX : -50,
      transformOrigin : 'left',
      duration : .75,
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-40%',
      end : 9999,
      animation : gsap.to(secondMembers, {translateX : 0, opacity : 1, ease :'power4'})
    })




    let hide3rd = gsap.to(thirdMembers, {
      opacity : 0,
      duration : .75,
      transformOrigin : 'bottom',
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-24%',
      end : 9999,
      animation : gsap.to(thirdMembers, {translateY:0, opacity : 1, duration : 0.8})
    })



    let hide4th = gsap.to(fourthMembers, {
      opacity : 0,
      duration : .75,
      y : 60,
      //  scale : 0.7, 
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-22%',
      end : 9999,
      animation : gsap.to(fourthMembers, {y : 0, scale : 1, opacity : 1, ease : 'back.out(1.8)', duration : 2})
    })

        //   About 2 btns
    let showBtns = gsap.to(fifthMembers, {
      opacity : 0,
      duration : .75,
      y : 20
    }).progress(1);

    ScrollTrigger.create({
      trigger : containerRef,
      start : '-10%',
      end : 9999,
      animation : gsap.to(fifthMembers, {opacity : 1, y:0, duration : 0.75})
    })
},[])


  return (
    <div ref={el=>containerRef=el} className='p-[108px_0] grid grid-cols-10 gap-14 content-center h-full'>
      
        <div className='col-span-4 pt-24'>
            <HomeIntroMembersLeftSection>
              <div ref={el=>secondMembers=el}>
                <HomeIntroMembersSecondAnimation/>
              </div>
              <div ref={el=>firstMembers=el}>
                <HomeIntroMembers1stAnimation/>
              </div>
              <div ref={el=>thirdMembers=el}>
                <HomeIntroMembers3rdAnimation/>
              </div>
              <div ref={el=>fifthMembers=el}>
               <HomeIntroMembers5thAnimation/>
              </div>
            </HomeIntroMembersLeftSection>
        </div>

        <div ref={el=>fourthMembers=el} className='col-span-6'>
            <HomeIntroMembersRightSection/>
        </div>
    </div>
    
  )
}

export default TheGiftedTeamMembers