import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import React, { useEffect, useRef } from 'react'
import HomeIntroHeroLeftSection from './1-left'
import HomeIntroHeroRightSection from './1-right'
import HomeIntroHero1stAnimation from './1st-animation'
import HomeIntroHeroSecondAnimation from './2nd-animation'
import HomeIntroHero3rdAnimation from './3rd-animation'
import HomeIntroHero5thAnimation from './5th-animation'

const HomeIntroHero = () => {

  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({defaults : {duration : 0.75, ease : 'power4'}})

  let firstHero : any = useRef(null),
      secondHero : any = useRef(null),
      thirdHero : any = useRef(null),
      fourthHero : any = useRef(null),
      fifthHero : any = useRef(null),
      containerRef : any = useRef(null);


  useEffect(()=>{
      tl.fromTo(firstHero, {scale : 0.2, opacity : 0, translateY:25, transformOrigin : 'bottom'}, {rotateZ:0,translateY:0,scale : 1, opacity : 1, duration : 0.6, ease :'power4.easeIn' }, '<0')
      tl.fromTo(secondHero, {translateX : -50, opacity : 0,  transformOrigin : 'left'}, {translateX : 0, opacity : 1, ease :'power4'}, '<80%')
      tl.fromTo(thirdHero, {translateY:35, opacity:0,  transformOrigin : 'bottom'}, {translateY:0, opacity : 1, duration : 0.8}, '<60%')
      tl.fromTo(fourthHero, {rotateZ : 5, scale : 0.7, opacity : 0}, {rotateZ : 0, scale : 1, opacity : 1, ease : 'back.out(1.6)', duration : 0.9}, '<45%')


      //   Hero 2 btns
      let showBtns = gsap.to(fifthHero, {
        opacity : 0,
        duration : .75,
        y : 20
      }).progress(1);

      ScrollTrigger.create({
        trigger : containerRef,
        start : '1%',
        end : 9999,
        animation : gsap.to(fifthHero, {opacity : 1, y:0, duration : 0.75})
      })
  },[])

  

  return (
    <div className='h-[140vh]'>
      <div className='max-w-[1360px] mx-auto h-full'>
          <div ref={el=>containerRef=el} className='flex items-center justify-between w-full h-full  p-[200px_0_120px_0] '>
              <HomeIntroHeroLeftSection>
            
                  <div ref={el=>secondHero=el}>
                      <HomeIntroHeroSecondAnimation/>
                  </div>

                  <div ref={el=>firstHero=el}>
                      <HomeIntroHero1stAnimation/>
                  </div>

                  <div ref={el=>thirdHero=el}>
                      <HomeIntroHero3rdAnimation/>
                  </div>

                  <div ref={el=>fifthHero=el}>
                      <HomeIntroHero5thAnimation/>
                  </div>

              </HomeIntroHeroLeftSection>

            <div ref={el=>fourthHero=el} className='relative w-[50%] h-full'>
                <HomeIntroHeroRightSection/>
            </div>

          </div>
      </div>
  </div>
  )
}

export default HomeIntroHero